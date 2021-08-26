import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { VueltaPipe } from './pipes/vuelta.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SubstringPipe } from './pipes/substring.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VueltaPipe,
    CapitalizePipe,
    SubstringPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
