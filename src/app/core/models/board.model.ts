import { ITaskList } from './task-list.model';

export interface IBoard {
  id: string;
  name: string;
  columns: ITaskList[];
}
