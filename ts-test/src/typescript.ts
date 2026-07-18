type BookStatus = "წიგნი ხელმისაწვდომია" | "წიგნი არ არის ხელმისაწვდომი";

interface BookModel {
  id: number;
  title: string;
  author: string;
  year: number;
  status: BookStatus;
}

class Book implements BookModel {
  id: number;
  title: string;
  author: string;
  year: number;
  status: BookStatus;

  constructor(
    id: number,
    title: string,
    author: string,
    year: number,
    status: BookStatus,
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
  }

  get Id(): number {
    return this.id;
  }

  get Title(): string {
    return this.title;
  }

  get Book(): string {
    return this.author;
  }

  get Year(): number {
    return this.year;
  }

  get Status(): BookStatus {
    return this.status;
  }

  getBookTitle(): void {
    console.log(this.title);
  }

  getInfo(): string {
    return `${this.title} - ${this.author} - ${this.year} - ${this.status}`;
  }

  getId(): number {
    return this.id;
  }

  toggleStatus(): void {
    if (this.status === "წიგნი ხელმისაწვდომია") {
      this.status = "წიგნი არ არის ხელმისაწვდომი";
    } else {
      this.status = "წიგნი ხელმისაწვდომია";
    }
  }
}

let books: Book[] = [
  new Book(1, "1984", "ჯორჯ ორუელი", 1949, "წიგნი ხელმისაწვდომია"),
  new Book(2, "პრინცი", "ნიკოლო მაკიაველი", 1532, "წიგნი ხელმისაწვდომია"),
  new Book(
    3,
    "დემოკრატია ამერიკაში",
    "ალექსის დე ტოკვილი",
    1835,
    "წიგნი არ არის ხელმისაწვდომი",
  ),
  new Book(
    4,
    "საქართველოს ისტორია",
    "ივანე ჯავახიშვილი",
    1913,
    "წიგნი ხელმისაწვდომია",
  ),
  new Book(
    5,
    "სოციალური კონტრაქტი",
    "ჟან-ჟაკ რუსო",
    1762,
    "წიგნი ხელმისაწვდომია",
  ),
  new Book(
    6,
    "საბჭოთა კავშირის ისტორია",
    "ედვარდ კარი",
    1950,
    "წიგნი არ არის ხელმისაწვდომი",
  ),
  new Book(7, "სპარსეთის ომები", "ჰეროდოტე", -440, "წიგნი ხელმისაწვდომია"),
];

books[0].getBookTitle();

class Employee {
  protected EmployeeName: string;

  constructor(EmployeeName: string) {
    this.EmployeeName = EmployeeName;
  }

  printName(): void {
    console.log(`Employee: ${this.EmployeeName}`);
  }
}

class Developer extends Employee {
  private specialization: string;

  constructor(EmployeeName: string, specialization: string) {
    super(EmployeeName);
    this.specialization = specialization;
  }

  describeSpecialization(): void {
    console.log(`${this.EmployeeName} ავარჯიშებს: ${this.specialization}`);
  }
}

const mainDeveloper = new Developer("სანდრო ბერიძე", "სიძლიერის წვრთნა");
mainDeveloper.printName();
mainDeveloper.describeSpecialization();

const myForm = document.getElementById("myForm") as HTMLDivElement;
const modal = document.getElementById("modal") as HTMLDivElement;
const list = document.getElementById("dataList") as HTMLDivElement;
const searchBox = document.querySelector("#searchBox") as HTMLInputElement;

const form = document.createElement("form") as HTMLFormElement;

const nameInput = document.createElement("input") as HTMLInputElement;
nameInput.type = "text";
nameInput.placeholder = "სათაური";

const bookInput = document.createElement("input") as HTMLInputElement;
bookInput.type = "text";
bookInput.placeholder = "ავტორი";

const ageInput = document.createElement("input") as HTMLInputElement;
ageInput.type = "number";
ageInput.placeholder = "გამოცემის წელი";

const button = document.createElement("button") as HTMLButtonElement;
button.type = "submit";
button.textContent = "დამატება";

form.append(nameInput, bookInput, ageInput, button);
myForm.appendChild(form);

function loadData(): void {
  const data = localStorage.getItem("books");
  if (data) {
    const parsed: BookModel[] = JSON.parse(data);
    books = parsed.map(
      (p) => new Book(p.id, p.title, p.author, p.year, p.status),
    );
  }
}
loadData();

function saveData(): void {
  localStorage.setItem("books", JSON.stringify(books));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const book = bookInput.value.trim();
  const age = Number(ageInput.value.trim());

  if (!name || !book || !age) {
    return;
  }

  const newBook = new Book(Date.now(), name, book, age, "წიგნი ხელმისაწვდომია");
  books.push(newBook);

  saveData();
  render(books);

  form.reset();
});

searchBox.addEventListener("input", () => {
  const query = searchBox.value.trim().toLowerCase();

  const filtered = books.filter((p) => p.Title.toLowerCase().includes(query));

  render(filtered);
});

function editInfo(bookItem: Book): void {
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
  const bookChanger = document.createElement("input");
  bookChanger.type = "text";
  const ageChanger = document.createElement("input");
  ageChanger.type = "number";

  nameChanger.value = bookItem.title;
  bookChanger.value = bookItem.author;
  ageChanger.value = bookItem.year.toString();

  const saveChanger = document.createElement("button");
  saveChanger.textContent = "შენახვა";
  saveChanger.type = "submit";

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    bookItem.title = nameChanger.value.trim();
    bookItem.author = bookChanger.value.trim();
    bookItem.year = Number(ageChanger.value.trim());

    saveData();
    render(books);
    container.remove();
  });

  editForm.append(nameChanger, bookChanger, ageChanger, saveChanger);
  modalFrame.append(closeBtn, editForm);
  container.append(modalFrame);
  modal.append(container);
}

function render(data: Book[]): void {
  list.innerHTML = "";

  data.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";

    const infoContainer = document.createElement("div");
    infoContainer.className = "book-info";

    const name = document.createElement("h3");
    name.textContent = book.Title;

    const details = document.createElement("p");
    details.innerHTML = `${book.Book} - ${book.Year}`;

    const statusBadge = document.createElement("span");
    statusBadge.className = `status-badge ${
      book.Status === "წიგნი ხელმისაწვდომია"
        ? "წიგნი ხელმისაწვდომია"
        : "წიგნი არ არის ხელმისაწვდომი"
    }`;
    statusBadge.textContent = book.Status;

    infoContainer.append(name, details, statusBadge);

    const actions = document.createElement("div");
    actions.className = "book-actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn-action toggle-btn";
    toggleBtn.innerHTML = `<i class="fa-solid fa-heart-pulse"></i>`;
    toggleBtn.addEventListener("click", () => {
      book.toggleStatus();
      saveData();
      render(books);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-action delete-btn";
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.addEventListener("click", () => {
      books = books.filter((p) => p.Id !== book.Id);
      saveData();
      render(books);
    });

    const editBtn = document.createElement("button");
    editBtn.className = "btn-action edit-btn";
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editBtn.addEventListener("click", () => {
      editInfo(book);
    });

    actions.append(toggleBtn, deleteBtn, editBtn);
    card.append(infoContainer, actions);
    list.appendChild(card);
  });
}

render(books);
