import { TaskState } from 'src/app/features/task/state/task.reducer';
import { WorkGroupState } from 'src/app/features/work-group/state/work-group.reducer';

export interface AppState {
  workGroup: WorkGroupState;
  task: TaskState;
}
