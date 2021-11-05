import React from 'react'
import { Task } from '../interface/Tasks';

interface Props {
    task: Task;
    deleteATask: (id: number) => void;
}

function TaskCard({ task, deleteATask }: Props) {
    return (
        <div className="card card-body bg-secondary rounded-0 text-dark">
            <h2>{task.title} </h2>
            <p>{task.id}</p>
            <p>{task.description}</p>
            <button className="btn btn-danger" onClick={() => {task.id && deleteATask(task.id)}}>
                Delete
            </button>
        </div>
    );
}

export default TaskCard;
