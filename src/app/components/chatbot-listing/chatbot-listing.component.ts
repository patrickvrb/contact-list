import { Component, OnInit } from '@angular/core';
import data from '../../../mocks/data.json';

@Component({
  selector: 'app-chatbot-listing',
  templateUrl: './chatbot-listing.component.html',
  styleUrls: ['./chatbot-listing.component.scss'],
})
export class ChatbotListingComponent implements OnInit {
  chatbots = data;

  toggleCards = false;

  constructor() {}

  ngOnInit(): void {
    console.log(data);
  }
}
