export enum TaskStatus {
  ВХОДЯЩИЕ = 'ВХОДЯЩИЕ',
  В_РАБОТЕ = 'В РАБОТЕ',
  НА_СОГЛАСОВАНИИ = 'НА СОГЛАСОВАНИИ',
  ГОТОВО = 'ГОТОВО',
  К_ОТГРУЗКЕ = 'К ОТГРУЗКЕ',
}

export interface ITask {
  id: number;
  title: string;
  status: TaskStatus;
  listPosition: number;
}
