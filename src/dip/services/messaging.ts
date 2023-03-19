import { MessagingProtocol } from '../classes/interfaces';

export class Messaging implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log(`Mesagem enviada: ${message}`);
  }
}
