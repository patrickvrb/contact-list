import { Component, OnInit } from '@angular/core';
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
  chatbot: Chatbot | undefined;

  constructor(private router: Router) {
    !this.router.navigated ? this.router.navigate(['']) : undefined;
    this.routerState = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.chatbot = this.routerState;
  }
}
