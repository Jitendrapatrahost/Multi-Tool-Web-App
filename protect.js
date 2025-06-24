// Disable Right-Click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable Mouse Middle Click (scroll or new tab)
document.addEventListener("mousedown", function (e) {
  if (e.button === 1) {
    e.preventDefault();
  }
});

// Disable DevTools Shortcuts
document.addEventListener("keydown", function (e) {
  const key = e.key.toLowerCase();
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (key === "i" || key === "j" || key === "c")) ||
    (e.ctrlKey && key === "u")
  ) {
    e.preventDefault();
    return false;
  }
});

// Detect DevTools Opened via Timing Trick
let devtoolsOpened = false;
setInterval(function () {
  const start = performance.now();
  debugger;
  const end = performance.now();
  if (end - start > 100) {
    if (!devtoolsOpened) {
      alert("Developer tools are not allowed.");
      window.location.href = "about:blank"; // Optional redirect
      devtoolsOpened = true;
    }
  }
}, 1000);

// Continuously clear console
setInterval(() => {
  console.clear();
}, 500);
