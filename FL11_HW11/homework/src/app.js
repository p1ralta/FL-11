let rootNode = document.getElementById('root');
let count = 0;
let ten = 10;

//Create elements
let form = document.createElement('form');
let list = document.createElement('ul');
let header = document.createElement('h1');
let input = document.createElement('input');
let button = document.createElement('button');
let hr = document.createElement('hr');

//Append elements
header.innerHTML = 'TODO Cat List';
rootNode.appendChild(header);
rootNode.appendChild(form);
rootNode.appendChild(hr);
rootNode.appendChild(list);
form.appendChild(input);
form.appendChild(button);

button.innerHTML = '<i class="material-icons">add</i>';
button.setAttribute('type', 'submit');
input.setAttribute('placeholder', 'Add new action');

button.disabled = true;

//Empty value validation
input.addEventListener('input', function () {
      if (input.value !== ''){
          button.disabled = false;
      }else{
        button.disabled = true;
      }
  });

  //Add new elements
  form.addEventListener('submit', (e) => {

    if (count < ten) {
      e.preventDefault();
      let item = document.createElement('li');
      let itemContent = document.createElement('div');
      let label = document.createElement('label');
      let checkbox = document.createElement('input');
      let edit = document.createElement('button');
      let del = document.createElement('button');
      
      checkbox.setAttribute('type', 'checkbox');

      item.draggable = true;

      item.appendChild(itemContent);
      itemContent.appendChild(label);
      itemContent.appendChild(edit);
      itemContent.insertBefore(checkbox, label);
      item.appendChild(del);

    
      edit.innerHTML = '<i class="material-icons">edit</i>';
      del.innerHTML = '<i class="material-icons">delete</i>';
      edit.className = 'edit';
      del.className = 'del';
      label.innerHTML = input.value;

      //Unchecked checkbox
      checkbox.addEventListener('change', () => {
        if(checkbox.checked === false) {
              checkbox.checked = true; 
          }else {
              if(checkbox.checked === true) {
                  checkbox.checked = true; 
              }   
          }
      })

      //Edit value
      edit.addEventListener('click', () => {
        let editInput = document.createElement('input');
        let saveBtn = document.createElement('button');
        saveBtn.innerHTML = '<i class="material-icons">save</i>';
        editInput.className = 'edit-input';
        saveBtn.className = 'save-btn';

        item.removeChild(itemContent);
        item.removeChild(del);
        item.appendChild(editInput);
        item.appendChild(saveBtn);
        item.style.justifyContent = 'flex-start';

        editInput.value = label.innerHTML;
        saveBtn.addEventListener('click', () => {
          item.removeChild(saveBtn);
          item.removeChild(editInput);
          item.appendChild(itemContent);
          item.appendChild(del);
          item.style.justifyContent = 'space-between';
          
          label.innerHTML = editInput.value;
        });

      });

      //Delete elements
      del.addEventListener('click', () => {
        list.removeChild(item);
        count--;
      });

      list.appendChild(item);
      count++;
      
      //Maximum list warning
      if (count > ten-1) {
        button.disabled = true;
        input.disabled = true;
        let output = document.createElement('div');
        rootNode.insertBefore(output, form);
        output.innerHTML = 'Maximum item per list are created';
      }
    }
  });

//Drag and Drop 
let start;

list.addEventListener('dragover', (e) => {
  e.preventDefault();
});

list.addEventListener('dragstart', (e) => {
  let targetStart = e.target;
  while (targetStart.tagName !== 'LI') {
    targetStart = targetStart.parentNode;
  }
  start = targetStart;
});

list.addEventListener('dragenter', (e) => {
  let targetEnd = e.target;
  while (targetEnd.tagName !== 'LI') {
    targetEnd = targetEnd.parentNode;
  }
  if (targetEnd.parentNode.lastChild === targetEnd) {
    targetEnd.parentNode.insertBefore(start, targetEnd.nextSibling);
    return false;
  }
    targetEnd.parentNode.insertBefore(start, targetEnd);
});

