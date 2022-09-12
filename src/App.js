import './App.css';
import { TaskContextProvider } from './components/context/TaskContext';
import AppRoute from './components/routes/AppRoute';

function App() {
  return (
    <TaskContextProvider>
      <AppRoute />
    </TaskContextProvider>
  );
}

export default App;
