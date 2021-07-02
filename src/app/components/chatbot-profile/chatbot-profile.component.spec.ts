import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotProfileComponent } from './chatbot-profile.component';

describe('ChatbotProfileComponent', () => {
  let component: ChatbotProfileComponent;
  let fixture: ComponentFixture<ChatbotProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
