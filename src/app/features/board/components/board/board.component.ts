import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskStatus } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  tasksStatuses: TaskStatus[] = [
    TaskStatus.ВХОДЯЩИЕ,
    TaskStatus.В_РАБОТЕ,
    TaskStatus.НА_СОГЛАСОВАНИИ,
    TaskStatus.ГОТОВО,
    TaskStatus.К_ОТГРУЗКЕ,
  ];
}
