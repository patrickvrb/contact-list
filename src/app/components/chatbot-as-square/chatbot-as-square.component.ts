import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot-as-square',
  templateUrl: './chatbot-as-square.component.html',
  styleUrls: ['./chatbot-as-square.component.scss'],
})
export class ChatbotAsSquareComponent implements OnInit {
  @Input() chatbot: any;
  constructor() {}

  ngOnInit(): void {}
}
