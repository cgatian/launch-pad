import * as grapesjs from 'grapesjs';
import { GrapesEditor } from '../interfaces';

const PLUGIN_NAME = 'ob-blocks';

export function blocksPlugin() {
  grapesjs.plugins.add(PLUGIN_NAME, (editor: GrapesEditor, options) => {
    const blockManager = editor.BlockManager;

    // blockManager.add('test-block', {
    //   label: 'Hello World',
    //   category: 'Basic',
    //   content: '<ob-hello-world></ob-hello-world>',
    // });

    blockManager.add('ob-hit-list', {
      label: 'Hit List',
      category: 'OnBase',
      attributes: {class:'fa fa-list ob-block'},
      content: '<ob-hit-list></ob-hit-list>',
    });

    blockManager.add('viewer-hitlist', {
      label: 'Viewer & Hitlist',
      category: 'OnBase',
      attributes: {class:'fa fa-file-text ob-block'},
      content: `<ob-hit-list parent></ob-hit-list><ob-viewer child></ob-viewer>`
    });



  });

  return PLUGIN_NAME;
}


