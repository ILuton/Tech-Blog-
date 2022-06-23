

// create

const newTaskHandler = async (event) => {
  event.preventDefault();
    const description = document.querySelector('#comments').value.trim();
  
    if (description) {

      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ description }),
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

