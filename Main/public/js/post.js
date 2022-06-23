const commentBtn = document.querySelector(".commentBtn");
const modal = document.getElementById("comment-modal");
const closeBtn = document.querySelector(".closeBtn");
const form = document.getElementById("modalForm")

commentBtn.addEventListener("click", () => {
    modal.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if(e.target === modal) {
        modal.style.display = "none"; 
    }
})

// delete


// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/kanban/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/api/kanban');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };

//   document.querySelectorAll(".dltCardBtn").forEach(e => e.addEventListener("click", delButtonHandler));

// // create

// const newTaskHandler = async (event) => {
//   event.preventDefault();
  
//     const name = document.querySelector('#name').value.trim();
//     const task = document.querySelector('#task').value.trim();
//     const description = document.querySelector('#description').value.trim();
  
//     if (name && task && description) {

//       const response = await fetch(`/api/kanban`, {
//         method: 'POST',
//         body: JSON.stringify({ task, description, name }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/api/kanban');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };

//   const modalSave = document.querySelector(".modalInputBtn")
//   modalSave.addEventListener("click", newTaskHandler);
