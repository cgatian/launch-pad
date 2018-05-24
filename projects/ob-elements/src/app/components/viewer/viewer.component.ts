import { Component, OnInit, ViewEncapsulation, Input, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { ListenerComponent } from '../listener.component';
import { ObDocument, ObDocumentModel } from '../interfaces';

@Component({
  selector: 'a-ob-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: [
    '../_defaults.scss',
    './viewer.component.scss',
  ],
  encapsulation: ViewEncapsulation.Native,
})
export class ObViewerComponent extends ListenerComponent implements OnInit {

  _documentId: string;

  _documentModel: Array<{url: string}> = [];

  _documentModels: ObDocumentModel[] = [
    {
      id: '1', pageCount: 3, url: '/assets/docs/1/page-1.jpg',
    },
    {
      id: '2', pageCount: 5, url: '/assets/docs/2/page-1.png',
    },
    {
      id: '3', pageCount: 2, url: '/assets/docs/3/page-1.jpg',
    },
    {
      id: '4', pageCount: 3, url: '/assets/docs/1/page-1.jpg',
    },
    {
      id: '5', pageCount: 5, url: '/assets/docs/2/page-1.jpg',
    },
    {
      id: '6', pageCount: 2, url: '/assets/docs/3/page-1.jpg',
    },
    {
      id: '7', pageCount: 3, url: '/assets/docs/1/page-1.jpg',
    },
    {
      id: '8', pageCount: 5, url: '/assets/docs/2/page-1.jpg',
    },
    {
      id: '9', pageCount: 2, url: '/assets/docs/3/page-1.jpg',
    },
  ];


  constructor(
    private changeDectorRef: ChangeDetectorRef,
    private renderer: Renderer2,
  ) {
    super(changeDectorRef, renderer);
  }

  ngOnInit(): void { }

  onBind(event: CustomEvent<ObDocument>): void {
    this._documentId = event.detail.id;

    const documentModel = this._documentModels.find(models => {
      return models.id === this._documentId;
    });

    if (!documentModel) {
      throw new Error('Document model not found');
    }
    this._documentModel = [];
    for (let i = 0; i < documentModel.pageCount; i++) {
      this._documentModel.push({ url: documentModel.url });
    }
  }
}

