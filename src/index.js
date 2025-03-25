import "./styles.css"
import { createTask } from "./task"
import { createProject } from "./project"
import { openAddProject, openAddTask, closeAddProject, closeAddTask } from "./modal"

let projects = [];

//Intializing website with default values
const defaultProject = createProject("Default");
defaultProject.addTask(createTask("Make dinner", "I need to make dinner", "25-03-2025", "High"));
defaultProject.addTask(createTask("Make bed", "I need to make bed", "25-03-2025", "Medium"));
defaultProject.addTask(createTask("Wash dishes", "Wash", "25-03-2025", "Low"));

projects.push(defaultProject);
console.log(projects)

let currentProject = projects[0];






//Handling adding listeners
addListeners()

//Handling adding projects






function addListeners(){
//Modal Listeners
const openProjectBtn = document.querySelector("button.add-project");
const openTaskBtn = document.querySelector("button.add-todo");
const closeProjectBtn = document.querySelector("dialog.project-modal button");
const closeTaskBtn = document.querySelector("dialog.task-modal button");

openProjectBtn.addEventListener("click", openAddProject);
openTaskBtn.addEventListener("click", openAddTask);
closeProjectBtn.addEventListener("click", closeAddProject);
closeTaskBtn.addEventListener("click", closeAddTask);

//Submit listeners
const submitAddProject = document.querySelector("dialog.project-modal form");
const submitAddTask = document.querySelector("dialog.task-modal form");

submitAddProject.addEventListener("submit", handleAddProject);



}

function handleAddProject(e){
    const projectName = document.querySelector("input#project-name")
    projects.push(createProject(projectName.value))
    console.log(projects)
    e.preventDefault();
    e.target.parentElement.close();
    renderProjects()
}



function renderProjects(){
    //Project tab
    const projectTab = document.querySelector("div.project-buttons");
    projectTab.innerHTML = '';


    projects.forEach(p => {
        let project = document.createElement("button");
        project.classList.add("project");

        //SVG
        let projectIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        projectIcon.classList.add("folder-icon");
        projectIcon.setAttribute("viewBox", "0 0 24 24");

        //TITLE
        let svgTitle = document.createElement("title")
        svgTitle.textContent = 'folder';

        projectIcon.append(svgTitle);
        
        
        //PATH
        let pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path")
        pathElement.setAttribute("d", "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z");

        projectIcon.append(pathElement);

        //Project name
        let projectName = document.createElement("p");
        projectName.textContent = p.name;

        project.append(projectIcon);
        project.append(projectName);

        projectTab.append(project);

        //Changing project listener
        addChangeProjectListener(p, project)

        
    });
    

}

function addChangeProjectListener(project, button){

    button.addEventListener("click", () =>{
        currentProject = project;
        console.log(currentProject);
        console.log(button);
        displayTasks(currentProject);
    })
    

}


function displayTasks(project){

    const projectName = document.querySelector(".project-name");
    
    projectName.textContent = project.name;
    const taskList = document.querySelector(".todos")
    taskList.innerHTML = '';

    project.tasks.forEach(task => {
        let todo = `<button class="todo-item">
                        <div class="item-left">
                            <input type="checkbox">
                            ${task.title}
                        </div>
                        <div class="due-date">${task.dueDate}</div>
                    </button>
            `

            //dodac listener usuwania todo

        taskList.innerHTML += todo;

    });

}
