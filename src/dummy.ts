import { Task } from '@/view/types';
import { v4 as uuid } from 'uuid';

export const defaultTasks_: Task[] = [
  {
    id: uuid(),
    description:
      ' Finish coding assignment - Complete the remaining tasks and test the program',
    completed: true,
  },
  {
    id: uuid(),
    description:
      'Review testing plan - Go through the test cases for the new feature.',
    completed: false,
  },
  {
    id: uuid(),
    description: 'Buy groceries - Purchase milk, bread, and eggs',
    completed: false,
  },
  {
    id: uuid(),
    description:
      'Reply to emails - Respond to the messages from team members and clients.',
    completed: false,
  },
];
