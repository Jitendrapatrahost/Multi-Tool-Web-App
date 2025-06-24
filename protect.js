// Disable Right-Click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable Developer Tools Shortcuts
document.onkeydown = function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
    return false;
  }
};

// Disable Middle Mouse Click
document.addEventListener("mousedown", function (e) {
  if (e.button === 1) {
    e.preventDefault();
  }
});

// Clear the Console Repeatedly
setInterval(() => {
  console.clear();
}, 1000);
