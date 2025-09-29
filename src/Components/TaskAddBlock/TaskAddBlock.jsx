import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";


const TaskAddBlock = ({setTasks, tasks}) => {

    const createTask = (newTask) =>{
        setTasks([...tasks, newTask]);
    }

    

    return(
        <div className="w-full bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Добавить задание</h2>

            <TaskForm create={createTask}/>
        </div>

    )
}

export default TaskAddBlock;