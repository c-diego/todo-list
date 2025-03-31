import Footer from '@/view/components/Footer';
import TaskDashboard from '@/view/components/TaskDashboard';
import Header from '@/view/components/Header';
import Box from '@/view/components/shared/Box';
import Spacer from '@/view/components/Spacer';
import useTaskService from '@/view/hooks/useTaskService';

export default function TasksPage() {
  // Metodos para gerenciar tasks
  const { createTask, deleteTask, reorderTasks, tasks, toggleTask } =
    useTaskService();

  return (
    <Box
      display="flex"
      direction="column"
      justifyContent="space-between"
      style={{ height: '100vh' }}
    >
      <Header />

      <TaskDashboard
        tasks={tasks}
        onCreateTask={createTask}
        onDeleteTask={deleteTask}
        onReorderTasks={reorderTasks}
        onToggleTask={toggleTask}
      />

      <Spacer />

      <Footer />
    </Box>
  );
}
