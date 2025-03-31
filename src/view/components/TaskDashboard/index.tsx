import type { TaskService } from '@/view/hooks/useTaskService';
import type { RenderItemsArgs } from '../DraggableList';
import { Container } from './styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DraggableList from '../DraggableList';
import TaskItem from '../TaskItem';
import Box from '../shared/Box';
import AddFloatingButton from './components/AddFloatingButton';
import Dialog from '../Dialog';
import CompletionOverview from './components/CompletionOverview';

type TasksDashboardProps = {
  onCreateTask: TaskService['createTask'];
  onDeleteTask: TaskService['deleteTask'];
  onToggleTask: TaskService['toggleTask'];
  onReorderTasks: TaskService['reorderTasks'];
  tasks: TaskService['tasks'];
};

export default function TaskDashboard({
  tasks,
  onCreateTask,
  onDeleteTask,
  onReorderTasks,
  onToggleTask,
}: TasksDashboardProps) {
  // Hook to get the translation function
  const { t } = useTranslation();

  // Indicates if the add task dialog is open
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Container>
      <Dialog
        key={`dialog_${isDialogOpen}`}
        isOpen={isDialogOpen}
        dialogTitle={t('createTask')}
        onCancel={() => {
          setIsDialogOpen(false);
        }}
        onClose={() => {
          setIsDialogOpen(false);
        }}
        onSave={(task) => {
          onCreateTask(task);
          setIsDialogOpen(false);
        }}
      />

      <Box display="flex" direction="column" flexGrow={1} gap="1rem">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h2 style={{ margin: 0 }}>{t('tasks')}</h2>
          <CompletionOverview tasks={tasks} />
        </Box>

        <DraggableList
          tasks={tasks}
          onChangeTasks={onReorderTasks}
          renderItems={({ provided, task }: RenderItemsArgs) => (
            <Box ref={provided.innerRef} {...provided.draggableProps}>
              <TaskItem
                onCheck={onToggleTask}
                onDelete={onDeleteTask}
                task={task}
                dragHandleProps={provided.dragHandleProps}
              />
            </Box>
          )}
        />
      </Box>

      <AddFloatingButton
        onClick={() => {
          setIsDialogOpen(true);
        }}
      />
    </Container>
  );
}
