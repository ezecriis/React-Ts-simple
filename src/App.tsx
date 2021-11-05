import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './interface/Tasks';
import logo from './logo.svg';
interface Props {
  title: string
}

function App({ title }: Props) {

  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: "Lear React",
    description: "Learn React",
    completed: false,
  }]);

  const getCurrectTimestamp = (): number => new Date().getTime();

  const deleteATask = (id: number): void => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const addANewTask = (task: Task) => setTasks([...tasks, {...task, id: getCurrectTimestamp(), completed: false}]);

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
        <div className="col-md-4"><TaskForm addANewTask={addANewTask} /></div>
        
        <div className="col-md-8">
          <div className="row">
            <TaskList tasks={tasks} deleteATask={deleteATask} />
          </div>
          </div>
          </div>
      </main>
    </div>
  );
}

export default App;
