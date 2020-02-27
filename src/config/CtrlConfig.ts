import { PluginMeta } from "@grafana/data";

export class CtrlConfig {
    static templateUrl = './CtrlConfig.html';
    editControl: any;
    appModel?: PluginMeta;

    constructor($scope: any, $injector: any) {
        this.editControl
            .setPostUpdateHook(this.postUpdate);
        
        if (!this.appModel) {
            this.appModel = {} as PluginMeta;
        }

    }

    postUpdate = () => {
        if (!this.appModel?.enabled) {
            console.log("App not enabled");
            return;
        }
        // Qui possiamo fare qualcosa dopo l'update
        console.log('Post Update', this);
    }

}