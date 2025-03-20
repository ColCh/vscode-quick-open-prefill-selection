# quick-open-prefill-selection

VS Code extension which adds command that will open *Quick Open* window prefilled with selected text

## Demo video

(works in [vscode web](https://code.visualstudio.com/docs/editor/vscode-web) too)

[![Imgur](https://i.imgur.com/sMvVy4N.png)](https://imgur.com/9Mvhp15)

## Extension Settings

Open your [keybindings.json](https://code.visualstudio.com/docs/getstarted/keybindings#_advanced-customization) and add this keybinding:

```json
{
    "key": "cmd+p",
    "command": "extension.quickOpen.withPrefill",
    "when": "editorTextFocus && editorHasSelection && !editorHasMultipleSelections"
}
```

## Release Notes

### [v0.2.0](https://github.com/ColCh/vscode-quick-open-prefill-selection/compare/v0.1.0...v0.2.0)

> 20 March 2025

- feat: fix repo url, update demo link, update repo to latest vscode extension boilerplate, adapt extension for vscode web [`2cab28e`](https://github.com/ColCh/vscode-quick-open-prefill-selection/commit/2cab28ec039b9412af5881891ffc17e8df041745)

### v0.1.0

> 08 Feb 2018

- Initial [`cbd4c43`](https://github.com/ColCh/vscode-quick-open-prefill-selection/commit/cbd4c43990efd2fa9967c98de1fc76e45e2c187f)
