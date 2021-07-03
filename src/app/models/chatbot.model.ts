export interface Chatbot {
  shortName: string;
  name: string;
  description: string;
  image: string;
  template: string;
  created: string;
  updated: string;
  plan: string;
  culture: string;
  favorite: boolean;
  analytics: Analytics;
}

interface Analytics {
  user: User;
  message: Message;
}

interface User {
  total: number;
  activated: number;
}

interface Message {
  received: number;
  sent: number;
}
