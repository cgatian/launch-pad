import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'a-ob-hello-world',
  template: `<div (click)="test()">Hello World: {{ _name }}</div>`,
  styles: [`
  :host {
    display: block;
  },
`],
  encapsulation: ViewEncapsulation.Native,
})
export class ObHelloWorldComponent implements OnInit {
  _name: string;

  constructor(private changeDector: ChangeDetectorRef) { }

  ngOnInit(): void { }

  test() {
    this._name = 'CHAZ';
    this.changeDector.detectChanges();
  }
}
