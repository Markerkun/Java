const gitHubUsers = "https://api.github.com/users";
const Username = document.getElementById('input');
const btn = document.getElementById('button');

async function  showGitHubUsers()
{
    const response = await fetch(gitHubUsers);
    const json = await response.json();
    console.log(json);
    console.log(`Status : ${response.status}`);
    console.log(json[0].login);
}

btn.onclick =()=> 
{
    console.log(Username.value);    
    showGitHubUserAvatar(Username.value)}


async function showGitHubUserAvatar(login) {
    const response = await fetch(gitHubUsers + '/' + login);
    const result = await response.json();
    console.log(result.avatar_url);
    const avatarImg = document.getElementById('avatar-img');
    avatarImg.src = result.avatar_url;
}