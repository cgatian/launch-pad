import * as grapesjs from 'grapesjs';
import { GrapesEditor } from '../interfaces';

const PLUGIN_NAME = 'ob-basics';

export function basicsPlugin() {
  grapesjs.plugins.add(PLUGIN_NAME, (editor: GrapesEditor, options) => {
    const blockManager = editor.BlockManager;

    blockManager.add('image', {
      label: 'Image',
      category: 'Basics',
      attributes: {class:'gjs-fonts gjs-f-image'},
      content: {
        style: {color: 'black'},
        type:'image',
        activeOnRender: 1
      },
    });

    blockManager.add('link', {
      label: 'Link',
      category: 'Basics',
      attributes: {class:'fa fa-link'},
      content: {
        type:'link',
        content:'Link',
        style: {color: '#d983a6'}
      },
    });

    blockManager.add('text', {
      label: 'Text',
      category: 'Basics',
      attributes: {class:'gjs-fonts gjs-f-text'},
      content: {
        type:'text',
        content:'Insert your text here',
        style: {padding: '10px' },
        activeOnRender: 1
      },
    });

    blockManager.add('flex', {
      label: 'Flex Row',
      category: 'Layout',
      attributes: {class:'fa fa-columns'},
      content: `
      <div style="display: flex;" data-gjs-droppable="true">
        <div class="ob-flex-item" style="flex: 1 1 auto; min-height:200px;"></div>
        <div class="ob-flex-item" style="flex: 1 1 auto;"></div>
      </div>

      `
    });

  });

  return PLUGIN_NAME;
}


