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

See [CHANGELOG](CHANGELOG.md) for details.
