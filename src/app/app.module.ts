import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DefaultTimerComponent } from './default-timer/default-timer.component';
import { OnPushTimerFirstComponent } from './on-push-timer-first/on-push-timer-first.component';
import { OnPushTimerSecondComponent } from './on-push-timer-second/on-push-timer-second.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DefaultTimerComponent,
    OnPushTimerFirstComponent,
    OnPushTimerSecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
