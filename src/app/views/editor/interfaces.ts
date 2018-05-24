export interface GrapesEditor {
  getModel: () => {};
  BlockManager: any;
  DomComponents: any;
  on: (event: string, callback: (DataTransfer: any, Models: any) => void) => void;
}
