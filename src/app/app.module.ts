import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { MlmpComponent } from './mlmp/mlmp.component';
import { ExamplesComponent } from './examples/examples.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DmlaHeaderComponent } from './dmla-header/dmla-header.component';
import { DmlaFooterComponent } from './dmla-footer/dmla-footer.component';
import { PublicationsComponent } from './publications/publications.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MlmpComponent,
    ExamplesComponent,
    PageNotFoundComponent,
    DmlaHeaderComponent,
    DmlaFooterComponent,
    PublicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
