import { TestBed } from '@angular/core/testing';

import { ChatbotService } from './chatbot.service';

describe('ChatbotService', () => {
  let service: ChatbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should read json mock data', () => {
    expect(service.getChatbots()).toContain(service.getChatbots()[0]);
  });

  it('should remove favorite', () => {
    service.removeFavorite(service.getChatbots()[0]);
    expect(service.getChatbots()[0].favorite).toBeFalsy();
  });

  it('should add favorite', () => {
    service.setFavorite(service.getChatbots()[0]);
    expect(service.getChatbots()[0].favorite).toBeTruthy();
  });
});
