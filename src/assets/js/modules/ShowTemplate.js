const showtemplate = (show) => `<div class="show" id=${show.id}>
  <div class='thumbnail'>
    <img class='img' src='${show.imgUrl}'/>
  </div>
  <div class='info'>
    <div class='showtitle'>${show.title}</div>
    <div class='lovelogo'><img src="https://img.icons8.com/ios/50/000000/filled-like.png" class='logo'/></div>
  </div>
  <div class='likesinfo'>
    <div class='likes'><span class='likesnum'></span> likes</div>
  </div>

  <button class='comments'>Comments</button>
</div>

</div>`;

export default showtemplate;