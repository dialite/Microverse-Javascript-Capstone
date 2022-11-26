import NewComment from './newComment.js';
import addComment from './addComment.js';
import countElement from './commentsCounter.js';

const comments = async (product) => {
  const cardsContainer = document.querySelector('.app_container');
  const productList = document.querySelector('.app_content');
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/comments?item_id=${product.id}`;
  const comments = await fetch(url).then((response) => response.json());
  productList.innerHTML += `
        <div class= 'modal-container'>
        <div class="modal" id="exampleModal${product.id}" >
            <div class="modal-content">
              <button class= 'close' type="button">Close</button>
              <div class="modal-body">
                <img src="${product.image}" alt="Sample photo" class="card-image" />
                <h5 class="modal-title" id="exampleModalLabel">${product.name}</h5>
                <h5 class= "comment-head">Add a comment</h5>
                <form class= 'form-content'>
                  <input type="text" class= 'names' id="fname${product.id}" name="${product.id}" placeholder="Your name" autocomplete="off" required>
                  <textarea id="ta${product.id}" class= 'description' name="ta${product.id}" rows="4" cols="50" placeholder="Your insights" required></textarea>
                  <button type="button" class="btn btn-primary btnAddComment">Comment</button>
                </form>
                <h4>Comments(<span class="total-comments">0</span>)</h4>
                <div class= 'result'>
                </div>
              </div>
            </div>
        </div>
      </div>
        `;

  const commentContent = cardsContainer.querySelector('.result');
  comments?.forEach((element) => { commentContent.innerHTML += `<div>${element.creation_date} ${element.username} : ${element.comment}</div>`; });
  countElement();
  cardsContainer.addEventListener('click', (e) => {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/comments`;

    if (e.target.classList.contains('btnAddComment')) {
      if (e.target.parentElement[0].value !== '' && e.target.parentElement[1].value) {
        const username = e.target.parentElement[0].value;
        const comment = e.target.parentElement[1].value;
        const newComment = new NewComment(username, comment, product.id);

        addComment(newComment, url);

        e.target.parentElement[0].value = '';
        e.target.parentElement[1].value = '';
      }
    }
  });
};

export default comments;
