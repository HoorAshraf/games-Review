export default class Game {
  constructor(title, short_description, genre, platform, img, release_date, gameUrl) {
    this.title = title;
    this.short_description = short_description;
    this.genre = genre;
    this.platform = platform;
    this.img = img;
    this.release_date = release_date && release_date.trim() !== "" ? release_date : "Release date not available";
    this.gameUrl = gameUrl || "";
  }

  addGame() {
    let gameElement = document.createElement("div");
    gameElement.classList.add("col-md-3");
    gameElement.innerHTML = `
      <div class="card bg-transparent text-white h-100">
          <img
              src="${this.img}"
              alt="game image"
              class="pt-3 w-100"
          />
          <div class="card-body">
              <div class="header-content d-flex justify-content-between">
              <p class="p-1 rounded-1">${this.title}</p>
              <p class="free-btn px-2 rounded-2 bg-primary">free</p>
              </div>
              <p class="card-text">
              ${this.short_description}
              </p>
          </div>
          <div class="card-footer d-flex justify-content-between">
              <span>${this.genre.toUpperCase()}</span> <span>${this.platform}</span>
          </div>
      </div>
    `;
    return gameElement;
  }

  showGamesDetail() {
    let details = document.getElementById("detailsContent");
    let page = document.getElementById("pageContent");

    details.innerHTML = `
  <div class="header-title d-flex justify-content-between pt-5">
    <h2>Details Game</h2>
    <i id="closeBtn" class="text-decoration-none text-white fa-solid fa-x fs-3 cursor-pointer"></i>
  </div>
  <div class="row details-container d-flex mt-3">
    <div class="col-md-4 pt-2 ps-0">
      <img
        src="${this.img}"
        alt="game image"
        class="object-fit-contain w-100"
      />
    </div>
    <div class="col-md-8 movie-info d-flex flex-column">
      <h2>${this.title}</h2>
      <p>Category: <span>${this.genre.toUpperCase()}</span></p>
      <p>Platform: <span>${this.platform}</span></p>
      <p>Release Date: <span>${this.release_date}</span></p>
      <p>${this.short_description}</p>
      <button
        id="showGameBtn"
        class="show-game btn btn-secondary w-25 bg-transparent border border-warning"
      >
        Show Game
      </button>
    </div>
  </div>
`;

    details.classList.replace("d-none", "d-block");
    page.classList.replace("d-block", "d-none");

    document.getElementById("showGameBtn").addEventListener("click", () => {
      this.showGame();
    });

    document.getElementById("closeBtn").addEventListener("click", (e) => {
      e.preventDefault();
      this.hideGameDetails();
    });
  }

  hideGameDetails() {
    let details = document.getElementById("detailsContent");
    let page = document.getElementById("pageContent");
    details.classList.replace("d-block", "d-none");
    page.classList.replace("d-none", "d-block");
  }

  showGame() {
    if (this.gameUrl) {
      window.open(this.gameUrl, '_blank');
    } else {
      alert("Game URL is not available.");
    }
  }
}
