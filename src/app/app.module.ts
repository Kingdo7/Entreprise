import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { WebServiceService } from './web-service.service';

@NgModule({
  declarations: [AppComponent, PersonneComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [WebServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
