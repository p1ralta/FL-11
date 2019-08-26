// Get Userlist
function getUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  showLoading();
 
  xhr.onload = function() {
    if(this.status == 200){
      const users = JSON.parse(this.responseText);
      let output = '';
      for(const i in users) {
        output += `<li class="user card" id="${users[i].id}">
                     <ul class="list-group bg-light">
                       <li class="list-group-item bg-secondary text-white">${users[i].name}</li>
                       <li class="m-3">
                         <button class="edit btn btn-info">Edit</button>
                         <button class="delete btn btn-danger">Delete</button>
                       </li>
                     </ul>
                  </li>`;
      } 
      document.querySelector('.users-list').innerHTML = output;
      let parentList = document.querySelectorAll('.user');
      for(let i = 0; i < parentList.length; i++) {
        let parent = parentList[i];
        let sibling = parentList[i].firstElementChild;
        addCat(parent, sibling); 
      }  
      hideLoading();
    }
  }
  xhr.onerror = function() {
    console.log('Something went wrong');
    hideLoading();
  }
  xhr.send(null);
}
getUsers();

// Edit User
document.addEventListener('click', editUser);

function editUser(e) {
  const form = document.createElement('form');
  const input = document.createElement('input');
  const saveBtn = document.createElement('input');
  saveBtn.setAttribute('type', 'button');
  saveBtn.value = 'Save';
  saveBtn.className = 'btn btn-primary ml-2';
  form.appendChild(input);
  form.appendChild(saveBtn);

  let currentId = e.target.parentElement.parentElement.parentElement.id;

  const editButtons = document.querySelectorAll('.edit');
  for(let i = 0; i < editButtons.length; i++) {
    if(e.target === editButtons[i] && e.target.nextElementSibling.nextElementSibling === null) {

      e.target.parentElement.appendChild(form);
      saveBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.open('PUT', 'https://jsonplaceholder.typicode.com/users/' + currentId, true);
        showLoading();
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                const userInfo = JSON.parse(xhr.responseText);
                if(userInfo.name === '') {
                  alert('Write Name');
                } else{
                  e.target.parentElement.parentElement.previousElementSibling.innerHTML = userInfo.name;
                }
                e.target.parentElement.parentElement.removeChild(form);
            }
            hideLoading();
        }
        xhr.onerror = function() {
          console.log('Something went wrong');
          hideLoading();
        }
        xhr.send(JSON.stringify({
          name: input.value
        }));
      });
    }
  }
}

// Delete User
document.addEventListener('click', deleteUser);
function deleteUser(e) {
  let currentId = e.target.parentElement.parentElement.parentElement.id;
  const deleteButtons = document.querySelectorAll('.delete');
  for(let i = 0; i < deleteButtons.length; i++) {
    if(e.target === deleteButtons[i]) {
     
      const xhr = new XMLHttpRequest();
      xhr.open("DELETE", 'https://jsonplaceholder.typicode.com/posts/' + currentId, true);
      showLoading();
      xhr.onload = function () {
        const users = JSON.parse(xhr.responseText);
        if ( xhr.status == 200) {
          console.log(users);
        } else {
          console.error(users);
        }
        hideLoading();
      }
      xhr.onerror = function() {
        console.log('Something went wrong');
        hideLoading();
      }
      xhr.send(null);
    }
  }
}

// Redirect to Posts
document.addEventListener('click', redirect);

function redirect(e) {
  const userNames = document.querySelectorAll('.list-group-item');
  for(let i = 0; i < userNames.length; i++) {
     if(e.target === userNames[i]) {

      document.querySelector('.container').style.display = 'none';

      const xhr = new XMLHttpRequest();
      let id = e.target.parentElement.parentElement.id;
      xhr.open('GET','https://jsonplaceholder.typicode.com/posts/' + id, true);
      showLoading();
      xhr.onload = function() {
        if(xhr.status == 200) {
          const post = JSON.parse(xhr.responseText);
          let outputPost = `
                        <div class="container" style="text-alight: center;position: relative">
                          <h3 class="display-4">Post ${id}</h3>
                          <ul class="list-group">
                            <li class="list-group-item bg-primary post-header">${post.title}</li>
                            <li class="list-group-item post-item">${post.body}</li>
                          </ul>
                          <button class="back-button btn btn-success">Back</button>
                        </div>
                        `;        
          document.body.innerHTML = outputPost;
          document.querySelector('.back-button').addEventListener('click', () => {
            window.location.reload();
          });
        }
        const xhr2 = new XMLHttpRequest();
        xhr2.open('GET','https://jsonplaceholder.typicode.com/comments?postId=' + id, true);
        xhr2.onload = function() {
          const comments = JSON.parse(xhr2.responseText);
          for(let i in comments) {
            let outputComments = '';
            outputComments += `'
                                <li class="list-group-item list-group-item-dark">
                                  <p class="comment">Name: ${comments[i].name}</p>
                                  <p class="comment">Email: ${comments[i].email}</p>
                                  <p>${comments[i].body}</p>
                                </li>
                              `;
            const list = document.createElement('ul');
            list.className = 'list-group';
            list.innerHTML = outputComments;
            document.querySelector('.container').appendChild(list);
          }
        }
        xhr2.onerror = function() {
          console.log('Something went wrong');
          hideLoading();
        }
        xhr2.send(null)
      }
      xhr.onerror = function() {
        console.log('Something went wrong');
        hideLoading();
      }
      xhr.send(null);
     }
  }
}

// Add Cats
function addCat(parent, sibling) {
  fetch('https://api.thecatapi.com/v1/images/search', {
    headers: {"x-api-key": "b441444d-c64c-4c35-997d-ee59f946f2c2"}
  })
  .then(response => response.json())
  .then((json) => {
   let img = document.createElement('img');
   img.setAttribute('src', json[0].url);
   img.classList = 'cat';
   parent.insertBefore(img, sibling);

   let width = window.getComputedStyle(img,null).getPropertyValue("width");
   img.style.height = width;
  })
  .catch((err) => console.log(err))
}

// Toggle Spinner
function showLoading() {
  document.querySelector('.spinner').style.display = 'block';
  document.querySelector('.container').style.display = 'none';
}

function hideLoading() {
  document.querySelector('.spinner').style.display = 'none';
  document.querySelector('.container').style.display = 'block';
}





