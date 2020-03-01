import { PluginMeta } from '@grafana/data';
export class ConfigCtrl {
  static templateUrl: string;
  // enabled: boolean;
  appEditCtrl: any;
  appModel?: PluginMeta;
  $location: any;

  /** @ngInject */
  constructor($location: any) {
    this.$location = $location;
    // this.enabled = false;
    // this.appEditCtrl = null;
    // this.appModel = null;

    // Codice consigliato da Grafana per gestire abilitazione plugin
    this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this));
    if (!this.appModel) {
      this.appModel = {} as PluginMeta;
    }

    const appModel = this.appModel as any;
    if (!appModel.jsonData) {
      appModel.jsonData = {};
    }
    console.log(this);
  }

  postUpdate() {
    if (!this.appModel?.enabled) {
      console.log("plugin disabled");
      return;
    }

    console.log('Post Update, plugin loaded', this);
  }

  redirect() {
    //console.info("redirect() not done");
  }
}

ConfigCtrl.templateUrl = 'components/config.html';
