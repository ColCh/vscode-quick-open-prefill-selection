import * as assert from 'assert';
import * as vscode from 'vscode';
import * as myExtension from '../extension';

suite("quick-open-prefill-selection", () => {
    const context = {
        subscriptions: []
    } as vscode.ExtensionContext;

    test("should open 'quick open' and prefill selected text", async () => {
        let text = '';
        vscode.commands.registerCommand('workbench.action.quickOpen', (input: string) => {
            text = input;
        });
        myExtension.activate(context);
        const document = await vscode.workspace.openTextDocument({
            content: 'foo'
        });
        const editor = await vscode.window.showTextDocument(document);
        editor.selection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(0, 3));
        vscode.commands.executeCommand('extension.quickOpen.withPrefill');
        myExtension.deactivate();

        assert.equal(text, 'foo');
    });
});