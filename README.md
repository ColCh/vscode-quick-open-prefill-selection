# quick-open-prefill-selection

VS Code extension which adds command that will open *Quick Open* window prefilled with selected text

![Demo](https://media.giphy.com/media/3ohjUQ0vwIZTGx1wis/giphy.gif)

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

### 0.0.1

Initial release

-----------------------------------------------------------------------------------------------------------
