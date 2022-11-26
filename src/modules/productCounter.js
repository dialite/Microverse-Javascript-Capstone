const countProduct = () => {
  const productList = document.querySelector('.app_content');
  const count = productList.childElementCount;
  document.getElementById('itemsNumber').innerHTML = count;
};

export default countProduct;