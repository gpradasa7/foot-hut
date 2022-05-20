export const showData = (data, cont) => {
  cont.innerHTML = "";
  data.forEach(menu => {
    const { name, image } = menu;
    cont.innerHTML += `
  <div class="contener">
      <img src="${image}" alt="Kebab" class="image-secundary">
      <div class="image--contener-clients"><img class="img1" src="./images/users.png" alt="client">
        <div><img class="img2" src="./images/star.png" alt="star"></div>
        <div><span>(4.5)</span></div>
      </div>
      <h4 class="title-main">${name}</h4>
      <p class="p-secundary">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      <button class="buttom">Order Now</button>
    </div>`;
  });
};
