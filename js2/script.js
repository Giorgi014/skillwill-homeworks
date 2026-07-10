const search = document.getElementById("input_search");
const searchBtn = document.getElementById("search_icon");
const booksContainer = document.getElementById("books");
const trashIcon = document.getElementById("trash");

let searchedBooks = [];

const fetchApi = async (book) => {
  const url = "https://openlibrary.org/search.json";
  try {
    const res = await fetch(`${url}?q=${encodeURIComponent(book)}`);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const result = await res.json();
    console.log(result, "=============== All results ===============");
    return result;
  } catch (err) {
    console.error(err.message);
  }
};

const bookContainer = (books) => {
  books.forEach((book) => {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book_container");

    const glow = document.createElement("div");
    glow.classList.add("book_glow");

    const dark1 = document.createElement("div");
    dark1.classList.add("book_darkBorderBg");

    const dark2 = document.createElement("div");
    dark2.classList.add("book_darkBorderBg");

    const dark3 = document.createElement("div");
    dark3.classList.add("book_darkBorderBg");

    const white = document.createElement("div");
    white.classList.add("book_white");

    const border = document.createElement("div");
    border.classList.add("book_border");

    const content = document.createElement("div");
    content.classList.add("book_content");

    const title = document.createElement("h2");
    title.textContent = book.name;

    const author = document.createElement("p");
    author.textContent = `Authors: ${book.author}`;

    const key = document.createElement("p");
    key.textContent = book.id;

    const trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-trash-can");
    trash.style.color = "#f2f2f2";
    trash.style.cursor = "pointer";

    trash.addEventListener("click", () => {
      deleteBook(book.id);
    });

    content.append(key, title, author, trash);

    bookContainer.append(glow, dark1, dark2, dark3, white, border, content);

    booksContainer.appendChild(bookContainer);
  });
};

const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000);
};

const searchedBook = async () => {
  const searchedValue = search.value.trim().toLowerCase();

  const bookApi = await fetchApi(searchedValue);

  searchedBooks = bookApi.docs.map((book) => ({
    id: generateRandomId(),
    name: book.title,
    author: book.author_name,
  }));
  search.value = "";

  console.log(
    searchedBooks,
    "=============== Searched results =============== ",
  );
  return bookContainer(searchedBooks);
};

const notFind = () => {
  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book_container");

  const glow = document.createElement("div");
  glow.classList.add("book_glow");

  const dark1 = document.createElement("div");
  dark1.classList.add("book_darkBorderBg");

  const dark2 = document.createElement("div");
  dark2.classList.add("book_darkBorderBg");

  const dark3 = document.createElement("div");
  dark3.classList.add("book_darkBorderBg");

  const white = document.createElement("div");
  white.classList.add("book_white");

  const border = document.createElement("div");
  border.classList.add("book_border");

  const content = document.createElement("div");
  content.classList.add("book_content");

  const messageText = document.createElement("p");
  messageText.classList.add("message");

  messageText.textContent = "Can not fint Book or Author";

  content.append(messageText);

  bookContainer.append(glow, dark1, dark2, dark3, white, border, content);

  booksContainer.appendChild(bookContainer);
};

const renderBooks = () => {
  booksContainer.innerHTML = "";
  bookContainer(searchedBooks);
};

const deleteBook = (id) => {
  searchedBooks = searchedBooks.filter((book) => book.id !== id);

  renderBooks();
};

searchBtn.addEventListener("click", () => {
  searchedBook;
  if (searchedBooks.length === 0) {
    notFind();
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchedBook();
    if (searchedBooks.length === 0) {
      notFind();
    }
  }
});

fetchApi();
bookContainer(searchedBooks);
