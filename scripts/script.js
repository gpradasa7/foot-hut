import { showData } from "../modules/showData.js";
import GetData from "../helpers/getData.js";
const ramenButton = document.getElementById("ramen");
const breakfast = document.getElementById("breakfast");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");
const mexican = document.getElementById("mexican");
const italian = document.getElementById("italian");
const desserts = document.getElementById("desserts");
const drinks = document.getElementById("drinks");
const dataRamen = "http://localhost:3000/ramen";

const container = document.getElementById("containerCards");

document.addEventListener("DOMContentLoaded", async () => {
  let ramen = await GetData(dataRamen);
  console.log(ramen);
  ramenButton.addEventListener("click", async () => {
    showData(ramen, container);
  });
});
