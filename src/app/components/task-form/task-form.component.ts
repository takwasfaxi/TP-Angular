import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask, updateTask } from '../../store/tasks/tasks.actions';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() editTask: Task | null = null;
  taskForm: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder, private store: Store) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      dueDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.editTask) {
      this.isEditMode = true;
      this.taskForm.patchValue(this.editTask);
    }
  }

  ngOnChanges() {
    if (this.editTask) {
      this.isEditMode = true;
      this.taskForm.patchValue(this.editTask);
    }
  }

  onSubmit() {
    const task: Task = {
      id: this.isEditMode && this.editTask ? this.editTask.id : new Date().getTime(),
      completed: this.editTask?.completed ?? false,
      ...this.taskForm.value
    };

    if (this.isEditMode) {
      this.store.dispatch(updateTask({ task }));
    } else {
      this.store.dispatch(addTask({ task }));
    }

    this.taskForm.reset({ priority: 1 });
    this.isEditMode = false;
  }
}
