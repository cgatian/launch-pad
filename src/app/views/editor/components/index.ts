import * as grapesjs from 'grapesjs';
import { obHelloWorldComponent } from './ob-hello-world';
import { obHitListComponent } from './ob-hit-list';
import { obViewerComponent } from './ob-viewer';
import { GrapesEditor } from '../interfaces';

const PLUGIN_NAME = 'ob-components';

export function componentPlugin() {
  grapesjs.plugins.add(PLUGIN_NAME, (editor: GrapesEditor, options) => {
    const components = [
      obHelloWorldComponent,
      obHitListComponent,
      obViewerComponent,
    ];
    components.forEach(component => component(editor));
  });
  return PLUGIN_NAME;
}
