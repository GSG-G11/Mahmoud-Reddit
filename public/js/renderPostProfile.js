const postContainer = document.querySelector('.post-container');
const postForm = document.querySelector('#post-form');
const postInput = document.querySelector('.post-input');
const imgInput = document.querySelector('.img-input');
const logOut = document.querySelector('.logout');
const profileName = document.querySelector('.profile-name');

const renderPostHome = ((posts) => {
  posts.forEach((post) => {
    const postCard = document.createElement('div');

    const votes = document.createElement('div');
    const voteUpBtn = document.createElement('button');
    const voteUpIcone = document.createElement('i');
    const voteCounter = document.createElement('span');
    const voteDownBtn = document.createElement('button');
    const voteDownIcone = document.createElement('i');

    const postDiv = document.createElement('div');
    const userContainer = document.createElement('div');
    const userImg = document.createElement('img');
    const userName = document.createElement('span');
    const postTime = document.createElement('span');

    const postContent = document.createElement('p');
    const postImg = document.createElement('img');
    const deleteBtn = document.createElement('button');

    postCard.setAttribute('class', 'post-card');
    votes.setAttribute('class', 'votes');
    voteUpBtn.setAttribute('class', 'up');
    voteUpIcone.setAttribute('class', 'fa-solid fa-angle-up');
    voteCounter.setAttribute('class', 'count');
    voteDownBtn.setAttribute('class', 'down');
    voteDownIcone.setAttribute('class', 'fa-solid fa-chevron-down');

    postDiv.setAttribute('class', 'post');
    userContainer.setAttribute('class', 'user');
    userImg.setAttribute('class', 'user-img');
    userImg.setAttribute('alt', 'userimg');
    userName.setAttribute('class', 'username');
    postTime.setAttribute('class', 'time');

    postContent.setAttribute('class', 'post-content');
    postImg.setAttribute('class', 'post-img');
    postImg.setAttribute('alt', 'post-img');
    deleteBtn.setAttribute('class', 'delete-btn');

    postContainer.appendChild(postCard);
    postCard.appendChild(votes);
    votes.appendChild(voteUpBtn);
    voteUpBtn.appendChild(voteUpIcone);
    votes.appendChild(voteCounter);
    votes.appendChild(voteDownBtn);
    voteDownBtn.appendChild(voteDownIcone);

    postCard.appendChild(postDiv);
    postDiv.appendChild(userContainer);
    userContainer.appendChild(userImg);
    userContainer.appendChild(userName);
    userContainer.appendChild(postTime);

    postDiv.appendChild(postContent);
    postDiv.appendChild(postImg);
    postDiv.appendChild(deleteBtn);
    profileName.textContent = `Hi ${post.username}`;
    voteCounter.textContent = '200K';
    userImg.src = './assests/user-img.webp';
    userName.textContent = post.username;
    postTime.textContent = post.posttime;

    postContent.textContent = post.post;
    postImg.src = post.postimg;
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.id = post.id;

    deleteBtn.addEventListener('click', () => {
      const { id } = deleteBtn;

      fetch(`/delete/${id}`, {
        method: 'delete',

      })
        .then(() => {
          postCard.remove();
        });
    });
  });
});

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('/post', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

      post: postInput.value,
      postTime: new Date(),
      postImg: imgInput.value,

    }),

  }).then(() => window.location.reload());
});

logOut.addEventListener('click', () => {
  fetch('/logout').then(window.location.assign('/'));
});

fetch('/profileRender', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },

}).then((res) => res.json())
  .then((data) => {
    renderPostHome(data);
  });
