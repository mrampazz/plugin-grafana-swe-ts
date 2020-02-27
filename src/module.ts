import { AppPlugin } from '@grafana/data';
import { AppSettings } from './types';
import { ConfigCtrl } from './config/config';

import { RootPage } from './config/react/RootPage';
import { Page1 } from './config/react/Page1';
import { Page2 } from './config/react/Page2';

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
