export function createProject(name){
    const id = crypto.randomUUID()
    const tasks = []

    function addTask(task){
        tasks.push(task);
    }

    function removeTask(task){
        
    }

    return {id, name, tasks, addTask}
}