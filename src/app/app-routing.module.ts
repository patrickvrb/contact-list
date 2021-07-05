import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotListingComponent } from './components/chatbot-listing/chatbot-listing.component';
import { ChatbotProfileComponent } from './components/chatbot-profile/chatbot-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ChatbotListingComponent,
  },
  {
    path: 'profile',
    component: ChatbotProfileComponent,
  },
  {
    path: '**',
    component: ChatbotListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
