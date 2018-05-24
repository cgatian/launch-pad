export function createObComponent(selector: string, editor: any) {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
}

export interface GrapesComponent {
  model: any;
  view: any;
}
