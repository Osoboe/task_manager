import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { tasksData } from 'src/app/core/mock/data';
import { ITask } from 'src/app/core/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  getTasksByProjectId(): Observable<ITask[]> {
    return of(tasksData[0].tasks).pipe(delay(1000));
  }
}
