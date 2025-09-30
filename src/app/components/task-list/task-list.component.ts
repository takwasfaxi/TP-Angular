import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { selectTasks } from '../../store/tasks/tasks.selectors';
import { deleteTask, toggleTask, clearTasks } from '../../store/tasks/tasks.actions';
import { logout } from '../../store/user/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;
  selectedTask: Task | null = null;

  constructor(private store: Store, private router: Router) {
    this.tasks$ = this.store.select(selectTasks);
  }

  onToggle(id: number) {
    this.store.dispatch(toggleTask({ id }));
  }

  onDelete(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }

  onEdit(task: Task) {
    this.selectedTask = task;
  }

  logoutUser() {
    this.store.dispatch(logout());       
    this.store.dispatch(clearTasks());  
    this.router.navigate(['/login']);  
  }
}
