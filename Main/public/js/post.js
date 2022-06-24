

// create

let sumbitBtn = document.getElementById("submitComment");

const newCommentHandler = async (event) => {
  event.preventDefault();
    const comment_info = document.querySelector('#comments').value.trim();
    const id = event.target.getAttribute('data-id');
    const comment_user = event.target.getAttribute('data-name');
  
    if (comment_info) {

      const response = await fetch(`/api/comments/${id}`, {
        method: 'POST',
        body: JSON.stringify({ comment_info, comment_user }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        location.reload();
      } else {
        alert('Failed to create project');
      }
    }
  };

sumbitBtn.addEventListener("click", newCommentHandler);