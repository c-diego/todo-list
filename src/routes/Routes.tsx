import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Routes_,
} from 'react-router-dom';
import TasksPage from '@/view/pages/TasksPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Routes_>
        <Route path="/:slug" element={<Navigate to="/" />} />
        <Route path="/" Component={TasksPage} />
      </Routes_>
    </BrowserRouter>
  );
}
