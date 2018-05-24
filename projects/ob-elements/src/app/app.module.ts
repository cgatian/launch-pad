import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ObHelloWorldComponent } from './components/hello-world/hello-world.component';
import { ObHitListComponent } from './components/hit-list/hit-list.component';
import { ObViewerComponent } from './components/viewer/viewer.component';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ObHelloWorldComponent,
    ObHitListComponent,
    ObViewerComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  entryComponents: [
    ObHelloWorldComponent,
    ObHitListComponent,
    ObViewerComponent,
  ],
  bootstrap: !environment.production ? [AppComponent] : [],
})
export class AppModule {
  constructor(private injector: Injector) {
    customElements.define('ob-hello-world', createCustomElement(ObHelloWorldComponent, { injector }));
    customElements.define('ob-hit-list', createCustomElement(ObHitListComponent, { injector }));
    customElements.define('ob-viewer', createCustomElement(ObViewerComponent, { injector }));
  }

  ngDoBootstrap() {}
}
