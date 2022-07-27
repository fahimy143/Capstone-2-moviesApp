import insertCommentModalInfo from './InsertCommentContent.js';
import commenttemplate from './CommentTemplate.js';
import CommentModal from './CommentModal.js';
import Comment from './Comment.js';
import commentMarkup from './CommentMarkup.js';
import formatDate from './Date.js';

class GrabUserInput {
  openComment = (e) => {
    e.preventDefault();
    const showId = e.target.parentElement.id;
    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));
    let commentModal;
    tvStorage.shows.forEach((element) => {
      if (Number(showId) === element.id) {
        commentModal = new CommentModal(
          element.id,
          element.name,
          element.image.medium,
          element.language,
          element.runtime,
        );
      }
    });
    const modal = document.getElementById('myModal');
    insertCommentModalInfo(commentModal, commenttemplate);
    const commentNum = document.querySelector('.commentnum');
    if (tvStorage.comments.length === 0) {
      commentNum.innerHTML = 0;
    } else {
      let existingComment = '';
      const commentList = document.querySelector('.commentlist');
      let counter = 0;
      tvStorage.comments.forEach((element) => {
        if (showId === element.id) {
          existingComment += commentMarkup(element);
          counter += 1;
        }
      });
      commentList.innerHTML = existingComment;
      commentNum.innerHTML = counter;
    }
    const makeAComment = document.querySelector('.comments1');
    makeAComment.onclick = this.comment;
    modal.style.display = 'block';
  }

  closeComment = (e) => {
    e.preventDefault();
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  like = (e) => {
    e.preventDefault();
    const itemid = e.target.parentElement.parentElement.parentElement.id;
    const likeElement = e.target.parentElement.parentElement
      .parentElement.children[2].children[0].children[0];
    let likenum = Number(likeElement.innerHTML);
    likenum += 1;
    likeElement.innerHTML = likenum;

    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));
    tvStorage.likes.forEach((element) => {
      if (Number(itemid) === element.likeid) {
        element.likes = likenum;
      }
    });
    localStorage.setItem('tvapp', JSON.stringify(tvStorage));
  }

  comment = (e) => {
    e.preventDefault();
    const { id } = e.target.parentElement;
    const name = document.querySelector('.yourname');
    const insight = document.querySelector('.yourinsight');
    const namevalue = name.value;
    const insightvalue = insight.value;
    if (!namevalue || !insightvalue) {
      return;
    }
    name.value = '';
    insight.value = '';
    const date = formatDate(new Date());
    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));
    const newlyCreatedComment = new Comment(id, date, namevalue, insightvalue);

    const newlyCreatedCommentMarkup = commentMarkup(newlyCreatedComment);
    const commentList = document.querySelector('.commentlist');
    let content = commentList.innerHTML;
    content += newlyCreatedCommentMarkup;
    commentList.innerHTML = content;
    tvStorage.comments.push(newlyCreatedComment);
    const commentNum = document.querySelector('.commentnum');
    let counter = 0;
    tvStorage.comments.forEach((element) => {
      if (id === element.id) {
        counter += 1;
      }
    });
    commentNum.innerHTML = counter;
    localStorage.setItem('tvapp', JSON.stringify(tvStorage));
  }
}

const grabInput = new GrabUserInput();
export default grabInput;