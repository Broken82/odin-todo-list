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

fetchLocalStorage()
console.log(projects)

let currentProject = projects[0];





//Handling adding listeners

addListeners()
renderProjects()
displayTasks(currentProject)




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
submitAddTask.addEventListener("submit", handleAddTask);

}

function handleAddProject(e){
    const projectName = document.querySelector("input#project-name")
    const newProject = createProject(projectName.value)
    projects.push(newProject)
    console.log(projects)
    e.preventDefault();
    e.target.parentElement.close();
    addProjectToLocalStorage(newProject)
    renderProjects()
}

function handleAddTask(e){
    const title = document.querySelector("input#title");
    const description = document.querySelector("input#description");
    const date = document.querySelector("input#date");
    const priority = document.querySelector("select#priority");


    const task = createTask(title.value, description.value, date.value, priority.value);
    currentProject.addTask(task);
    

    e.preventDefault();
    e.target.parentElement.close();

    addTasktoLocalStorage(currentProject, task)
    displayTasks(currentProject)
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
        let todoItem = document.createElement("button");
        todoItem.className = "todo-item";

        let itemLeft = document.createElement("div");
        itemLeft.className = "item-left";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        itemLeft.appendChild(checkbox);
        itemLeft.appendChild(document.createTextNode(task.title));

        let dueDate = document.createElement("div");
        dueDate.className = "due-date";
        dueDate.textContent = task.dueDate;

        todoItem.appendChild(itemLeft);
        todoItem.appendChild(dueDate);

        taskList.append(todoItem);

        removeTaskListener(task, checkbox)

    });

}


function removeTaskListener(task, checkbox){


    checkbox.addEventListener("click", () => {
        currentProject.removeTask(task);

        displayTasks(currentProject)
        console.log(currentProject.tasks)

    });

}

function addProjectToLocalStorage(project){
    const storage = JSON.parse(localStorage.getItem("project"));
    console.log(storage)
    storage.push(project)
    localStorage.setItem("project", JSON.stringify(storage)); 

    //Dodać dodawanie metod do wyciąganych localStorage projektów
}


function addTasktoLocalStorage(project, task){
    const storage = JSON.parse(localStorage.getItem("project"))
    const taskProject = storage.find(t => t.id == project.id)
    const projectIndex = storage.findIndex(t => t.id == project.id)

    taskProject.tasks.push(task);
    storage[projectIndex]= taskProject

    localStorage.setItem("project", JSON.stringify(storage))

}

function addProjectMethods(project){
project.addTask = defaultProject.addTask
project.removeTask = defaultProject.removeTask
return project
}

function fetchLocalStorage(){
    if(localStorage.getItem("project") == null){
        localStorage.setItem("project", JSON.stringify(projects))
        let defaultStorage = JSON.parse(localStorage.getItem("project"))
        defaultStorage[0] = addProjectMethods(defaultStorage[0])
        projects = [defaultStorage[0]]
    }
    else{
        let defaultStorage = JSON.parse(localStorage.getItem("project"))
        defaultStorage.forEach(project => {
            project = addProjectMethods(project)

        });
        projects = defaultStorage
    }


}


