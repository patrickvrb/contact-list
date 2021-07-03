import { Component, Input, OnInit } from '@angular/core';
import { Chatbot } from 'src/app/models/chatbot.model';
import { ChatbotService } from 'src/app/services/chatbot.service';

@Component({
  selector: 'app-chatbot-as-list',
  templateUrl: './chatbot-as-list.component.html',
  styleUrls: ['./chatbot-as-list.component.scss'],
})
export class ChatbotAsListComponent implements OnInit {
  @Input() chatbot!: Chatbot;

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit(): void {}

  setFavorite(chatbot: Chatbot): void {
    this.chatbotService.setFavorite(chatbot);
  }

  removeFavorite(chatbot: Chatbot): void {
    this.chatbotService.removeFavorite(chatbot);
  }
}
