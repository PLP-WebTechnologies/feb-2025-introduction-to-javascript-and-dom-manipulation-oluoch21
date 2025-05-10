// Change text content
document.getElementById("change-text").addEventListener("click", function () {
  document.getElementById("description").textContent = "Book an appointment with us and You'll not regret it👌";
});

// Change CSS styles
document.getElementById("change-style").addEventListener("click", function () {
  document.getElementById("main-title").style.color = "red";
  document.getElementById("main-title").style.fontSize = "2.5rem";
});

// Add/Remove an element
document.getElementById("toggle-element").addEventListener("click", function () {
  const container = document.getElementById("box-container");
  const box = document.querySelector(".box");

  if (box) {
    container.removeChild(box); // Remove box
  } else {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    container.appendChild(newBox); // Add box
  }
});
