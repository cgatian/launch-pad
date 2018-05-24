import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { ObDocument } from '../interfaces';


@Component({
  selector: 'a-ob-hit-list',
  templateUrl: './hit-list.component.html',
  styleUrls: [
    '../_defaults.scss',
    './hit-list.component.scss',
  ],
  encapsulation: ViewEncapsulation.Native,
})
export class ObHitListComponent implements OnInit {

  @Output()
  notify = new EventEmitter<any>();

  @Output()
  documentSelected = new EventEmitter<ObDocument>();

  documents: ObDocument[] = [
    { id: '1', name: 'Resume Letter Larry Johnson' },
    { id: '2', name: 'Insurance Claim #43' },
    { id: '3', name: 'Clothing Shop Invoice' },
    { id: '4', name: 'Health System Patient Bob Willis' },
    { id: '5', name: 'Test2' },
    { id: '6', name: 'Test3' },
    { id: '7', name: 'Test1' },
    { id: '8', name: 'Test2' },
    { id: '9', name: 'Test3' },
  ];

  constructor() { }

  ngOnInit(): void { }

  onDocumentSelected(document: ObDocument) {
    this.documentSelected.emit(document);
    this.notify.emit(document);
  }
}
