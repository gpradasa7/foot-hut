import { showData } from "../modules/showData.js";
import GetData from "../helpers/getData.js";

const modal = document.getElementById("modal");
const overlay = document.querySelector(".modal-overlay");

const ramenButton = document.getElementById("ramen");
const breakfastButton = document.getElementById("breakfast");
const lunchButton = document.getElementById("lunch");
const dinnerButton = document.getElementById("dinner");
const mexicanButton = document.getElementById("mexican");
const italianButton = document.getElementById("italian");
const dessertsButton = document.getElementById("desserts");
const drinksButton = document.getElementById("drinks");
const dataRamen = "https://hut-food.herokuapp.com/ramen";
const databreakfast = "https://hut-food.herokuapp.com/breakfast";
const datalunch = "https://hut-food.herokuapp.com/lunch";
const datadinner = "https://hut-food.herokuapp.com/dinner";
const datamexican = "https://hut-food.herokuapp.com/mexican";
const dataitalian = "https://hut-food.herokuapp.com/italian";
const datadesserts = "https://hut-food.herokuapp.com/desserts";
const datadrinks = "https://hut-food.herokuapp.com/drinks";

const container = document.getElementById("containerCards");
document.addEventListener("DOMContentLoaded", async () => {
  let ramen = await GetData(dataRamen);
  let breakfast = await GetData(databreakfast);
  let lunch = await GetData(datalunch);
  let dinner = await GetData(datadinner);
  let mexican = await GetData(datamexican);
  let italian = await GetData(dataitalian);
  let desserts = await GetData(datadesserts);
  let drinks = await GetData(datadrinks);

  ramenButton.addEventListener("click", async () => {
    showData(ramen, container);
  });
  breakfastButton.addEventListener("click", async () => {
    showData(breakfast, container);
  });
  lunchButton.addEventListener("click", async () => {
    showData(lunch, container);
  });
  dinnerButton.addEventListener("click", async () => {
    showData(dinner, container);
  });
  mexicanButton.addEventListener("click", async () => {
    showData(mexican, container);
  });
  italianButton.addEventListener("click", async () => {
    showData(italian, container);
  });
  dessertsButton.addEventListener("click", async () => {
    showData(desserts, container);
  });
  drinksButton.addEventListener("click", async () => {
    showData(drinks, container);
  });

  //CAMBIAR TEMA
});
//CAMBIAR TEMA

const themeSettings = evt => {
  const body = document.body;

  const theme = evt.currentTarget.selectedOptions[0].value;

  switch (theme) {
    case "light":
      body.setAttribute("data-theme", "light");
      modal.classList.remove("modal");
      overlay.classList.remove("modal-overlay");
      console.log("light mode active");
      break;
    case "dark":
      body.setAttribute("data-theme", "dark");
      modal.classList.remove("modal");
      overlay.classList.remove("modal-overlay");
      break;
    case "auto":
    default:
      body.setAttribute("data-theme", "auto");
      modal.classList.remove("modal");
      break;
  }
};

const themeToggler = document.getElementById("theme-toggler");

themeToggler.addEventListener("change", themeSettings);
