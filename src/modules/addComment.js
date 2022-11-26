const displayComment = (newComment) => {
  const today = new Date().toISOString().slice(0, 10);
  const commentContent = document.querySelector('.result');
  commentContent.innerHTML += `<div>${today} ${newComment.username} : ${newComment.comment}</div>`;
};

const addComment = async (newComment, url) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(displayComment(newComment));
};
export default addComment;
