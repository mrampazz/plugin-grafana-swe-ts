import {PanelCtrl} from "grafana/app/plugins/sdk";

import _ from "lodash";

export class JsImportPanel extends PanelCtrl {
  static templateUrl = "panels/import-json-panel/partials/panelTemplate.html";
  static scrollable = true;

  panelDefaults = {
    draw_area_id: "",
    graph_connected_to_network: false,
    jsonContent: "",
    save_datasources: [],
    secondToRefresh: 5,
    write_datasource_id: "",
    write_db_name: "test_DB"
  };

  constructor ($scope: any, $injector: any) {
    super($scope, $injector);
    _.defaults(this.panel, this.panelDefaults);

    this.events.on("init-edit-mode", this.onInitEditMode.bind(this));
  }

  onInitEditMode () {
    this.addEditorTab("Manage network",
        "public/plugins/grafana-prediction-plugin/panels/import-json-panel/partials/optionTab_importEditJson.html",
        1);

    this.events.emit("data-received", null);

  }

  // Called only on import button click, if the import doesn't throw errors, it reset the saved data
  async upload_button_click (net: any) {
    await this.onUpload(net);

  }

  // Called on import button click but also to re-load a saved network
  async onUpload (net: any) {

  }

  // Called from anularjs with ng-change
  onTextBoxRefresh () {

  }
}
