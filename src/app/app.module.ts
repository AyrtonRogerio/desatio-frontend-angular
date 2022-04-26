import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartupComponent } from './startup/startup.component';
import { PitchComponent } from './pitch/pitch.component';
import { DetalhesPitchComponent } from './detalhes-pitch/detalhes-pitch.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartupComponent,
    PitchComponent,
    DetalhesPitchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Material,
    FlexLayoutModule

  ],
  exports: [
    DetalhesPitchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
