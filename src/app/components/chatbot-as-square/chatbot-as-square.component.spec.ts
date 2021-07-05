import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ChatbotAsSquareComponent } from './chatbot-as-square.component';

describe('ChatbotAsSquareComponent', () => {
  let component: ChatbotAsSquareComponent;
  let fixture: ComponentFixture<ChatbotAsSquareComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ChatbotAsSquareComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotAsSquareComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    component.chatbot = {
      shortName: 'jonathan',
      name: 'Jonathan',
      description: 'Interpretado por: Charlie Heaton.',
      image:
        'data:image/jpeg;base64,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',
      template: 'master',
      created: '2020-03-31T14:35:44.510Z',
      updated: '2020-03-31T14:35:44.510Z',
      plan: 'standard',
      culture: 'pt-BR',
      favorite: false,
      dotColor: '',
      analytics: {
        user: {
          total: 130,
          actived: 13,
        },
        message: {
          received: 10000,
          sent: 10001,
        },
      },
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load chatbot data', () => {
    expect(component.chatbot.favorite).toBeFalsy();
  });

  it('should navigate to profile', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateToProfile(component.chatbot);
    expect(navigateSpy).toHaveBeenCalledWith(['profile'], {
      state: component.chatbot,
    });
  });
});
