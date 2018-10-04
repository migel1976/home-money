import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule} from './auth/auth.module';
import { AppRoutingModulr} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule

		
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
