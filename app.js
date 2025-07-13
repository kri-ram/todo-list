// 🌙 Theme Switch
const themeSwitch = document.querySelector("#theme-switch");
const modeLabel = document.querySelector(".mode-label");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("day-mode");
  modeLabel.textContent = themeSwitch.checked ? "🌞" : "🌙";
});

// ✅ To-Do Logic
let box = document.querySelector("#inp-box");
let list = document.querySelector("#list");
let btn = document.querySelector("button");

// Add Task
btn.addEventListener("click", function () {
    if (box.value === '') {
        alert("Add Task...");
    } else {
        let li = document.createElement("li");
        li.innerHTML = box.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 

        li.appendChild(span);
        list.appendChild(li);

        // 🎉 Animate Button
        btn.textContent = "Task added";
        btn.classList.add("shake");

        setTimeout(() => {
            btn.textContent = "Add";
            btn.classList.remove("shake");
        }, 800);
    }

    box.value = '';
    saveData();
});

// ✅ Toggle check or delete
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// ✅ LocalStorage Save & Load
function saveData() {
    localStorage.setItem("data", list.innerHTML);
}
function showData() {
    list.innerHTML = localStorage.getItem("data");
}
showData();
