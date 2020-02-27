import { AppPlugin } from '@grafana/data';
import { AppSettings } from './types';
import { ConfigCtrl } from './config/config';

import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';

export {
  ConfigCtrl,
  Page1,
  Page2
};

export const plugin = new AppPlugin<AppSettings>();
