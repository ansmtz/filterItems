const navItems = document.querySelectorAll(".item"),
  boxes = document.querySelectorAll(".box"),
  container = document.querySelector(".container");

(function Handler() {
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      renderBoxes(e.target.textContent.toLowerCase());
    });
  });
})();

function renderBoxes(text) {
  const filteredArray = filterArray(boxes, text);
  if (text !== "all") {
    container.innerHTML = "";
    filteredArray.forEach((div) => {
      div.classList.add("showed");
      container.appendChild(div);
    });
  } else {
    boxes.forEach((box) => {
      container.appendChild(box);
    });
  }
}

function filterArray(boxes, text) {
  return Array.prototype.filter.call(boxes, (box) =>
    box.classList.contains(text)
  );
}
