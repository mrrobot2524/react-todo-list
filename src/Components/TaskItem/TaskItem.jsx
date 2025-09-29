import Button from "../UI/button/Button";

const TaskItem = ({task, number, remove, toggleComplete, editTask}) => {
     
    // console.log(props)
    return (
        <li className={`flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:shadow ${task.completed ? "bg-green-100" : "bg-white"}`}>
            <div>
                <h3 className="text-lg font-medium text-gray-800">{number}. {task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>
            </div>
            <div className="flex space-x-2 items-center">
                <Button onClick={() => toggleComplete(task)}>
                    {task.completed ? 'Выполнено/Отменить' : 'Не Выполнено'}
                </Button>
                <Button onClick={() => editTask(task)}>Редактировать</Button>
                <Button onClick={() => remove(task)}>Удалить</Button>
            </div>
        </li>
    );
}

export default TaskItem;