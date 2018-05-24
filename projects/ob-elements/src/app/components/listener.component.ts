import { Input, ChangeDetectorRef, Renderer2 } from '@angular/core';

export abstract class ListenerComponent {

  private _bindId: string;

  @Input('bindid')
  set bindId(val: string) {
    this._bindId = val;
    this._bind();
  }

  constructor(
    private _changeDectorRef: ChangeDetectorRef,
    private _renderer: Renderer2,
  ) { }

  abstract onBind(event: CustomEvent): void;

  private _bind() {
    if (this._bindId) {
      const boundElement = document.getElementById(this._bindId);
      if (boundElement) {
        console.log(`Binding to:`, boundElement);
        this._renderer.listen(boundElement, 'notify', (event: CustomEvent) => {
          this.onBind(event);
          this._changeDectorRef.detectChanges();
        });
      } else {
        console.log(`Failed to locate element with Id ${this._bindId}`);
      }
    }
  }
}
