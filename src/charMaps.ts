/**
 * This file contain maps that maps character to it in a specific math font
 * Most of these are from ibus LaTeX table:
 * https://github.com/moebiuscurve/ibus-table-others/blob/118c31d0461ab1f56692a6921f730a28b4d77edf/tables/latex.txt
 */

export const supsMap = new Map<string, string>([
    ["0", "⁰"],
    ["i", "ⁱ"],
    ["1", "¹"],
    ["2", "²"],
    ["3", "³"],
    ["4", "⁴"],
    ["5", "⁵"],
    ["6", "⁶"],
    ["7", "⁷"],
    ["8", "⁸"],
    ["9", "⁹"],
    ["+", "⁺"],
    ["-", "⁻"],
    ["=", "⁼"],
    ["(", "⁽"],
    [")", "⁾"],
    ["a", "ᵃ"],
    ["b", "ᵇ"],
    ["c", "ᶜ"],
    ["d", "ᵈ"],
    ["e", "ᵉ"],
    ["f", "ᶠ"],
    ["g", "ᵍ"],
    ["h", "ʰ"],
    ["i", "ⁱ"],
    ["j", "ʲ"],
    ["k", "ᵏ"],
    ["l", "ˡ"],
    ["m", "ᵐ"],
    ["n", "ⁿ"],
    ["o", "ᵒ"],
    ["p", "ᵖ"],
    ["q", "𐞥"],
    ["r", "ʳ"],
    ["s", "ˢ"],
    ["t", "ᵗ"],
    ["u", "ᵘ"],
    ["v", "ᵛ"],
    ["v", "ⱽ"],
    ["w", "ʷ"],
    ["x", "ˣ"],
    ["y", "ʸ"],
    ["z", "ᶻ"],
    ["A", "ᴬ"],
    ["B", "ᴮ"],
    ["C", "ꟲ"],
    ["D", "ᴰ"],
    ["E", "ᴱ"],
    ["F", "ꟳ"],
    ["G", "ᴳ"],
    ["H", "ᴴ"],
    ["I", "ᴵ"],
    ["J", "ᴶ"],
    ["K", "ᴷ"],
    ["L", "ᴸ"],
    ["M", "ᴹ"],
    ["N", "ᴺ"],
    ["O", "ᴼ"],
    ["P", "ᴾ"],
    ["Q", "ꟴ"],
    ["R", "ᴿ"],
    ["T", "ᵀ"],
    ["U", "ᵁ"],
    ["V", "ⱽ"],
    ["W", "ᵂ"],
])


export const subsMap = new Map<string, string>([
    ["0", "₀"],
    ["1", "₁"],
    ["2", "₂"],
    ["3", "₃"],
    ["4", "₄"],
    ["5", "₅"],
    ["6", "₆"],
    ["7", "₇"],
    ["8", "₈"],
    ["9", "₉"],
    ["+", "₊"],
    ["-", "₋"],
    ["=", "₌"],
    ["(", "₍"],
    [")", "₎"],
    ["a", "ₐ"],
    ["e", "ₑ"],
    ["h", "ₕ"],
    ["i", "ᵢ"],
    ["j", "ⱼ"],
    ["k", "ₖ"],
    ["l", "ₗ"],
    ["m", "ₘ"],
    ["n", "ₙ"],
    ["o", "ₒ"],
    ["p", "ₚ"],
    ["r", "ᵣ"],
    ["s", "ₛ"],
    ["t", "ₜ"],
    ["u", "ᵤ"],
    ["v", "ᵥ"],
    ["x", "ₓ"],
])


export const boldMap = new Map<string, string>([
    ["A", "𝐀"],
    ["B", "𝐁"],
    ["C", "𝐂"],
    ["D", "𝐃"],
    ["E", "𝐄"],
    ["F", "𝐅"],
    ["G", "𝐆"],
    ["H", "𝐇"],
    ["I", "𝐈"],
    ["J", "𝐉"],
    ["K", "𝐊"],
    ["L", "𝐋"],
    ["M", "𝐌"],
    ["N", "𝐍"],
    ["O", "𝐎"],
    ["P", "𝐏"],
    ["Q", "𝐐"],
    ["R", "𝐑"],
    ["S", "𝐒"],
    ["T", "𝐓"],
    ["U", "𝐔"],
    ["V", "𝐕"],
    ["W", "𝐖"],
    ["X", "𝐗"],
    ["Y", "𝐘"],
    ["Z", "𝐙"],
    ["a", "𝐚"],
    ["b", "𝐛"],
    ["c", "𝐜"],
    ["d", "𝐝"],
    ["e", "𝐞"],
    ["f", "𝐟"],
    ["g", "𝐠"],
    ["h", "𝐡"],
    ["i", "𝐢"],
    ["j", "𝐣"],
    ["k", "𝐤"],
    ["l", "𝐥"],
    ["m", "𝐦"],
    ["n", "𝐧"],
    ["o", "𝐨"],
    ["p", "𝐩"],
    ["q", "𝐪"],
    ["r", "𝐫"],
    ["s", "𝐬"],
    ["t", "𝐭"],
    ["u", "𝐮"],
    ["v", "𝐯"],
    ["w", "𝐰"],
    ["x", "𝐱"],
    ["y", "𝐲"],
    ["z", "𝐳"],
    ["0", "𝟎"],
    ["1", "𝟏"],
    ["2", "𝟐"],
    ["3", "𝟑"],
    ["4", "𝟒"],
    ["5", "𝟓"],
    ["6", "𝟔"],
    ["7", "𝟕"],
    ["8", "𝟖"],
    ["9", "𝟗"],
])


export const italicMap = new Map<string, string>([
    ["A", "𝐴"],
    ["B", "𝐵"],
    ["C", "𝐶"],
    ["D", "𝐷"],
    ["E", "𝐸"],
    ["F", "𝐹"],
    ["G", "𝐺"],
    ["H", "𝐻"],
    ["I", "𝐼"],
    ["J", "𝐽"],
    ["K", "𝐾"],
    ["L", "𝐿"],
    ["M", "𝑀"],
    ["N", "𝑁"],
    ["O", "𝑂"],
    ["P", "𝑃"],
    ["Q", "𝑄"],
    ["R", "𝑅"],
    ["S", "𝑆"],
    ["T", "𝑇"],
    ["U", "𝑈"],
    ["V", "𝑉"],
    ["W", "𝑊"],
    ["X", "𝑋"],
    ["Y", "𝑌"],
    ["Z", "𝑍"],
    ["a", "𝑎"],
    ["b", "𝑏"],
    ["c", "𝑐"],
    ["d", "𝑑"],
    ["e", "𝑒"],
    ["f", "𝑓"],
    ["g", "𝑔"],
    ["i", "𝑖"],
    ["j", "𝑗"],
    ["k", "𝑘"],
    ["l", "𝑙"],
    ["m", "𝑚"],
    ["n", "𝑛"],
    ["o", "𝑜"],
    ["p", "𝑝"],
    ["q", "𝑞"],
    ["r", "𝑟"],
    ["s", "𝑠"],
    ["t", "𝑡"],
    ["u", "𝑢"],
    ["v", "𝑣"],
    ["w", "𝑤"],
    ["x", "𝑥"],
    ["y", "𝑦"],
    ["z", "𝑧"],
])


export const calMap = new Map<string, string>([
    ["E","ℰ"],
    ["F","ℱ"],
    ["g","ℊ"],
    ["H","ℋ"],
    ["I","ℐ"],
    ["L","ℒ"],
    ["M","ℳ"],
    ["R","ℛ"],
    ["B","ℬ"],
    ["A", "𝒜"],
    ["C", "𝒞"],
    ["D", "𝒟"],
    ["G", "𝒢"],
    ["J", "𝒥"],
    ["K", "𝒦"],
    ["N", "𝒩"],
    ["O", "𝒪"],
    ["P", "𝒫"],
    ["Q", "𝒬"],
    ["S", "𝒮"],
    ["T", "𝒯"],
    ["U", "𝒰"],
    ["V", "𝒱"],
    ["W", "𝒲"],
    ["X", "𝒳"],
    ["Y", "𝒴"],
    ["Z", "𝒵"],
    ["a", "𝒶"],
    ["b", "𝒷"],
    ["c", "𝒸"],
    ["d", "𝒹"],
    ["f", "𝒻"],
    ["h", "𝒽"],
    ["i", "𝒾"],
    ["j", "𝒿"],
    ["k", "𝓀"],
    ["l", "𝓁"],
    ["m", "𝓂"],
    ["n", "𝓃"],
    ["p", "𝓅"],
    ["q", "𝓆"],
    ["r", "𝓇"],
    ["s", "𝓈"],
    ["t", "𝓉"],
    ["u", "𝓊"],
    ["v", "𝓋"],
    ["w", "𝓌"],
    ["x", "𝓍"],
    ["y", "𝓎"],
    ["z", "𝓏"],
])


export const frakMap = new Map<string, string>([
    ["H", "ℌ"],
    ["R", "ℜ"],
    ["C", "ℭ"],
    ["Z", "ℨ"],
    ["A", "𝔄"],
    ["B", "𝔅"],
    ["D", "𝔇"],
    ["E", "𝔈"],
    ["F", "𝔉"],
    ["G", "𝔊"],
    ["J", "𝔍"],
    ["K", "𝔎"],
    ["L", "𝔏"],
    ["M", "𝔐"],
    ["N", "𝔑"],
    ["O", "𝔒"],
    ["P", "𝔓"],
    ["Q", "𝔔"],
    ["S", "𝔖"],
    ["T", "𝔗"],
    ["U", "𝔘"],
    ["V", "𝔙"],
    ["W", "𝔚"],
    ["X", "𝔛"],
    ["Y", "𝔜"],
    ["a", "𝔞"],
    ["b", "𝔟"],
    ["c", "𝔠"],
    ["d", "𝔡"],
    ["e", "𝔢"],
    ["f", "𝔣"],
    ["g", "𝔤"],
    ["h", "𝔥"],
    ["i", "𝔦"],
    ["j", "𝔧"],
    ["h", "𝔨"],
    ["l", "𝔩"],
    ["m", "𝔪"],
    ["n", "𝔫"],
    ["o", "𝔬"],
    ["p", "𝔭"],
    ["q", "𝔮"],
    ["r", "𝔯"],
    ["s", "𝔰"],
    ["t", "𝔱"],
    ["u", "𝔲"],
    ["v", "𝔳"],
    ["w", "𝔴"],
    ["x", "𝔵"],
    ["y", "𝔶"],
    ["z", "𝔷"],
])


export const bbMap = new Map<string, string>([
    ["C", "ℂ"],
    ["H", "ℍ"],
    ["N", "ℕ"],
    ["P", "ℙ"],
    ["Q", "ℚ"],
    ["R", "ℝ"],
    ["Z", "ℤ"],
    ["A", "𝔸"],
    ["B", "𝔹"],
    ["D", "𝔻"],
    ["E", "𝔼"],
    ["F", "𝔽"],
    ["G", "𝔾"],
    ["I", "𝕀"],
    ["J", "𝕁"],
    ["K", "𝕂"],
    ["L", "𝕃"],
    ["M", "𝕄"],
    ["O", "𝕆"],
    ["S", "𝕊"],
    ["T", "𝕋"],
    ["U", "𝕌"],
    ["V", "𝕍"],
    ["W", "𝕎"],
    ["X", "𝕏"],
    ["Y", "𝕐"],
    ["a", "𝕒"],
    ["b", "𝕓"],
    ["c", "𝕔"],
    ["d", "𝕕"],
    ["e", "𝕖"],
    ["f", "𝕗"],
    ["g", "𝕘"],
    ["h", "𝕙"],
    ["i", "𝕚"],
    ["j", "𝕛"],
    ["k", "𝕜"],
    ["l", "𝕝"],
    ["m", "𝕞"],
    ["n", "𝕟"],
    ["o", "𝕠"],
    ["p", "𝕡"],
    ["q", "𝕢"],
    ["r", "𝕣"],
    ["s", "𝕤"],
    ["t", "𝕥"],
    ["u", "𝕦"],
    ["v", "𝕧"],
    ["w", "𝕨"],
    ["x", "𝕩"],
    ["y", "𝕪"],
    ["z", "𝕫"],
    ["0", "𝟘"],
    ["1", "𝟙"],
    ["2", "𝟚"],
    ["3", "𝟛"],
    ["4", "𝟜"],
    ["5", "𝟝"],
    ["6", "𝟞"],
    ["7", "𝟟"],
    ["8", "𝟠"],
    ["9", "𝟡"],
])

export const sfMap = new Map([
    ["0", "𝟢"],
	["1", "𝟣"],
	["2", "𝟤"],
	["3", "𝟥"],
	["4", "𝟦"],
	["5", "𝟧"],
	["6", "𝟨"],
	["7", "𝟩"],
	["8", "𝟪"],
	["9", "𝟫"],
    ["A", "𝖠"],
	["B", "𝖡"],
	["C", "𝖢"],
	["D", "𝖣"],
	["E", "𝖤"],
	["F", "𝖥"],
	["G", "𝖦"],
	["H", "𝖧"],
	["I", "𝖨"],
	["J", "𝖩"],
	["K", "𝖪"],
	["L", "𝖫"],
	["M", "𝖬"],
	["N", "𝖭"],
	["O", "𝖮"],
	["P", "𝖯"],
	["Q", "𝖰"],
	["R", "𝖱"],
	["S", "𝖲"],
	["T", "𝖳"],
	["U", "𝖴"],
	["V", "𝖵"],
	["W", "𝖶"],
	["X", "𝖷"],
	["Y", "𝖸"],
	["Z", "𝖹"],
	["a", "𝖺"],
	["b", "𝖻"],
	["c", "𝖼"],
	["d", "𝖽"],
	["e", "𝖾"],
	["f", "𝖿"],
	["g", "𝗀"],
	["h", "𝗁"],
	["i", "𝗂"],
	["j", "𝗃"],
	["k", "𝗄"],
	["l", "𝗅"],
	["m", "𝗆"],
	["n", "𝗇"],
	["o", "𝗈"],
	["p", "𝗉"],
	["q", "𝗊"],
	["r", "𝗋"],
	["s", "𝗌"],
	["t", "𝗍"],
	["u", "𝗎"],
	["v", "𝗏"],
	["w", "𝗐"],
	["x", "𝗑"],
	["y", "𝗒"],
	["z", "𝗓"],
])


export const ttMap = new Map([
    ["0", "𝟶"],
	["1", "𝟷"],
	["2", "𝟸"],
	["3", "𝟹"],
	["4", "𝟺"],
	["5", "𝟻"],
	["6", "𝟼"],
	["7", "𝟽"],
	["8", "𝟾"],
	["9", "𝟿"],
    ["A", "𝙰"],
	["B", "𝙱"],
	["C", "𝙲"],
	["D", "𝙳"],
	["E", "𝙴"],
	["F", "𝙵"],
	["G", "𝙶"],
	["H", "𝙷"],
	["I", "𝙸"],
	["J", "𝙹"],
	["K", "𝙺"],
	["L", "𝙻"],
	["M", "𝙼"],
	["N", "𝙽"],
	["O", "𝙾"],
	["P", "𝙿"],
	["Q", "𝚀"],
	["R", "𝚁"],
	["S", "𝚂"],
	["T", "𝚃"],
	["U", "𝚄"],
	["V", "𝚅"],
	["W", "𝚆"],
	["X", "𝚇"],
	["Y", "𝚈"],
	["Z", "𝚉"],
	["a", "𝚊"],
	["b", "𝚋"],
	["c", "𝚌"],
	["d", "𝚍"],
	["e", "𝚎"],
	["f", "𝚏"],
	["g", "𝚐"],
	["h", "𝚑"],
	["i", "𝚒"],
	["j", "𝚓"],
	["k", "𝚔"],
	["l", "𝚕"],
	["m", "𝚖"],
	["n", "𝚗"],
	["o", "𝚘"],
	["p", "𝚙"],
	["q", "𝚚"],
	["r", "𝚛"],
	["s", "𝚜"],
	["t", "𝚝"],
	["u", "𝚞"],
	["v", "𝚟"],
	["w", "𝚠"],
	["x", "𝚡"],
	["y", "𝚢"],
	["z", "𝚣"],
])


export const scrMap = new Map([
    ["A", "𝒜"],
    ["B", "ℬ"],
	["C", "𝒞"],
	["D", "𝒟"],
    ["E", "ℰ"],
	["F", "ℱ"],
	["G", "𝒢"],
    ["H", "ℋ"],
    ["I", "ℐ"],
	["J", "𝒥"],
	["K", "𝒦"],
    ["L", "ℒ"],
	["M", "ℳ"],
	["N", "𝒩"],
	["O", "𝒪"],
	["P", "𝒫"],
	["Q", "𝒬"],
    ["R", "ℛ"],
	["S", "𝒮"],
	["T", "𝒯"],
	["U", "𝒰"],
	["V", "𝒱"],
	["W", "𝒲"],
	["X", "𝒳"],
	["Y", "𝒴"],
	["Z", "𝒵"],
	["a", "𝒶"],
	["b", "𝒷"],
	["c", "𝒸"],
	["d", "𝒹"],
    ["e", "ℯ"],
	["f", "𝒻"],
    ["g", "ℊ"],
	["h", "𝒽"],
	["i", "𝒾"],
	["j", "𝒿"],
	["k", "𝓀"],
	["l", "𝓁"],
	["m", "𝓂"],
	["n", "𝓃"],
    ["o", "ℴ"],
	["p", "𝓅"],
	["q", "𝓆"],
	["r", "𝓇"],
	["s", "𝓈"],
	["t", "𝓉"],
	["u", "𝓊"],
	["v", "𝓋"],
	["w", "𝓌"],
	["x", "𝓍"],
	["y", "𝓎"],
	["z", "𝓏"],
])

export const scMap = new Map([
    ["a", "ᴀ"],
	["b", "ʙ"],
	["c", "ᴄ"],
	["d", "ᴅ"],
	["e", "ᴇ"],
	["f", "ꜰ"],
	["g", "ɢ"],
	["h", "ʜ"],
	["i", "ɪ"],
	["j", "ᴊ"],
	["k", "ᴋ"],
	["l", "ʟ"],
	["m", "ᴍ"],
	["n", "ɴ"],
	["o", "ᴏ"],
	["p", "ᴘ"],
	["q", "ꞯ"],
	["r", "ʀ"],
	["s", "ꜱ"],
	["t", "ᴛ"],
	["u", "ᴜ"],
	["v", "ᴠ"],
	["w", "ᴡ"],
	["y", "ʏ"],
	["z", "ᴢ"],
    ["A", "ᴀ"],
	["B", "ʙ"],
	["C", "ᴄ"],
	["D", "ᴅ"],
	["E", "ᴇ"],
	["F", "ꜰ"],
	["G", "ɢ"],
	["H", "ʜ"],
	["I", "ɪ"],
	["J", "ᴊ"],
	["K", "ᴋ"],
	["L", "ʟ"],
	["M", "ᴍ"],
	["N", "ɴ"],
	["O", "ᴏ"],
	["P", "ᴘ"],
	["Q", "ꞯ"],
	["R", "ʀ"],
	["S", "ꜱ"],
	["T", "ᴛ"],
	["U", "ᴜ"],
	["V", "ᴠ"],
	["W", "ᴡ"],
	["Y", "ʏ"],
	["Z", "ᴢ"],
])