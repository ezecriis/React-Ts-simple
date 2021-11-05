import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Task } from '../interface/Tasks';

interface Props {
    addANewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>;

const initialState = {
    title: '',
    description: '',
};

function TaskForm({addANewTask}: Props) {
    const [task, setTask] = useState(initialState);
    const inputTitle = useRef<HTMLInputElement>(null);

    const handleInputChange = ({target: {name, value}}: HandleInputChange) => {
        setTask({
            ...task,
            [name]: value
        });
    };

    const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addANewTask(task);
        setTask(initialState);
        inputTitle.current?.focus();
    };

    return (
        <div className="card card-body bg-secondary text-dark">
            <h1>Add Task</h1>
            <form onSubmit={handleNewTask}>
                <input 
                type="text"
                placeholder="Write a title"
                name="title"
                className="form-control mb-3 rounded-0 shadow-none border-0"
                onChange={handleInputChange}
                value={task.title}
                autoFocus
                ref={inputTitle}
                 />
                <textarea 
                name="description" 
                placeholder="Write a description" 
                rows={2}
                className="form-control mb-3 shadow-none border-0"
                onChange={handleInputChange}
                value={task.description}
                />
                <button  className="btn btn-primary">
                    Save
                    <AiOutlinePlus />
                </button>
            </form>
        </div>
    )
}

export default TaskForm;
