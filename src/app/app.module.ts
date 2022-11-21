import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Parents/home/home.component';
import { DetailsEquipeComponent } from './Parents/details-equipe/details-equipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Resolver } from './ResolverTeam/resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Resolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
