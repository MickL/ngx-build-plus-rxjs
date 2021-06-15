import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  imports:         [
    BrowserModule,
  ],
  declarations:    [
    AppComponent,
  ],
  providers:       [],
  bootstrap:       [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const elm = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('my-webcomponent', elm);
  }
}
