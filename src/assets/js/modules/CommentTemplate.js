const commenttemplate = (commentInfo) => `<div class="commenttemplate" id=${commentInfo.id}>
  <div class='cthumbnail'>
    <img class='cimg' src='${commentInfo.link}'/>
  </div>
  <div class='title'>${commentInfo.name}</div>
  <div class='details'>
    <div class='language'>Language: ${commentInfo.language}</div>
    <div class='runtime'>Runtime: ${commentInfo.runtime}s</div>
  </div>

  <div class='commentsection'>
    <h1 class='viewcomments'>Comments(<span class='commentnum'></span>)<h1>
    <div class='commentlist'></div>
  </div>

  <div class='addacomment'>
    <h1 class='commentheader'>Add a comment</h1>
    <input type='text' name='' class='yourname' placeholder='  Your name' value='' id=''>
    <textarea name="" id="" cols="30" class='yourinsight' placeholder='  Your insights' value='' rows="10"></textarea>
  </div>
  <button class='comments1'>Comment</button>
</div>`;

export default commenttemplate;