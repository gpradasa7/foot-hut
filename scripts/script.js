import { showData } from "../modules/showData.js";
import GetData from "../helpers/getData.js";

const ramenButton = document.getElementById("ramen");
const breakfastButton = document.getElementById("breakfast");
const lunchButton = document.getElementById("lunch");
const dinnerButton = document.getElementById("dinner");
const mexicanButton = document.getElementById("mexican");
const italianButton = document.getElementById("italian");
const dessertsButton = document.getElementById("desserts");
const drinksButton = document.getElementById("drinks");
const dataRamen = "http://localhost:3000/ramen";
const databreakfast = "http://localhost:3000/breakfast";
const datalunch = "http://localhost:3000/lunch";
const datadinner = "http://localhost:3000/dinner";
const datamexican = "http://localhost:3000/mexican";
const dataitalian = "http://localhost:3000/italian";
const datadesserts = "http://localhost:3000/desserts";
const datadrinks = "http://localhost:3000/drinks";

const container = document.getElementById("containerCards");
const main2 = document.querySelector(".main2");
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
});
