import { AppPlugin } from '@grafana/data';
import { AppSettings } from './types';
import { ConfigCtrl } from './config/config';

import { RootPage } from './pages/RootPage';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';

export {
  ConfigCtrl
};

export const plugin = new AppPlugin<AppSettings>()
  .setRootPage(RootPage)
  .addConfigPage({
    title: 'Page 1',
    icon: 'fa fa-info',
    body: Page1,
    id: 'page1',
  })
  .addConfigPage({
    title: 'Page 2',
    icon: 'fa fa-user',
    body: Page2,
    id: 'page2',
  });
