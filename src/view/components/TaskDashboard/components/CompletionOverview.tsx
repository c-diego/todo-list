import { Task } from '@/view/types';
import { useTranslation } from 'react-i18next';
import Box from '@/view/components/shared/Box';

interface CompletionOverviewProps {
  tasks: Task[];
}

export default function CompletionOverview({ tasks }: CompletionOverviewProps) {
  // Hook to get the translation function
  const { t } = useTranslation();

  return (
    <Box>
      <Box css={(theme) => ({ fontWeight: theme.typography.fontWeight.bold })}>
        {t('completed')}: {tasks.filter((task) => task.completed).length} /{' '}
        {tasks.length}
      </Box>
    </Box>
  );
}
