const rootNode = document.getElementById('root');

//Create hash divs
let main = document.createElement('div');
main.id = 'main';

let add = document.createElement('div');
add.id = 'add';

let modify = document.createElement('div');
modify.id = 'modify';

const divs = [main, add, modify];

for(let i = 0; i < divs.length; i++) {
  rootNode.appendChild(divs[i]);
  divs[i].className = 'item';
}

//Create main page
let h1 = document.createElement('h1');
h1.innerHTML = 'Simple TODO application';
main.appendChild(h1);

let addBtn = document.createElement('button');
addBtn.innerHTML = 'Add new task';
main.appendChild(addBtn);
addBtn.className = 'btn';

let message = document.createElement('p');
message.innerHTML = 'TODO is empty';
main.appendChild(message);
message.className = 'message';

let list = document.createElement('ul');
main.appendChild(list);

//Create add page
let h2 = document.createElement('h2');
h2.innerHTML = 'Add task';
add.appendChild(h2);

let input = document.createElement('input');
add.appendChild(input);

let btnWrap = document.createElement('div');
add.appendChild(btnWrap);
btnWrap.className = 'btn-wrap';

let cancelBtn = document.createElement('button');
cancelBtn.innerHTML = 'Cancel';
btnWrap.appendChild(cancelBtn);
cancelBtn.className = 'btn';

let saveBtn = document.createElement('button');
saveBtn.innerHTML = 'Save changes';
btnWrap.appendChild(saveBtn);
saveBtn.className = 'btn';

//Change page
function changeHash(pageHash) {
    let hash = String(pageHash);
    let newItem = document.querySelector(hash);
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }
    newItem.style.display = 'block';
}

window.addEventListener('hashchange', function () {
    changeHash(window.location.hash);
});
window.location.hash = '';
window.location.hash = '#main';

addBtn.addEventListener('click', () => {
  window.location.hash = '#add';
});

cancelBtn.addEventListener('click', () => {
  window.location.hash = '#main';
});

//Add item
saveBtn.addEventListener('click', addItem);

  function addItem() {
      if(input.value === '') {
        return false;
      }

      window.location.hash = '#main';
      location.reload();
      
      let item = {
        text: input.value,
        isDone: false
      }

      if(localStorage.getItem('items') === null) {

        let items = [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      }else {
        let items = JSON.parse(localStorage.getItem('items'));
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items)); 
      }
    }


    if(localStorage.getItem('items') !== null) {
      let items = JSON.parse(localStorage.getItem('items'));
      for(let i = 0; i < items.length; i++) {
        list.innerHTML += '<li><div class="checkbox"></div><h3>' + items[i].text + 
                          '</h3><div class="close"></div></li><br>';
      }
      
      //Remove item
      let removeBtn = document.querySelectorAll('.close');
      for(let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', (e) => {
          let text = e.target.previousSibling.innerHTML;

          if (items[i].text === text) {
            items.splice(items[i].text.indexOf(text), 1);
            localStorage.setItem('items', JSON.stringify(items));
            location.reload();
          }
        });
      }
   

      //Modify item
      let headings = document.querySelectorAll('h3');
      for(let i = 0; i < headings.length; i++) {
        headings[i].addEventListener('click', (e) => {
          let text = e.target.innerHTML;
          window.location.hash = '#add';
          h2.innerHTML = 'Modify item';
          input.value = text;

          saveBtn.removeEventListener('click', addItem);
          saveBtn.addEventListener('click', () => {

            window.location.hash = '#main';
            if (items[i].text === text) {
              items[i].text = input.value;
            }

            localStorage.setItem('items', JSON.stringify(items));
            location.reload();
          });
        });
      }

      //Change checkboxes
      let checkboxes = document.querySelectorAll('.checkbox');
      for(let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', (e) => {
          
          e.target.classList.toggle('done');
          if (e.target.className === 'checkbox done') {
            items[i].isDone = true;
            
          }else if(e.target.className === 'checkbox') {
            items[i].isDone = false;
          }

          localStorage.setItem('items', JSON.stringify(items)); 
        });
      }
      
      //Hide message
      if (JSON.parse(localStorage.getItem('items')).length === 0) {
        message.style.display = 'block';
      }else{
        message.style.display = 'none';
      }

      for(let i = 0; i < items.length; i++) {
        if (items[i].isDone === true) {
          checkboxes[i].className = 'checkbox done';
        }else{
          checkboxes[i].className = 'checkbox';
        } 
      }
    }


  

  
    



