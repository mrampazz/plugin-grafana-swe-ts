import { PanelPlugin } from '@grafana/data';
import { Panel } from './react/Panel';

export const plugin = new PanelPlugin(Panel);
