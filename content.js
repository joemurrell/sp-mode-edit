(function tryForceEditMode() {
  const tryIt = () => {
    // Try all buttons labeled Edit
    const buttons = Array.from(document.querySelectorAll('input.ms-HubNav-link, button.ms-HubNav-link'))
      .filter(btn => btn.value === "Edit" || btn.innerText === "Edit");

    if (buttons.length > 0) {
      console.log("[Ext] Found Edit button(s), attempting synthetic click");
      buttons.forEach(btn => {
        const ev = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
        btn.dispatchEvent(ev);
      });
    } else {
      console.log("[Ext] No Edit button yet. Retrying...");
      setTimeout(tryIt, 1000);
    }
  };

  tryIt();
})();
