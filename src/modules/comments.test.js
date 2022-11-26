/**
 * @jest-environment jsdom
 */

import countElement from './commentsCounter.js';

test('items counter check ', () => {
  document.body.innerHTML = `
    <div>
    <h4><span class="total-comments">0</span></h4>
     <div class="result">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
  `;
  const select = document.querySelector('.total-comments');
  countElement();

  expect(select.innerHTML).toBe('4');
});

test('items counter check if comments are 3', () => {
  document.body.innerHTML = `
    <div>
    <h4><span class="total-comments">0</span></h4>
     <div class="result">
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
  `;
  const select = document.querySelector('.total-comments');
  countElement();

  expect(select.innerHTML).toBe('3');
});

test('items counter check if comments are 2', () => {
  document.body.innerHTML = `
    <div>
    <h4><span class="total-comments">0</span></h4>
     <div class="result">
        <div></div>
        <div></div>
    </div>
    </div>
  `;
  const select = document.querySelector('.total-comments');
  countElement();

  expect(select.innerHTML).toBe('2');
});
