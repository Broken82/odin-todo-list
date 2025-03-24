export function createTask(title, description, dueDate, priority){
    const id = crypto.randomUUID();
    return {id, title, description, dueDate, priority}
}