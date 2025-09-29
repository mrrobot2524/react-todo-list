import TaskItem from "../TaskItem/TaskItem";


const TaskList = ({tasks, remove, taskFilter, setTasks}) => {

  const filteredTasks = tasks.filter((task) => {
    if(taskFilter === 'active') return !task.completed;
    if(taskFilter === 'completed') return task.completed;
    return true
  })
  // console.log(taskFilter)
  if(filteredTasks.length === 0){
    switch(taskFilter){
      case 'all':
        return (<div className="container flex justify-center p-4 "><h1 className='min-w-md border-2 rounded-md text-red-300 text-lg border-red-300 shadow-lg p-4 text-center'>Список "ВСЕ" пуст</h1></div>)
      case 'active':
        return `Список "АКТИВНЫЕ" пуст`
      case 'completed':
        return (<div className="container flex justify-center p-4 "><h1 className='min-w-md border-2 rounded-md text-red-300 text-lg border-red-300 shadow-lg p-4 text-center'>Список "Выполненные" пуст</h1></div>)
    }
  }

  const toggleComplete = (tasks) => {
    setTasks(prev =>
        prev.map(t => t.id === tasks.id ? { ...t, completed: !t.completed } : t)
    );
  };

  const editTask = (tasks) => {
    const newTitle = prompt("Введите новый загаловок", tasks.title);
    const newDesc = prompt("Введите новый загаловок", tasks.description);
    if(newTitle !== null && newDesc !== null){
      setTasks(prev => prev.map(t => t.id === tasks.id ? {...t, title: newTitle, description:newDesc} : t))
    }
  }

    return (
        <div className="w-full bg-white shadow-md rounded-lg p-6 border border-gray-200 mt-6">
          
          <h2 className="text-xl font-semibold mb-4">Список заданий</h2>

          <ul className="space-y-3">
            {/* <!-- Item --> */}
           {filteredTasks.map((task, index) =>
               <TaskItem remove={remove} number={index + 1} task={task} key={task.id} toggleComplete={toggleComplete} editTask={editTask}/>
           )}
          </ul>
        </div>

    );
}
 
export default TaskList;