"use strict";
/* სპორტული კლუბის სისტემა */
class Player {
    constructor(id, name, sport, age, status) {
        this.id = id;
        this.name = name;
        this.sport = sport;
        this.age = age;
        this.status = status;
    }
    get Id() {
        return this.id;
    }
    get Name() {
        return this.name;
    }
    get Sport() {
        return this.sport;
    }
    get Age() {
        return this.age;
    }
    get Status() {
        return this.status;
    }
    getPlayerName() {
        console.log(this.name);
    }
    getInfo() {
        return `${this.name} - ${this.sport} - ${this.age} - ${this.status}`;
    }
    getId() {
        return this.id;
    }
    toggleStatus() {
        if (this.status === "Active") {
            this.status = "Injured";
        }
        else {
            this.status = "Active";
        }
    }
}
let players = [
    new Player(1, "გიორგი გუგუნავა", "ფეხბურთი", 26, "Active"),
    new Player(2, "ხვიჩა კვარაცხელია", "ფეხბურთი", 21, "Active"),
    new Player(3, "ზაზა ფაჩულია", "კალათბურთი", 22, "Injured"),
    new Player(4, "ნონა გაფრინდაშვილი", "ჭადრაკი", 85, "Active"),
    new Player(5, "მარიამ გელაშვილი", "ცურვა", 19, "Active"),
    new Player(6, "ანა კვირიკაშვილი", "ჩოგბურთი", 27, "Injured"),
    new Player(7, "ბექა ლომიძე", "ბოქსი", 28, "Active"),
];
players[0].getPlayerName();
class Coach {
    constructor(coachName) {
        this.coachName = coachName;
    }
    printName() {
        console.log(`Coach: ${this.coachName}`);
    }
}
class FitnessCoach extends Coach {
    constructor(coachName, specialization) {
        super(coachName);
        this.specialization = specialization;
    }
    describeSpecialization() {
        console.log(`${this.coachName} ავარჯიშებს: ${this.specialization}`);
    }
}
const mainFitnessCoach = new FitnessCoach("სანდრო ბერიძე", "სიძლიერის წვრთნა");
mainFitnessCoach.printName();
mainFitnessCoach.describeSpecialization();
const myForm = document.getElementById("myForm");
const modal = document.getElementById("modal");
const list = document.getElementById("dataList");
const searchBox = document.querySelector("#searchBox");
const form = document.createElement("form");
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "სახელი";
const sportInput = document.createElement("input");
sportInput.type = "text";
sportInput.placeholder = "სპორტის სახეობა";
const ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.placeholder = "ასაკი";
const button = document.createElement("button");
button.type = "submit";
button.textContent = "დამატება";
form.append(nameInput, sportInput, ageInput, button);
myForm.appendChild(form);
function loadData() {
    const data = localStorage.getItem("players");
    if (data) {
        const parsed = JSON.parse(data);
        players = parsed.map((p) => new Player(p.id, p.name, p.sport, p.age, p.status));
    }
}
loadData();
function saveData() {
    localStorage.setItem("players", JSON.stringify(players));
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const sport = sportInput.value.trim();
    const age = Number(ageInput.value.trim());
    if (!name || !sport || !age) {
        return;
    }
    const newPlayer = new Player(Date.now(), name, sport, age, "Active");
    players.push(newPlayer);
    saveData();
    render(players);
    form.reset();
});
searchBox.addEventListener("input", () => {
    const query = searchBox.value.trim().toLowerCase();
    const filtered = players.filter((p) => p.Name.toLowerCase().includes(query));
    render(filtered);
});
function editInfo(playerItem) {
    const container = document.createElement("div");
    container.classList.add("modal-container");
    const modalFrame = document.createElement("div");
    modalFrame.className = "modal-frame";
    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    closeBtn.addEventListener("click", () => {
        container.remove();
    });
    const editForm = document.createElement("form");
    const nameChanger = document.createElement("input");
    nameChanger.type = "text";
    const sportChanger = document.createElement("input");
    sportChanger.type = "text";
    const ageChanger = document.createElement("input");
    ageChanger.type = "number";
    nameChanger.value = playerItem.name;
    sportChanger.value = playerItem.sport;
    ageChanger.value = playerItem.age.toString();
    const saveChanger = document.createElement("button");
    saveChanger.textContent = "შენახვა";
    saveChanger.type = "submit";
    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        playerItem.name = nameChanger.value.trim();
        playerItem.sport = sportChanger.value.trim();
        playerItem.age = Number(ageChanger.value.trim());
        saveData();
        render(players);
        container.remove();
    });
    editForm.append(nameChanger, sportChanger, ageChanger, saveChanger);
    modalFrame.append(closeBtn, editForm);
    container.append(modalFrame);
    modal.append(container);
}
function render(data) {
    list.innerHTML = "";
    data.forEach((player) => {
        const card = document.createElement("div");
        card.className = "player-card";
        const infoContainer = document.createElement("div");
        infoContainer.className = "player-info";
        const name = document.createElement("h3");
        name.textContent = player.Name;
        const details = document.createElement("p");
        details.innerHTML = `🏅 ${player.Sport} | 🎂 ${player.Age}`;
        const statusBadge = document.createElement("span");
        statusBadge.className = `status-badge ${player.Status === "Active" ? "active" : "injured"}`;
        statusBadge.textContent = player.Status;
        infoContainer.append(name, details, statusBadge);
        const actions = document.createElement("div");
        actions.className = "player-actions";
        const toggleBtn = document.createElement("button");
        toggleBtn.className = "btn-action toggle-btn";
        toggleBtn.innerHTML = `<i class="fa-solid fa-heart-pulse"></i>`;
        toggleBtn.addEventListener("click", () => {
            player.toggleStatus();
            saveData();
            render(players);
        });
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn-action delete-btn";
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.addEventListener("click", () => {
            players = players.filter((p) => p.Id !== player.Id);
            saveData();
            render(players);
        });
        const editBtn = document.createElement("button");
        editBtn.className = "btn-action edit-btn";
        editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        editBtn.addEventListener("click", () => {
            editInfo(player);
        });
        actions.append(toggleBtn, deleteBtn, editBtn);
        card.append(infoContainer, actions);
        list.appendChild(card);
    });
}
render(players);
//# sourceMappingURL=typescript.js.map