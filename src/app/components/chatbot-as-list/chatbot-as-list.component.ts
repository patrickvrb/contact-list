import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot-as-list',
  templateUrl: './chatbot-as-list.component.html',
  styleUrls: ['./chatbot-as-list.component.scss'],
})
export class ChatbotAsListComponent implements OnInit {
  @Input() chatbot: any;
  constructor() {}

  ngOnInit(): void {}
}
