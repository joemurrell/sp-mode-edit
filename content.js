(function tryClickEdit() {
  // Wait for DOM elements to load
  const tryClick = () => {
    const editButton = document.querySelector('input.ms-HubNav-link[value="Edit"]');
    if (editButton) {
      console.log("Found Edit button. Clicking.");
      editButton.click();
    } else {
      console.log("Edit button not found. Retrying...");
      setTimeout(tryClick, 500); // retry after 500ms
    }
  };

  tryClick();
})();
  
