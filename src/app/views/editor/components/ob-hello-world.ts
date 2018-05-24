import { GrapesEditor } from "../interfaces";

const selector = 'ob-hello-world';

export function obHelloWorldComponent(editor: GrapesEditor) {
  const grapesComponents = editor.DomComponents;
  const defaultType = grapesComponents.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  grapesComponents.addType(selector, {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        tagName: selector,
        droppable: true,
        void: false,
        hoverable: true,
        stylable: true,
        editable: true,
        highlightable: true,
        bind: '',
        bindable: true,
        toolbar: [{
          attributes: { class: 'fa fa-arrows' },
          command: 'tlb-move',
        }, {
          attributes: { class: 'fa fa-clone' },
          command: 'tlb-clone',
        }],
      }
    },
    {
      isComponent: function (el) {
        if (el.tagName === selector.toUpperCase()) {
          return { type: selector };
        }
      }
    }),
    view: defaultType.view
  });
}
