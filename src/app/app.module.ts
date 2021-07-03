import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotProfileComponent } from './components/chatbot-profile/chatbot-profile.component';
import { ChatbotListingComponent } from './components/chatbot-listing/chatbot-listing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ChatbotAsSquareComponent } from './components/chatbot-as-square/chatbot-as-square.component';
import { ChatbotAsListComponent } from './components/chatbot-as-list/chatbot-as-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotProfileComponent,
    ChatbotListingComponent,
    ChatbotAsSquareComponent,
    ChatbotAsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
