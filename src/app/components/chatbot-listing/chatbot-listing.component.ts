import { Component, OnInit } from '@angular/core';
import chatbots from '../../../mocks/data.json';

@Component({
  selector: 'app-chatbot-listing',
  templateUrl: './chatbot-listing.component.html',
  styleUrls: ['./chatbot-listing.component.scss'],
})
export class ChatbotListingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(chatbots);
  }
}
