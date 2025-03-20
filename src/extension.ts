import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.quickOpen.withPrefill', async () => {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            await vscode.commands.executeCommand('workbench.action.quickOpen', '');
            return;
        }

        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);

        await vscode.commands.executeCommand('workbench.action.quickOpen', selectedText);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}