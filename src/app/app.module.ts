import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './DataBinding/property-binding/property-binding.component';
import { EventBindingComponent } from './DataBinding/event-binding/event-binding.component';
import { TextInterpolationComponent } from './DataBinding/text-interpolation/text-interpolation.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TextInterpolationComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
