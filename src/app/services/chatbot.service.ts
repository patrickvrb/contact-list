import { Injectable } from '@angular/core';
import chatbotList from '../../mocks/data.json';
import { Chatbot } from '../models/chatbot.model';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  constructor() {
    chatbotList.forEach((chatbot: Chatbot) => {
      return (
        (chatbot.favorite = false), (chatbot.dotColor = this.randomColor())
      );
    });
  }

  getChatbots(): Chatbot[] {
    return chatbotList;
  }

  getFavorites(): Chatbot[] {
    return chatbotList.filter((chatbot: Chatbot) => chatbot.favorite);
  }

  setFavorite(chatbot: Chatbot): void {
    let index = chatbotList.indexOf(chatbot);
    chatbotList[index].favorite = true;
  }

  removeFavorite(chatbot: Chatbot): void {
    let index = chatbotList.indexOf(chatbot);
    chatbotList[index].favorite = false;
  }

  randomColor(): string {
    let randomColor = Math.floor(Math.random() * 0xfffff * 1000000).toString(
      16
    );
    return `#${randomColor.slice(0, 6)}`;
  }
}
