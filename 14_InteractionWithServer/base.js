const usersDiv = document.getElementById('users');
const tableBody = document.querySelector('#userTable tbody');
const postsDiv = document.getElementById('posts');
const showPostsBtn = document.getElementById('showPostsBtn');

let currentUserId = null;

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        users.forEach(user => {
            const btn = document.createElement('button');
            btn.className = 'user-btn';
            btn.textContent = user.name;
            btn.onclick = () => loadUser(user.id);
            usersDiv.appendChild(btn);
        });
    });

function loadUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(user => {
            currentUserId = user.id;
            showPostsBtn.disabled = false;
            postsDiv.innerHTML = '';

            tableBody.innerHTML = `
                <tr><td>Name:</td><td>${user.name}</td></tr>
                <tr><td>Username:</td><td>${user.username}</td></tr>
                <tr><td>Address:</td><td>${user.address.street}, ${user.address.city}</td></tr>
                <tr><td>Email:</td><td>${user.email}</td></tr>
                <tr><td>Phone:</td><td>${user.phone}</td></tr>
                <tr><td>Website:</td><td>${user.website}</td></tr>
            `;
        });
}

showPostsBtn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${currentUserId}`)
        .then(res => res.json())
        .then(posts => {
            postsDiv.innerHTML = '';
            posts.forEach(post => {
                const div = document.createElement('div');
                div.className = 'post';
                div.innerHTML = `
                    <b>${post.title}</b>
                    <p>${post.body}</p>
                `;
                postsDiv.appendChild(div);
            });
        });
};
