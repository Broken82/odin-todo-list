export function createProject(name){
    const id = crypto.randomUUID()
    let tasks = []

    function addTask(task){
        this.tasks.push(task);
    }

    function removeTask(task){
        this.tasks = this.tasks.filter((t) => t.id != task.id )
        console.log(tasks)
    }

    return {id, name, tasks, addTask, removeTask}
}