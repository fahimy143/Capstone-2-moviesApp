const insertCommentModalInfo = (modal, commentmarkup) => {
  const commentcontent = document.querySelector('.commentcontent');
  let commentModalContent = '';
  commentModalContent = commentmarkup(modal);
  commentcontent.innerHTML = commentModalContent;
};

export default insertCommentModalInfo;