import { useState } from "react";
import Button from "../UI/button/Button";
import SearchInput from "../UI/input/SearchInput";
import TaskList from "../TaskList/TaskList";

const TaskFilter = ({tasks, setTasks}) => {

    const [taskFilter, setTaskFilter] = useState('all')

    const removeTask = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }
    // console.log(taskFilter);
    return (
        <div className="w-full bg-white shadow-md rounded-lg p-6 border border-gray-200 mt-6">
            {/* <!-- 🔍 Панель поиска и фильтрации --> */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
              {/* <!-- Поиск --> */}
              <div className="flex items-center w-full sm:w-1/2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2">
                <SearchInput/>
              </div>
              {/* <!-- Фильтр --> */}
              <div className="flex items-center space-x-2">
                <Button onClick={() => setTaskFilter('all')} >Все</Button>
                <Button onClick={() => setTaskFilter('active')} >Активные</Button>
                <Button onClick={() => setTaskFilter('completed')} >Выполненные</Button>
              </div>
          </div>
          {tasks.length !== 0
            ?<TaskList remove={removeTask}  tasks={tasks} taskFilter={taskFilter} setTasks={setTasks}/>
            :<div className="container flex justify-center p-4 "><h1 className='min-w-md border-2 rounded-md text-red-300 text-lg border-red-300 shadow-lg p-4 text-center'>Задачи не были найдены</h1></div>
          }
        </div>
    );
}

export default TaskFilter