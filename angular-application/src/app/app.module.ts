import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Importa HTTP_INTERCEPTORS
import { NavComponent } from './nav/nav.component';
import { ApiInterceptor } from './api.interceptor'; // Importa tu interceptor
import { FormsModule } from '@angular/forms';
import {DemoNavComponent} from './home/demo-nav/demo-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    HomeComponent,
    NavComponent,
    DemoNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
