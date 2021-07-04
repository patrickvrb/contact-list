import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chatbot } from 'src/app/models/chatbot.model';
import { ChatbotService } from 'src/app/services/chatbot.service';

@Component({
  selector: 'app-chatbot-as-square',
  templateUrl: './chatbot-as-square.component.html',
  styleUrls: ['./chatbot-as-square.component.scss'],
})
export class ChatbotAsSquareComponent implements OnInit {
  @Input() chatbot!: Chatbot;

  constructor(private chatbotService: ChatbotService, private router: Router) {}

  ngOnInit(): void {}

  setFavorite(chatbot: Chatbot): void {
    this.chatbotService.setFavorite(chatbot);
  }

  removeFavorite(chatbot: Chatbot): void {
    this.chatbotService.removeFavorite(chatbot);
  }

  navigateToProfile(chatbot: Chatbot): Promise<boolean> {
    return this.router.navigate(['profile'], { state: chatbot });
  }
}
