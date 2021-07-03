import { Component, Input, OnInit } from '@angular/core';
import { Chatbot } from 'src/app/models/chatbot.model';
import { ChatbotService } from 'src/app/services/chatbot.service';

@Component({
  selector: 'app-chatbot-as-square',
  templateUrl: './chatbot-as-square.component.html',
  styleUrls: ['./chatbot-as-square.component.scss'],
})
export class ChatbotAsSquareComponent implements OnInit {
  @Input() chatbot!: Chatbot;

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit(): void {
    console.log(this.chatbot);
  }

  setFavorite(chatbot: Chatbot): void {
    this.chatbotService.setFavorite(chatbot);
  }

  removeFavorite(chatbot: Chatbot): void {
    this.chatbotService.removeFavorite(chatbot);
  }
}
