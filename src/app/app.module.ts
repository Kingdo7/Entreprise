import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WebServiceService } from './web-service.service';
import { IndividuComponent } from './individu/individu.component';
import { ROUTING } from './app.rooting';

@NgModule({
  declarations: [AppComponent, IndividuComponent],
  imports: [BrowserModule, HttpClientModule, ROUTING],
  providers: [WebServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
