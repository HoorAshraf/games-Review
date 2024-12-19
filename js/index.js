"use strict";
import Ui from "./ui.js";
import Game from "./game.js";

let gamesBlock = document.getElementById("gamesBLock");
let mmorpgBtn = document.getElementById("mmorpgBtn");
let shooterBtn = document.getElementById("shooterBtn");
let sailingBtn = document.getElementById("sailingBtn");
let permadeathBtn = document.getElementById("permadeathBtn");
let superheroBtn = document.getElementById("superheroBtn");
let pixelBtn = document.getElementById("pixelBtn");
let ui = new Ui();

async function buttonFunctionCall(category) {
  try {
    gamesBlock.textContent = "";
    let data = await ui.getGamesFromGenre(category);
    displayData(data);
  } catch (error) {
    console.error("Error fetching games: ", error);
  }
}

mmorpgBtn.addEventListener("click", () => {
  buttonFunctionCall("mmorpg");
  $("ul.navbar-nav a").removeClass("active");
  $("ul.navbar-nav a#mmorpgBtn").addClass("active");
});

shooterBtn.addEventListener("click", () => {
  buttonFunctionCall("shooter");
  $("ul.navbar-nav a").removeClass("active");
  $("ul.navbar-nav a#shooterBtn").addClass("active");
});

sailingBtn.addEventListener("click", () => {
  buttonFunctionCall("sailing");
  $("ul.navbar-nav a").removeClass("active");
  $("ul.navbar-nav a#sailingBtn").addClass("active");
});

permadeathBtn.addEventListener("click", () => {
  buttonFunctionCall("permadeath");
  $("ul.navbar-nav a").removeClass("active");
  $("ul.navbar-nav a#permadeathBtn").addClass("active");
});

superheroBtn.addEventListener("click", () => {
  buttonFunctionCall("superhero");
  $("ul.navbar-nav a").removeClass("active");
  $("ul.navbar-nav a#superheroBtn").addClass("active");
});

pixelBtn.addEventListener("click", () => {
  buttonFunctionCall("pixel");
  $("ul.navbar-nav a").removeClass("active");
  $("ul.navbar-nav a#pixelBtn").addClass("active");
});

async function displayData(data) {
  for (let i = 0; i < data.length; i++) {
    let game = new Game(
      data[i].title,
      data[i].short_description,
      data[i].genre,
      data[i].platform,
      data[i].thumbnail,
      data[i].release_date, // Use release_date instead of status
      data[i].game_url
    );
    let gameElement = game.addGame();
    gamesBlock.append(gameElement);
    gameElement.addEventListener("click", () => {
      game.showGamesDetail();
      document.getElementById("closeBtn").addEventListener("click", (e) => {
        e.preventDefault();
        game.hideGameDetails();
      });
    });
  }
}


let firstData = async () => {
  let data = await ui.getGamesFromGenre("mmorpg");
  return data;
};

async function displayFirstData() {
  displayData(await firstData());
}

displayFirstData();