const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

//Add task
$add.click(function(e) {
  e.preventDefault();
  $list.append(`<li class='item'>
    <span class='item-text'>${$input.val()}</span>
    <button class="item-remove">Remove</button>
  </li>`)
  
});

//Remove task
$('.list').on('click', '.item-remove', function () {
  $(this).parent().remove();
});

//Complete task
$('.list').on('click','.item-text', function(){
  if ($(this).hasClass('done')) 
  {
    $(this).removeClass('done');
  } else {
    $(this).addClass('done');
  }
});
