export class ConfigCtrl {
  static templateUrl: string;
  enabled: boolean;
  appEditCtrl: any;
  appModel: any;
  $location: any;

  constructor($location: any) {
    this.$location = $location;
    this.enabled = false;
    this.appEditCtrl = null;
    this.appModel = null;
  }

  redirect() {
    //console.info("redirect() not done");
  }
}

ConfigCtrl.templateUrl = 'components/config.html';
