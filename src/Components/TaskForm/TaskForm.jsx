import { useState } from "react";
import Input from "../UI/input/Input";
import TextArea from "../UI/textarea/TextAria";
import Button from "../UI/button/Button";


const TaskForm = ({create}) => {
    const [task, setTask] = useState({title: '', description: ''});

    const addNewTask = (e) => {
        e.preventDefault();
        if(!task.title.trim() && !task.description.trim()){
            return;
        }
        const newTask =  {
            ...task, id: Date.now()
        }
        create(newTask);
        // setTasks([...tasks, {...task, id: Date.now()}]);
        setTask({title: '', description: ''})
        
    }

    return (
        <form className="space-y-4">
                {/* <!-- Title --> */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Заголовок
                    </label>
                    <Input value={task.title} onChange={e => setTask({...task, title: e.target.value})}/>
                </div>

                {/* <!-- Description --> */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Описание
                    </label>
                    <TextArea value={task.description} onChange={e => setTask({...task, description: e.target.value})}/>
                </div>

                {/* <!-- Button --> */}
                <Button onClick={addNewTask}>Добавить задание</Button>
        </form>
    );
}

export default TaskForm;