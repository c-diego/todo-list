import type { Task } from '@/view/types';
import type { DropResult } from '@hello-pangea/dnd';

interface UseDraggableListProps {
  items: Task[];
  onChangeItems: (items: Task[]) => void;
}

/** Hook with the logic to handle the drag of a list */
export default function useDraggableList({
  onChangeItems,
  items,
}: UseDraggableListProps) {
  /** Function to reorder the list */
  const reorder = (list: Task[], startIndex: number, endIndex: number) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);
    return result;
  };

  /** Function to handle the drag end event */
  const handleDragEnd = (result: DropResult<string>) => {
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    onChangeItems(newItems);
  };

  return { handleDragEnd };
}
