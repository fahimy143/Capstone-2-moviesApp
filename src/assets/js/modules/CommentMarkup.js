const commentMarkup = (comment) => `<div class='comment' id='${comment.id}'>${comment.date} ${comment.name}: ${comment.insight}</div>`;

export default commentMarkup;