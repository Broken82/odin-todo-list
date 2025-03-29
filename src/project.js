export function createProject(name){
    const id = crypto.randomUUID()
    let tasks = []

    function addTask(task){
        tasks.push(task);
    }

    function removeTask(task){
        this.tasks = tasks.filter((t) => t.id != task.id )
        console.log(tasks)
    }

    return {id, name, tasks, addTask, removeTask}
}