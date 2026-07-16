const form = document.querySelector("form");
const input = document.getElementById("input_value");
const addBtn = document.getElementById("btn");
const searchBtn = document.getElementById("search_btn");
const alertText = document.getElementById("alert");
const resultContainer = document.getElementById("result_cont");
const filterSelect = document.getElementById("filter_select");
const sortSelect = document.getElementById("sort_select");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let searchQuery = "";
let alertTimeout;

const fetchApi = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5",
    );

    if (!res.ok) {
      throw new Error("response error 404");
      const data = await res.json();

      const apiTasks = data.map((item) => ({
        id: `api-${item.id}`,
        text: item.title,
        status: item.completed,
        createdAt: new Date().toString(),
      }));

      tasks = [...apiTasks, ...tasks];
      saveTasks();
      renderTasks();
    }
  } catch (err) {
    console.error(errorw);
  }
};

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("ka-GE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const showAlert = (message) => {
  alertText.style.display = "block";
  alertText.textContent = message;

  clearTimeout(alertTimeout);
  alertTimeout = setTimeout(() => {
    alertText.style.display = "none";
  }, 3000);
};

const validateInput = (value) => {
  const valueTrimed = value.trim();

  if (valueTrimed === "") {
    showAlert("გთხოვთ შეავსოთ ველი!");
    return false;
  }

  if (valueTrimed.length < 3) {
    showAlert("დავალება უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს!");
    return false;
  }

  return true;
};

const filterTasks = (searchValue) => {
  let result = tasks;

  if (searchValue.trim() !== "") {
    result = result.filter((task) =>
      task.text.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  const statusFilter = filterSelect.value;
  if (statusFilter === "done") {
    result = result.filter((task) => task.status === true);
  } else if (statusFilter === "undone") {
    result = result.filter((task) => task.status === false);
  }

  return result;
};

const sortTasks = (list) => {
  let sorted = [...list];
  const sortValue = sortSelect.value;

  switch (sortValue) {
    case "newest":
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
    case "oldest":
      sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      break;
    case "ka":
      sorted.sort((a, b) => a.text.localeCompare(b.text, "ka"));
      break;
  }

  return sorted;
};

const renderTasks = () => {
  resultContainer.innerHTML = "";

  const filteredTasks = sortTasks(filterTasks(searchQuery));

  filteredTasks.forEach((task) => {
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("result_cont");
    if (task.status) {
      tasksContainer.classList.add("done");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("status_checkbox");
    checkbox.checked = task.status;

    checkbox.addEventListener("change", () => {
      const targetTask = tasks.find((t) => t.id === task.id);
      targetTask.status = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const textWrapper = document.createElement("div");
    textWrapper.classList.add("text_wrapper");

    const result = document.createElement("p");
    result.classList.add("result");
    result.textContent = task.text;

    const dateLabel = document.createElement("span");
    dateLabel.classList.add("date_label");
    dateLabel.textContent = `დამატებულია: ${formatDate(task.createdAt)}`;

    textWrapper.append(result, dateLabel);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.textContent = "🗑️";

    removeBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      renderTasks();
    });

    tasksContainer.append(checkbox, textWrapper, removeBtn);
    resultContainer.append(tasksContainer);
  });
};

input.addEventListener("input", () => {
  searchQuery = input.value;
  renderTasks();
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchQuery = input.value;
  renderTasks();
});

filterSelect.addEventListener("change", renderTasks);
sortSelect.addEventListener("change", renderTasks);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = input.value;

  if (!validateInput(value)) {
    return;
  }

  const tasksInfo = {
    id: Date.now(),
    text: value.trim(),
    status: false,
    createdAt: new Date().toString(),
  };

  tasks.push(tasksInfo);
  input.value = "";
  searchQuery = "";
  renderTasks();
  saveTasks();
});

fetchApi();
renderTasks();
