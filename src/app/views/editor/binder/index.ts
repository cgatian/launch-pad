import * as grapesjs from 'grapesjs';
import { GrapesEditor } from '../interfaces';

const PLUGIN_NAME = 'ob-binder';

export function binderPlugin() {
  grapesjs.plugins.add(PLUGIN_NAME, (editor: GrapesEditor, options) => {
    let id = 0;
    editor.on('canvas:drop', (DataTransfer, models) => {
      if (models.length && models.length > 1) {
        console.log('binding');
        const parentModel = models.filter(model => {
          return !!model.attributes['parent'];
        });
        const bindableModels = models.filter(model => {
          return !!model.attributes['child'];
        });
        const newId = ++id;
        parentModel[0].set('id', newId);
        (parentModel[0].getEl() as HTMLElement).setAttribute('id', newId.toString());

        bindableModels.forEach(model => {
          (model.getEl() as HTMLElement).setAttribute('bindid', newId.toString());
          model.set('bindid', newId);
        });
      }

    });

  });
  return PLUGIN_NAME;
}
