import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotAsSquareComponent } from './chatbot-as-square.component';

describe('ChatbotAsSquareComponent', () => {
  let component: ChatbotAsSquareComponent;
  let fixture: ComponentFixture<ChatbotAsSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotAsSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotAsSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
