import { window, ExtensionContext, languages, TextDocument, Position, commands, Uri, workspace } from "vscode"
import { UnicodeMath } from "./unicodeMath"

/**
 * Function to run when the extension is activated 
 * 
 * @param context the editor context
 */
export function activate(context: ExtensionContext) {

    // get trigger string from setting
    const triggerStrs = 
        (workspace.getConfiguration().get("unicodeMath.TriggerStrings") as string[])
        .concat(workspace.getConfiguration().get("unicodeMathInput.TriggerStrings") as string[])

    // create class with trigger string
    const unicodeMath = new UnicodeMath(triggerStrs)

    // register config change 
    workspace.onDidChangeConfiguration(async (changeEvent) => {
        if (changeEvent.affectsConfiguration("unicodeMath.TriggerStrings") ||
            changeEvent.affectsConfiguration("unicodeMathInput.TriggerStrings")) {
            console.debug("Trigger Strings updated, reloading the extension")
            const selection =
                await window.showWarningMessage(
                    "Trigger string changed, please reload window for the change to take effect",
                    "reload"
                )

            if (selection === "reload") {
                console.debug("reload selected, trying to reload current window")
                void commands.executeCommand("workbench.action.reloadWindow")
            }
        }
    })

    // register the completion provider
    const completionProvider = languages.registerCompletionItemProvider(
        '*',
        {
            provideCompletionItems(document: TextDocument, position: Position) {
                return unicodeMath.provideCompletion(document, position)
            }
        },
        ...triggerStrs  // trigger completion on slash
    )
    context.subscriptions.push(completionProvider)

    // register tab commit
    context.subscriptions.push(commands.registerCommand('unicode-math-input.commit', () => unicodeMath.commit('tab')))

    // register diagnostic
    const convertibleDiagnostics = languages.createDiagnosticCollection("unicode-math-input.convertible")
    context.subscriptions.push(convertibleDiagnostics)
    // generate all the diagnostics
    if (window.activeTextEditor !== undefined) {
        convertibleDiagnostics.set(
            window.activeTextEditor.document.uri,
            unicodeMath.genAllDiagnostic(window.activeTextEditor.document)
        )
    }
    // refresh diagnostic on editor change
    context.subscriptions.push(
        window.onDidChangeActiveTextEditor(editor => {
            // if current editor is live, and don't have any diagnostic data
            if (editor !== undefined && convertibleDiagnostics.get(editor.document.uri) === undefined) {
                convertibleDiagnostics.set(
                    editor.document.uri,
                    unicodeMath.genAllDiagnostic(editor.document)
                )
            }
        })
    )
    // refresh diagnostic on text change
    context.subscriptions.push(
        workspace.onDidChangeTextDocument(e => {
            const curDiagnostic = convertibleDiagnostics.get(e.document.uri)
            if (curDiagnostic !== undefined) {
                convertibleDiagnostics.set(
                    e.document.uri,
                    unicodeMath.updateChangedLinesDiagnostic(e, e.document, curDiagnostic)
                )
            }
            else {
                convertibleDiagnostics.set(
                    e.document.uri,
                    unicodeMath.genAllDiagnostic(e.document)
                )
            }
        })
    )
    // remove diagnostic data when closed
    context.subscriptions.push(
        workspace.onDidCloseTextDocument(doc => convertibleDiagnostics.delete(doc.uri))
    )



    console.debug("extension activated")
}
