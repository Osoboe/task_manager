import { TaskStatus } from '../models/task.model';

export const tasksData = [
  {
    id: '1',
    title: 'группа 1',
    tasks: [
      {
        id: 1,
        title: 'PUPA',
        status: TaskStatus.ВХОДЯЩИЕ,
        listPosition: 1,
      },
      {
        id: 2,
        title: 'PUPAR',
        status: TaskStatus.В_РАБОТЕ,
        listPosition: 2,
      },
      {
        id: 3,
        title: 'PUPARRQ',
        status: TaskStatus.К_ОТГРУЗКЕ,
        listPosition: 2,
      },
      {
        id: 3,
        title: 'PUPARRQ',
        status: TaskStatus.ГОТОВО,
        listPosition: 2,
      },
    ],
  },
  {
    id: '2',
    title: 'группа 2',
    tasks: [],
  },
  {
    id: '3',
    title: 'группа 3',
    tasks: [],
  },
];

export const workGroupsData = [
  {
    id: 1,
    title: 'группа 1',
  },
  {
    id: 2,
    title: 'группа 2',
  },
  {
    id: 3,
    title: 'группа 3',
  },
];
