import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo List App';

  todolist = [
    {label : 'market', priority : 1, done : true },
    {label : 'bank', priority : 2, done : false },
    {label : 'private tutions', priority : 5, done : false },
    {label : 'learning angular', priority : 4, done : true },
    {label : 'simple break', priority : 8, done : true },
  ];

  addTodo(newTodolabel) {
    let newtodo = {
      label : newTodolabel,
      priority : 1,
      done : true
    };
    this.todolist.push(newtodo);
  }
  delete(todo){
    this.todolist = this.todolist.filter(t => t.label !== todo.label);
  }


}
