/*Movie სისტემა*/
type MovieStatus = "Watched" | "Didn't Watch";

interface MovieModel {
  id: number;
  title: string;
  director: string;
  genre: string;
  year: number;
  rating: number;
  status: MovieStatus;
}

class Movie implements MovieModel {
  id: number;
  title: string;
  director: string;
  genre: string;
  year: number;
  rating: number;
  status: MovieStatus;

  constructor(
    id: number,
    title: string,
    director: string,
    genre: string,
    year: number,
    rating: number,
    status: MovieStatus,
  ) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.rating = rating;
    this.status = status;
  }

  get Id(): number {
    return this.id;
  }

  get Title(): string {
    return this.title;
  }

  get Director(): string {
    return this.director;
  }

  get Genre(): string {
    return this.genre;
  }

  get Year(): number {
    return this.year;
  }

  get Rating(): number {
    return this.rating;
  }

  get Status(): MovieStatus {
    return this.status;
  }

  getMovieTitle(): void {
    console.log(this.title);
  }

  getInfo(): string {
    console.log(`${this.title} - ${this.director} - ${this.year}`);
    return `${this.title} - ${this.director} - ${this.year} - ${this.status}`;
  }

  getId() {
    return this.id;
  }

  toggleStatus() {
    this.status = this.status === "Watched" ? "Didn't Watch" : "Watched";
  }
}

let movies: Movie[] = [
  new Movie(
    1,
    "Forrest Gump",
    "Robert Zemeckis",
    "drama",
    1994,
    8.8,
    "Watched",
  ),
  new Movie(
    2,
    "The Shawshank Redemption",
    "Frank Darabont",
    "drama",
    1994,
    9.3,
    "Watched",
  ),
  new Movie(
    3,
    "Inception",
    "Christopher Nolan",
    "sci-fi",
    2010,
    8.8,
    "Watched",
  ),
  new Movie(
    4,
    "The Godfather",
    "Francis Ford Coppola",
    "crime",
    1972,
    9.2,
    "Didn't Watch",
  ),
  new Movie(
    5,
    "Pulp Fiction",
    "Quentin Tarantino",
    "crime",
    1994,
    8.9,
    "Watched",
  ),
  new Movie(
    6,
    "Interstellar",
    "Christopher Nolan",
    "sci-fi",
    2014,
    8.6,
    "Didn't Watch",
  ),
  new Movie(
    7,
    "The Dark Knight",
    "Christopher Nolan",
    "action",
    2008,
    9.0,
    "Watched",
  ),
  new Movie(
    8,
    "Fight Club",
    "David Fincher",
    "drama",
    1999,
    8.8,
    "Didn't Watch",
  ),
  new Movie(9, "The Matrix", "Lana Wachowski", "sci-fi", 1999, 8.7, "Watched"),
  new Movie(
    10,
    "Parasite",
    "Bong Joon-ho",
    "thriller",
    2019,
    8.6,
    "Didn't Watch",
  ),
];

movies[0].getMovieTitle();

class MovieStaff {
  protected id: number;
  protected name: string;
  protected surname: string;
  protected position: string;
  protected experience: number;

  constructor(
    id: number,
    name: string,
    surname: string,
    position: string,
    experience: number,
  ) {
    this.Id = id;
    this.Name = name;
    this.Surname = surname;
    this.Position = position;
    this.Experience = experience;
  }

  set Id(id: number) {
    this.id = id;
  }

  set Name(name: string) {
    this.name = name;
  }

  set Surname(surname: string) {
    this.surname = surname;
  }

  set Position(position: string) {
    this.position = position;
  }

  set Experience(experience: number) {
    this.experience = experience;
  }

  get Id(): number {
    return this.id;
  }

  get Name(): string {
    return this.name;
  }

  get Surname(): string {
    return this.surname;
  }

  get Position(): string {
    return this.position;
  }

  get Experience(): number {
    return this.experience;
  }

  myJob(): string {
    return `Hello, i am ${this.surname} ${this.name}. I work as ${this.position}`;
  }
}

class Critics extends MovieStaff {
  private target: string;
  private point: number;
  private verify: boolean;

  constructor(
    id: number,
    name: string,
    surname: string,
    position: string,
    experience: number,
    target: string,
    point: number,
    verify: boolean,
  ) {
    super(id, name, surname, position, experience);
    this.Target = target;
    this.Point = point;
    this.Verify = verify;
  }

  set Target(target: string) {
    this.target = target;
  }

  set Point(point: number) {
    this.point = point;
  }

  set Verify(verify: boolean) {
    this.verify = verify;
  }

  get Target(): string {
    return this.target;
  }

  get Point(): number {
    return this.point;
  }

  get Verify(): boolean {
    return this.verify;
  }
}

class Tester extends MovieStaff {
  private field: string;
  private index: number;

  constructor(
    id: number,
    name: string,
    surname: string,
    position: string,
    experience: number,
    field: string,
    index: number,
  ) {
    super(id, name, surname, position, experience);
    this.Field = field;
    this.Index = index;
  }

  set Field(field: string) {
    this.field = field;
  }

  set Index(index: number) {
    this.index = index;
  }

  get Field(): string {
    return this.field;
  }

  get Index(): number {
    return this.index;
  }
}

const myForm = document.getElementById("myForm") as HTMLDivElement;
const modal = document.getElementById("modal") as HTMLDivElement;
const list = document.getElementById("dataList") as HTMLDivElement;

const form = document.createElement("form") as HTMLFormElement;
const titleInput = document.createElement("input") as HTMLInputElement;
titleInput.type = "text";
titleInput.placeholder = "title";
const directorInput = document.createElement("input") as HTMLInputElement;
directorInput.type = "text";
directorInput.placeholder = "director";
const genreInput = document.createElement("input") as HTMLInputElement;
genreInput.type = "text";
genreInput.placeholder = "genre";
const yearInput = document.createElement("input") as HTMLInputElement;
yearInput.type = "text";
yearInput.placeholder = "year";
const ratingInput = document.createElement("input") as HTMLInputElement;
ratingInput.type = "string";
ratingInput.placeholder = "Rating";
const statusInput = document.createElement("select") as HTMLSelectElement;
const neutral = document.createElement("option") as HTMLOptionElement;
neutral.value = "";
neutral.textContent = "Choose Status";
const watchedSelect = document.createElement("option") as HTMLOptionElement;
watchedSelect.value = "Watched";
watchedSelect.textContent = "Watched";
const notwatchedSelect = document.createElement("option") as HTMLOptionElement;
notwatchedSelect.value = "Didn't Watch";
notwatchedSelect.textContent = "Didn't Watch";

const button = document.createElement("button") as HTMLButtonElement;
button.type = "submit";
button.textContent = "OK";

statusInput.append(neutral, watchedSelect, notwatchedSelect);
form.append(
  titleInput,
  directorInput,
  genreInput,
  yearInput,
  ratingInput,
  statusInput,
  button,
);

myForm.appendChild(form);

function loadData() {
  let data = localStorage.getItem("films");
  if (data) {
    const newmovies = JSON.parse(data);
    movies = newmovies.map((film: MovieModel) => {
      return new Movie(
        film.id,
        film.title,
        film.director,
        film.genre,
        film.year,
        film.rating,
        film.status,
      );
    });
  }
}
loadData();

function saveData() {
  localStorage.setItem("films", JSON.stringify(movies));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = titleInput.value.trim();
  let director = directorInput.value.trim();
  let genre = genreInput.value.trim();
  let year = Number(yearInput.value.trim());
  let rating = Number(ratingInput.value.trim());
  let state = statusInput.value;

  if (!title || !director || !genre || !year || !rating || !state) {
    return;
  }

  let newMovie = new Movie(
    Date.now(),
    title,
    director,
    genre,
    year,
    rating,
    state === "Watched" ? "Watched" : "Didn't Watch",
  );

  movies.push(newMovie);

  render(movies);
  saveData();
});

function editInfo(movieitem: Movie) {
  const container = document.createElement("div");
  container.classList.add("modal-container");

  const modalframe = document.createElement("div");
  modalframe.className = "modal-frame";

  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

  closeBtn.addEventListener("click", () => {
    container.remove();
  });

  let newform = document.createElement("form");
  let titleChanger = document.createElement("input");
  titleChanger.type = "text";
  let directorChanger = document.createElement("input");
  directorChanger.type = "text";
  let genreChanger = document.createElement("input");
  genreChanger.type = "text";
  let yearChanger = document.createElement("input");
  yearChanger.type = "number";
  let ratingChanger = document.createElement("input");
  ratingChanger.type = "string";

  titleChanger.value = movieitem.title;
  directorChanger.value = movieitem.director;
  genreChanger.value = movieitem.genre;
  yearChanger.value = movieitem.year.toString();
  ratingChanger.value = movieitem.rating.toString();

  let saveChanger = document.createElement("button");
  saveChanger.textContent = "save";
  saveChanger.type = "submit";

  newform.addEventListener("submit", (e) => {
    e.preventDefault();
    movieitem.title = titleChanger.value.trim();
    movieitem.director = directorChanger.value.trim();
    movieitem.genre = genreChanger.value.trim();
    movieitem.year = Number(yearChanger.value.trim());
    movieitem.rating = Number(ratingChanger.value.trim());
    saveData();

    render(movies);
    container.remove();
  });
  newform.append(
    titleChanger,
    directorChanger,
    genreChanger,
    yearChanger,
    ratingChanger,
    saveChanger,
  );

  modalframe.append(closeBtn, newform);
  container.append(modalframe);
  modal.append(container);
}

function render(data: Movie[]) {
  list.innerHTML = "";

  const div = document.createElement("div");
  div.classList = "movie";

  data.forEach((film) => {
    const card = document.createElement("div");
    card.className = "movie-card";

    const infoContainer = document.createElement("div");
    infoContainer.className = "movie-info";

    const title = document.createElement("h3");
    title.textContent = film.Title;

    const details = document.createElement("p");
    details.innerHTML = `🎬 ${film.Director} | 📅 ${film.Year} | 🎭 ${film.Genre}`;

    const metaContainer = document.createElement("div");
    metaContainer.className = "movie-meta";

    const rating = document.createElement("span");
    rating.className = "rating-badge";
    rating.innerHTML = `⭐ ${film.Rating}`;

    const status = document.createElement("span");
    status.className = `status-badge ${film.Status === "Watched" ? "watched" : "not-watched"}`;
    status.textContent = film.Status;

    metaContainer.append(rating, status);
    infoContainer.append(title, details, metaContainer);

    const actions = document.createElement("div");
    actions.className = "movie-actions";
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn-action toggle-btn";
    toggleBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    toggleBtn.addEventListener("click", () => {
      film.toggleStatus();
      saveData();
      render(movies);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-action delete-btn";
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.addEventListener("click", () => {
      movies = movies.filter((m) => m.Id !== film.Id);
      saveData();
      render(movies);
    });

    const editBtn = document.createElement("button");
    editBtn.className = "btn-action";
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editBtn.addEventListener("click", () => {
      editInfo(film);
    });

    actions.append(toggleBtn, deleteBtn, editBtn);
    card.append(infoContainer, actions);
    list.appendChild(card);
  });
}

render(movies);
