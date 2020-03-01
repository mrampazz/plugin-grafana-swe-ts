import { PanelCtrl } from 'grafana/app/plugins/sdk';

import _ from 'lodash';
import { PanelEvents } from '@grafana/data';

export class JsImportPanel extends PanelCtrl {
  static templateUrl = 'panels/import-json-panel/partials/panelTemplate.html';
  static scrollable = true;

  panelDefaults = {
    jsonContent: '',
    secondToRefresh: 5,
  };

  /** @ngInject */
  constructor($scope: any, $injector: any) {
    super($scope, $injector);
    _.defaults(this.panel, this.panelDefaults);

    this.events.on(PanelEvents.editModeInitialized, this.onInitEditMode.bind(this));
  }

  onInitEditMode() {
    this.addEditorTab('Import JSON', 'public/plugins/grafana-prediction-plugin/panels/import-json-panel/partials/optionTab_importEditJson.html', 2);
  }

  // Called only on import button click, if the import doesn't throw errors, it reset the saved data
  async upload_button_click(net: any) {
    await this.onUpload(net);
  }

  // Called on import button click but also to re-load a saved network
  async onUpload(net: any) {}

  // Called from anularjs with ng-change
  onTextBoxRefresh() {}
}
