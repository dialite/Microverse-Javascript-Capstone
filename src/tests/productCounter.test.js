import countProduct from '../modules/productCounter.js';

describe('Number of items in the home page', () => {
  test('4 element in the page', () => {
    document.body.innerHTML = `
    <div>
    <div id="itemsNumber"></div>
     <div class="app_content">
        <div id="1" class="card"></div>
        <div id="2" class="card"></div>
        <div id="3" class="card"></div>
        <div id="4" class="card"></div>
    </div>
    </div>
  `;
    const counterContainer = document.getElementById('itemsNumber');
    countProduct();
    expect(counterContainer.innerHTML).toBe('4');
  });

  test('Zero element in the page', () => {
    document.body.innerHTML = `
    <div>
        <div id="itemsNumber"></div>
        <div class="app_content">
        </div>
    </div>
  `;
    const counterContainer = document.getElementById('itemsNumber');
    countProduct();
    expect(counterContainer.innerHTML).toBe('0');
  });
});
