import "./styles.css"
import { createTask } from "./task"
import { createProject } from "./project"
import { openAddProject, openAddTask, closeAddProject, closeAddTask } from "./modal"

let project = createProject('Szefa')

const task = createTask("Wynieść śmieci", "", "2025-01-03", "Low");


project.addTask(task)

console.log(project);

closeAddTask()
openAddTask()
closeAddTask()
openAddTask()
closeAddTask()
openAddTask()
closeAddTask()
openAddTask()