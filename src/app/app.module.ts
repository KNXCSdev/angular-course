import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './DataBinding/property-binding/property-binding.component';
import { EventBindingComponent } from './DataBinding/event-binding/event-binding.component';
import { TextInterpolationComponent } from './DataBinding/text-interpolation/text-interpolation.component';
import { StructuralComponent } from './Directives/structural/structural.component';
import { AttributeComponent } from './Directives/attribute/attribute.component';

import { SecondNavigationComponent } from './Navigation/second-navigation/second-navigation.component';
import { FirstNavigationComponent } from './Navigation/first-navigation/first-navigation.component';
import { PageNotFoundComponent } from './Navigation/page-not-found/page-not-found.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TextInterpolationComponent,
    StructuralComponent,
    AttributeComponent,
    FirstNavigationComponent,
    SecondNavigationComponent,
    PageNotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
