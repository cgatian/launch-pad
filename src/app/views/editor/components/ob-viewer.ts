import { GrapesEditor } from "../interfaces";

const selector = 'ob-viewer';

export function obViewerComponent(editor: GrapesEditor) {
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
        resizable: true,
        bind: '',
        bindable: true,
        // toolbar: [{
        //   attributes: { class: 'fa fa-arrows' },
        //   command: 'tlb-move',
        // }, {
        //   attributes: { class: 'fa fa-clone' },
        //   command: 'tlb-clone',
        // }],
      },
      initialize(o, opt) {
        defaultModel.prototype.initialize.apply(this, arguments);
        const attr = this.get('attributes');
        if (typeof(attr.child) !==  undefined && attr.child === '') {
          this.set('child', true);
        }
        if (typeof(attr.parent) !== undefined && attr.parent === '') {
          this.set('parent', true);
        }
      },
    },
    {
      isComponent: function (el) {
        if (el.tagName === selector.toUpperCase()) {
          return { type: selector };
        }
      }
    }),
    view: defaultType.view.extend({
      render: function () {
        // Extend the original render method
        defaultType.view.prototype.render.apply(this, arguments);

        const bindId = this.model.get('bindid');
        if (bindId) {
          this.el.setAttribute('bindid', bindId);
        }
        return this;
      },
    }),
  });
}
