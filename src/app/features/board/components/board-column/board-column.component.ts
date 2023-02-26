import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/core/models/app-state.model';
import { ITask, TaskStatus } from 'src/app/core/models/task.model';

import {
  loadTasks,
  updateTask,
} from 'src/app/features/task/state/task.actions';
import { getTasks } from 'src/app/features/task/state/task.selectors';

@Component({
  selector: '[app-board-column]',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardColumnComponent implements OnInit {
  @Input()
  status!: TaskStatus;
  tasks$!: Observable<ITask[]>;
  tasksCount$: Observable<number> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadTasks());
    this.tasks$ = this.store.select(getTasks);
    this.tasks$ = this.store
      .select(getTasks)
      .pipe(
        map((tasks) =>
          tasks
            .filter((i) => i.status === this.status)
            .sort((a, b) => a.listPosition - b.listPosition)
        )
      );
  }

  drop(event: CdkDragDrop<ITask[]>) {
    const newTask: ITask = { ...event.item.data };

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      newTask.status = event.container.id as TaskStatus;
      this.store.dispatch(updateTask({ task: newTask }));
    }
  }
}
