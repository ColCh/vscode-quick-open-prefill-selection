'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.quickOpen.withPrefill', () => {
        vscode.commands.executeCommand(
            'workbench.action.quickOpen',
            vscode.window.activeTextEditor.document.getText(vscode.window.activeTextEditor.selection)
        );
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}