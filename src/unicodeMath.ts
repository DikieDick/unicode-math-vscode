import {
    TextDocument, Position, Range, CompletionItem, TextEditor,
    TextEditorEdit, commands, window, CompletionItemKind
} from "vscode";
import { supsMap, subsMap, boldMap, italicMap, calMap, frakMap, bbMap } from "./maps";
import { symbols } from './symbols';


const SPACE_KEY: string = 'space';

/**
 * Types of string mappings, usually used for math fonts
 */
enum StringMapType {
    Superscript = "Superscript",
    Subscript = "Subscript",
    Bold = "Bold",
    Italic = "Italic",
    MathCal = "mathcal",
    MathFrak = "mathfrak",
    MathBB = "mathbb",
}


/**
 * A map that map the prefix to its corresponding maps
 */
const prefixToMapType: Map<string, StringMapType> = new Map([
    ["\\^", StringMapType.Superscript],
    ["\\_", StringMapType.Subscript],

    ["\\b:", StringMapType.Bold],
    ["\\bf:", StringMapType.Bold],
    ["\\mathbf:", StringMapType.Bold],
    ["\\mathbf", StringMapType.Bold],

    ["\\i:", StringMapType.Italic],
    ["\\it:", StringMapType.Italic],
    ["\\mathit:", StringMapType.Italic],
    ["\\mathit", StringMapType.Italic],

    ["\\cal:", StringMapType.MathCal],
    ["\\mathcal:", StringMapType.MathCal],
    ["\\mathcal", StringMapType.MathCal],

    ["\\frak:", StringMapType.MathFrak],
    ["\\mathfrak:", StringMapType.MathFrak],
    ["\\mathfrak", StringMapType.MathFrak],

    ["\\Bbb:", StringMapType.MathBB],
    ["\\mathbb:", StringMapType.MathBB],
    ["\\mathbb", StringMapType.MathBB],
])

// all the possible prefixes
const prefixes: string[] = Array.from(prefixToMapType.keys())

// Give the map type its corresponding map.
function mapTypeToMap(mapType: StringMapType): Map<string, string> {
    switch(mapType) {
        case StringMapType.Superscript: return supsMap
        case StringMapType.Subscript: return subsMap
        case StringMapType.Bold: return boldMap
        case StringMapType.Italic: return italicMap
        case StringMapType.MathCal: return calMap
        case StringMapType.MathFrak: return frakMap
        case StringMapType.MathBB: return bbMap
    }
}


/**
 * Given a word, strip the prefix, and get the map type that prefix correspond to 
 * Notice this will automatically match the longest prefix to avoid ambiguity in the prefix
 * 
 * @param word the pre-converted ascii word that the user typed
 * @returns the map type corresponding to the string, and the string with prefix striped
 */
function stripPrefix(word: string): [StringMapType, string] | null {
    const validPrefix = prefixes.filter((prefix) => word.startsWith(prefix))
    const longestPrefix = validPrefix.reduce((p1, p2) => p1.length >= p2.length ? p1 : p2, "")
    const wordWithoutPrefix = word.slice(longestPrefix.length)
    const mapType = prefixToMapType.get(longestPrefix)

    return mapType ? [mapType, wordWithoutPrefix] : null
}

/**
 * Given a string and a map type, convert it to its corresponding unicode version.
 * This function will ignoring unknown characters
 * 
 * @param str the input string, typed by the user
 * @param type the conversion type (typically math fonts)
 * @returns the unicode version of the converted string
 */
function mapString(str: string, type: StringMapType): string {
    return str.split("")
        .map(char => mapTypeToMap(type).get(char) ?? char)
        .join("")
}

/**
 * Given a user inputted string, convert it into unicode, 
 * return null if it cannot be converted
 * @param str a input string, typed in the editor by the user
 * @returns the unicode version of the input string
 */
function convertString(str: string): string | null {

    const [mapType, withoutPrefix] = stripPrefix(str) ?? [null, null]

    // if a prefix cannot be found, then fallback to search in symbols
    if (mapType === null && withoutPrefix === null) { return symbols[str] || null }

    // if prefix can be found, using prefix
    else { return mapString(withoutPrefix, mapType) }
}


/**
 * Generate completion based on the string at cursor
 * @param str the user inputted string at the cursor
 * @param target the range (starting position to end position) of the str including the slash in the beginning
 * @returns a list of completion items from the current string.
 */
export function genCompletions(str: string, target: Range): CompletionItem[] {
    console.debug(`generating completion for ${str}`)

    // special case if the string matches any prefix
    // then just return how current string will be converted
    const [mapType, withoutPrefix] = stripPrefix(str) ?? [null, null]
    if (mapType && withoutPrefix) {
        console.debug(`matched prefix of ${mapType}`)

        const converted = mapString(withoutPrefix, mapType)
        const completion = new CompletionItem(str, CompletionItemKind.Text)
        completion.range = target
        completion.detail = converted
        completion.insertText = converted

        return [completion]
    }

    // default case, return all the possible completion items (all the unicode and prefixes)
    else {
        const prefixCompletionItems = prefixes.map(prefix => {
            const completion = new CompletionItem(prefix, CompletionItemKind.Keyword)
            completion.range = target
            // retrigger completion after prefix, to complete the map string
            completion.command =
                { command: 'editor.action.triggerSuggest', title: 'completing after prefix' }
            return completion
        })

        const symbolCompletionsItems =
            Object.entries<string>(symbols).map(([inpStr, unicodeChar]) => {
                const completion = new CompletionItem(inpStr, CompletionItemKind.Constant)
                completion.detail = unicodeChar
                completion.insertText = unicodeChar
                completion.range = target
                return completion
            })

        return prefixCompletionItems.concat(symbolCompletionsItems)
    }
}


/**
 * check the word (from the last "\" to current cursor) at the current cursor position
 * @param document the text document that is on the screen
 * @param position position of the cursor
 * @returns the "word" in front of the cursor and its range, starting from (including) "\"
 */
export function evalPosition(document: TextDocument, position: Position): [Range, string] | null {
    // at the start of the line, there is nothing in front.
    if (position.character === 0) { return null; }
    try {
        const lineStart = new Position(position.line, 0)
        const lnRange = new Range(lineStart, position)
        const line = document.getText(lnRange)

        const slash = line.lastIndexOf('\\')
        if (slash < 0) {console.error(`unexpected error, "\\" is not found before the cursor: \n${line}`); return null}

        const word = line.slice(slash)
        const start = new Position(position.line, slash)
        const end = start.translate(undefined, word.length)

        return [new Range(start, end), word]

    } catch (e) {
        console.error("unexpected error, while finding word in front of the cursor", e)
        return null;
    }
}

// legacy code
// I am not quiet happy with how this code looks, the null handling in Typescript doesn't seem to be great
export function tabCommit(key: string): void {
    if (!key || !window.activeTextEditor || !window.activeTextEditor.selection) { return; }

    const editor: TextEditor = <TextEditor>window.activeTextEditor;
    const doKey = () => {
        if (key === SPACE_KEY) {
            commands.executeCommand('type', { source: 'keyboard', text: ' ' });
        } else {
            commands.executeCommand(key);
        }
    };

    var c = false;
    editor.edit((editor: TextEditorEdit) => {
        window.activeTextEditor?.selections.map((v) => {
            const position = v.start;
            if (window.activeTextEditor) {
                const [target, word] = evalPosition(window.activeTextEditor.document, position) ?? [null, null]
                if (target && word) {
                    console.debug(`trying to commit ${word}`)
                    const changed = convertString(word);
                    console.debug(`committing to ${changed}`)
                    if (changed) {
                        editor.delete(target);
                        editor.insert(target.start, changed);
                        c = true;
                    };
                }
            }
        });
    });
    // always propagate the space key, or propagate tab
    // only if not used to insert a character
    if (!c || key === SPACE_KEY) { return doKey(); }
}


