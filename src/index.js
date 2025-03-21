import "./styles.css"
import { createTask } from "./task"
import { createProject } from "./project"

let project = createProject('Szefa')

const task = createTask("Wynieść śmieci", "", "2025-01-03", "Low");


project.addTask(task)

console.log(project);