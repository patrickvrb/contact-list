import { Component, OnInit } from '@angular/core';
import { Chatbot } from 'src/app/models/chatbot.model';
import { ChatbotService } from 'src/app/services/chatbot.service';

@Component({
  selector: 'app-chatbot-listing',
  templateUrl: './chatbot-listing.component.html',
  styleUrls: ['./chatbot-listing.component.scss'],
})
export class ChatbotListingComponent implements OnInit {
  toggleCards = true;
  chatbots: Chatbot[];
  constructor(private chatbotService: ChatbotService) {
    this.chatbots = this.chatbotService.getChatbots();
    console.log(this.chatbots);
  }

  ngOnInit(): void {}

  orderByName(): void {}

  orderByCreation(): void {}
}
