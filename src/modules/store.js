export const likeProduct = async (products, id) => {
  const ProductList = document.querySelector('.app_content');
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/likes/`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  ).then(() => {
    const likeItem = ProductList.querySelector(`div[id="${id}"]`);
    const li = likeItem.querySelector('span');
    li.innerHTML = `${products[id].likes + 1} likes`;
    products[id].likes += 1;
  });
};

export const displayProducts = (products) => {
  const storeContent = document.querySelector('.app_content');
  products.forEach((element) => {
    storeContent.innerHTML += `
         <div id="${element.id}" class="card">
          <div class="card-inner">
            <div class="img_container">
              <img src=${element.image} alt="" />
            </div>
            <div id="infos">
                <div class="title">${element.name}</div>
                <div class="likes">
                ${
  element.likes
    ? '<i class="fa-solid fa-heart"> </i>'
    : '<i class="fa-regular fa-heart"> </i>'
}
                <span>${element.likes} likes </span>
                </div>
            </div>
            
            <button id="comment">Comments</button>
            <button id="refreshs">Reservations</button>
          </div>
        </div>
 `;
  });
};
