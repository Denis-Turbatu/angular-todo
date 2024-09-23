import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todos: Array<todo> = [];

  placeTodo(): void  {
    const todoInput = document.getElementById('todoInput') as HTMLInputElement;
    const todoSelect = document.getElementById('todoSelect') as HTMLInputElement;
    if(todoInput){
      console.log(todoInput.value);
      this.todos.push({title: todoInput.value, tag: todoSelect.value, isDone: false});

    }
  }
}

interface todo {
  title: string;
  tag: string;
  isDone: boolean;
}