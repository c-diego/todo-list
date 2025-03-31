import type { ReactNode } from 'react';
import type { Task } from '@/view/types';
import type { DraggableProvided } from '@hello-pangea/dnd';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import Box from '@/view/components/shared/Box';
import useDraggableList from './useDraggableList';

export type RenderItemsArgs = {
  provided: DraggableProvided;
  task: Task;
  index: number;
};

interface DraggableListProps {
  tasks: Task[];
  onChangeTasks: (tasks: Task[]) => void;
  renderItems: (args: RenderItemsArgs) => ReactNode;
}

export default function DraggableList({
  tasks,
  onChangeTasks,
  renderItems,
}: DraggableListProps) {
  // Hook to get the translation function
  const { t } = useTranslation();

  /* Function to handle the drag end event */
  const { handleDragEnd } = useDraggableList({
    items: tasks,
    onChangeItems: onChangeTasks,
  });

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <Box
            display="flex"
            direction="column"
            gap={10}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={String(task.id)}
                index={index}
              >
                {(provided) => renderItems({ provided, task, index })}
              </Draggable>
            ))}

            {provided.placeholder}

            {tasks.length === 0 && (
              <Box
                css={(theme) => ({
                  padding: theme.spacing.large,
                  textAlign: 'center',
                  width: '100%',
                })}
              >
                {t('noTasks')}
              </Box>
            )}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}
