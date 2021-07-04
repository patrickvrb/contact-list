import { Component, OnInit } from '@angular/core';
import { Chatbot } from 'src/app/models/chatbot.model';
import { ChatbotService } from 'src/app/services/chatbot.service';

@Component({
  selector: 'app-chatbot-listing',
  templateUrl: './chatbot-listing.component.html',
  styleUrls: ['./chatbot-listing.component.scss'],
})
export class ChatbotListingComponent implements OnInit {
  toggleCards = false;
  chatbots: Chatbot[];
  searchText = '';
  constructor(private chatbotService: ChatbotService) {
    this.chatbots = this.chatbotService.getChatbots();
  }

  ngOnInit(): void {}

  getFavorites(): Chatbot[] {
    return this.chatbotService.getFavorites();
  }

  orderByName(): void {
    this.chatbots.sort((a, b) => a.name.localeCompare(b.name));
  }

  orderByCreation(): void {
    this.chatbots.sort((a, b) => {
      let dateA = new Date(a.created);
      let dateB = new Date(b.created);
      return dateA.getTime() - dateB.getTime();
    });
  }

  filterByName(name: string): Chatbot[] {
    if (name) {
      name = name.toLocaleLowerCase();
      return this.chatbots.filter(
        (chatbot: Chatbot) =>
          chatbot.name.toLocaleLowerCase().indexOf(name) !== -1
      );
    }
    return this.chatbots;
  }
}
