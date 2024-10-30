import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  messages: string[] = []; // Lista de mensagens
  newMessage: string = ''; // Mensagem digitada

  addMessage() {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage.trim()); // Adiciona a nova mensagem
      this.newMessage = ''; // Limpa o campo de entrada
    }
  }
}
