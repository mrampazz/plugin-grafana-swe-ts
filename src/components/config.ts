export class ConfigCtrl {
  static templateUrl: string;
  $location: any;

  constructor($location: any) {
    this.$location = $location;
  }

}

ConfigCtrl.templateUrl = "components/config.html";
