

// create

let sumbitBtn = document.getElementById("submitComment");

const newCommentHandler = async (event) => {
  event.preventDefault();
    const comment_info = document.querySelector('#comments').value.trim();
    const id = event.target.getAttribute('data-id');
  
    if (comment_info) {

      const response = await fetch(`/api/comments/${id}`, {
        method: 'POST',
        body: JSON.stringify({ comment_info }),
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