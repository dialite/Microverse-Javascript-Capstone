const countElement = () => {
  const commentContainer = document.querySelector('.result');
  const commentCount = document.querySelector('.total-comments');
  const itemCount = commentContainer.childElementCount;
  commentCount.innerHTML = itemCount;
};

export default countElement;
