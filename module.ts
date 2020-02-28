import { AppPlugin } from '@grafana/data';
import { AppSettings } from './types';
import { ConfigCtrl } from './config/config';
// import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Chooser as Page1 } from './pages/FileUploader';


export {
  ConfigCtrl,
  Page2
};

export const plugin = new AppPlugin<AppSettings>()
  .addConfigPage({
    title: "page 1",
    icon: "fa fa-info",
    body: Page1,
    id: 'page1'
  });
