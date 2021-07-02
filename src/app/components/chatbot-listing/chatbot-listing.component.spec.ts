import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotListingComponent } from './chatbot-listing.component';

describe('ChatbotListingComponent', () => {
  let component: ChatbotListingComponent;
  let fixture: ComponentFixture<ChatbotListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
