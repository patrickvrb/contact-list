import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavigationExtras, Router } from '@angular/router';
import { Chatbot } from 'src/app/models/chatbot.model';

@Component({
  selector: 'app-chatbot-profile',
  templateUrl: './chatbot-profile.component.html',
  styleUrls: ['./chatbot-profile.component.scss'],
})
export class ChatbotProfileComponent implements OnInit {
  routerProps: NavigationExtras | undefined;
  routerState: any;
  chatbot!: Chatbot;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    !this.router.navigated ? this.router.navigate(['']) : undefined;
    this.routerState = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.chatbot = this.routerState;
  }

  getImage(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.chatbot.image);
  }

  getCulture(culture: string | undefined): string | void {
    if (culture === 'pt-BR') {
      return 'BRA - Portuguese (PT)';
    }
  }
}
