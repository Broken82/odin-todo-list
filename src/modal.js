const dialogTask = document.querySelector(".task-modal");
const dialogProject = document.querySelector(".project-modal");


export function openAddTask() {
    dialogTask.showModal();
  }

export function closeAddTask(){
    dialogTask.close();
  }

export function openAddProject(){
    dialogProject.showModal();
}

export function closeAddProject(){
    dialogProject.close();
}
  