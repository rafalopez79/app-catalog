import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
//TODO: pillar solo los modulos que voy a usar
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { AppCollectionComponent } from './app-collection/app-collection.component';
import { AppModalComponent } from './app-modal/app-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    AppCollectionComponent,
    AppModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppModalComponent]
})
export class AppModule { }
