import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import * as grapesjs from 'grapesjs';
import { config } from './config';

@Component({
  selector: 'lp-editor-view',
  templateUrl: './editor.view.html',
  styleUrls: ['./editor.view.scss']
})
export class EditorView implements OnInit, AfterViewInit {

  @ViewChild('container', { read: ElementRef }) container: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const editor = grapesjs.init({ container: this.container.nativeElement, ...config });
    editor.render();
  }
}
