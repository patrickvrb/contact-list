import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotAsListComponent } from './chatbot-as-list.component';

describe('ChatbotAsListComponent', () => {
  let component: ChatbotAsListComponent;
  let fixture: ComponentFixture<ChatbotAsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotAsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotAsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
