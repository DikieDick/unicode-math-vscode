# Unicode Math Input For VSCode

# Supported Features

## Autocompletion

In any language, when you type `\`, this extension will start suggesting possible latex input. 
Autocompletion will also preview the character that you are currently typing

**NOTICE**, when [LaTeX Workshop](https://github.com/James-Yu/LaTeX-Workshop) is activated, 
the `\` trigger seems to be taken by LaTeX Workshop, so completion won't work,
a workaround is type `\\`, then delete the first `\`. 


## Tab Commit

When you press tab after a LaTeX symbol, it will convert the LaTeX symbol into unicode.
The commit key can be changed by changing the keybinding for `unicode-math-input.commit`.

## Prefix 

Currently we support the following prefixes:

| Prefix  | LaTeX Command |
| --- | --- |
| `\^`  | superscript |
| `\_`  | subscript |
|`\b:` | bold |
|`\bf:` | bold |
|`\mathbf:` | bold |
|`\mathbf` | bold |
|`\i:` | italic |
|`\it:` | italic |
|`\mathit:` | italic |
|`\mathit` | italic |
|`\cal:` | `\mathcal` |
|`\mathcal:` | `\mathcal` |
|`\mathcal` | `\mathcal` |
|`\frak:` | `\mathfrak` |
|`\mathfrak:` | `\mathfrak` |
|`\mathfrak` | `\mathfrak` |
|`\Bbb:` | `\mathbb` |
|`\mathbb:` | `\mathbb` |
|`\mathbb` | `\mathbb` |

When you type a prefix, then a word (without space),
the extension will commit the unicode version of that font.
For example when you type `\it:text<tab>`, `\it:text` will be changed to `𝑡𝑒𝑠𝑡`

**NOTICE**: not all common characters are supported in unicode, 
the extension will try its best to convert everything. 
For example `\_lazyfox<tab>` will give `ₗₐzyfₒₓ`.

# License

This extension is licensed under LGPLv3.0,
because the license of [ibus-latex-table](https://github.com/moebiuscurve/ibus-table-others/blob/main/tables/latex.txt) is under LGPL

# Acknowledgement 

This project is a rewrite of [Fast Unicode Math Characters](https://github.com/gatapia/unicode-math-input)
by [Guido Tapia](https://github.com/gatapia). 

The mapping from latex to unicode is provided by 

- [UnicodeMath](https://github.com/mvoidex/UnicodeMath), which inspired[Fast Unicode Math Characters](https://github.com/gatapia/unicode-math-input)
- [Fast Unicode Math Characters](https://github.com/gatapia/unicode-math-input)
- [ibus-latex-table](https://github.com/moebiuscurve/ibus-table-others/blob/main/tables/latex.txt)

This project is definitely not possible without these projects.


# Roadmap

- [ ] disable extension in particular language (in particular LaTeX)
- [ ] reverse search prefix or latex command
- [ ] more tests