import type { Task } from '@/view/types';
import type { SyntheticEvent } from 'react';
import { StyledCheckbox } from './styles';
import { DraggableProvidedDragHandleProps } from '@hello-pangea/dnd';
import { MdDelete, MdDragHandle } from 'react-icons/md';
import Box from '@/view/components/shared/Box';
import ActionButton from '@/view/components/shared/ActionButton';
import Spacer from '@/view/components/Spacer';

interface TaskItemProps {
  task: Task;
  dragHandleProps: DraggableProvidedDragHandleProps | null;
  onCheck: (id: string, event: SyntheticEvent<HTMLInputElement>) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  task,
  onCheck,
  onDelete,
  dragHandleProps,
}: TaskItemProps) {
  return (
    <Box
      key={task.id}
      data-completed={task.completed}
      display="flex"
      flexGrow={1}
      direction="row"
      alignItems="center"
      gap="0.5rem"
      css={(theme) => ({
        border: `1px solid ${theme.colors.border}`,
        borderCollapse: 'separate',
        overflow: 'hidden',

        padding: '12px 16px',
        borderRadius: '8px',
        transition: ' background 0.2s ease',

        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
      })}
    >
      <Box
        {...dragHandleProps}
        css={(theme) => ({
          padding: '0.5rem',
          borderRadius: theme.borders.borderRadius,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        })}
      >
        <MdDragHandle fontSize="16px" />
      </Box>

      <StyledCheckbox
        type="checkbox"
        checked={task.completed}
        onChange={(e) => onCheck(task.id, e)}
      />

      <div
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          flexGrow: 0,
          flexShrink: 1,
          flexBasis: '100%',
        }}
      >
        {task.description}
      </div>

      <Spacer />

      <ActionButton
        onClick={() => onDelete(task.id)}
        type="button"
        variant="unstyled"
        css={(theme) => ({
          '&:hover': {
            color: theme.colors.danger,
          },
        })}
      >
        <MdDelete fontSize={24} />
      </ActionButton>
    </Box>
  );
}
