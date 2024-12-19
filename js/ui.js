"use strict";
const loaderBLock = document.getElementById("loaderBlock");

export default class Ui {
  async getGamesFromGenre(genre) {
    loaderBLock.classList.replace("d-none", "d-flex");
    let response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "bead19f4b0msh02fb73cb39f43f5p124a2djsn3ac24b5663b1",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    loaderBLock.classList.replace("d-flex", "d-none");
    let data = await response.json();
    return data;
  }
}
