var photoURL = document.querySelector('#photo-url');
photoURL.addEventListener('input', displayImage);
var image = document.querySelector('img');

function displayImage(event) {
  image.setAttribute('src', event.target.value);
}

var formEntry = document.querySelector('#form-journal');
formEntry.addEventListener('submit', submitEntry);

function submitEntry(event) {
  event.preventDefault();
  var entryObj = {};

  entryObj.title = formEntry.elements.title.value;
  entryObj.photoUrl = formEntry.elements['photo-url'].value;
  entryObj.notes = formEntry.elements.notes.value;
  entryObj.entryId = data.nextEntryId;
  data.nextEntryId += 1;
  data.entries.unshift(entryObj);
  image.setAttribute('src', 'images/placeholder-image-square.jpg');
  formEntry.reset();
}

// need to add entry as parameter
// function renderList(entry) {
//   var liEl = document.createElement('li');
//   liEl.setAttribute('class', 'row margin-b40');

//   var divImg = document.createElement('div');
//   divImg.setAttribute('class', 'column-full column-half');
//   liEl.appendChild(divImg);

//   var viewImg = document.createElement('img');
//   //  this will be the data.entries[i].photoUrl the loop--
//   viewImg.setAttribute('src', 'https://www.planetware.com/wpimages/2019/06/south-korea-top-tourist-attractions-itaewon.jpg');
//   divImg.appendChild(viewImg);

//   var divText = document.createElement('div');
//   divText.setAttribute('class', 'column-full column-half');
//   liEl.appendChild(divText);

//   var h3Title = document.createElement('h3');
//   //  this will be the data.entries[i]. the loop--
//   h3Title.textContent = data.entries[5].title;
//   divText.appendChild(h3Title);

//   var paraNotes = document.createElement('p');
//   //  this will be the data.entries[i]. the loop--
//   paraNotes.textContent = data.entries[5].notes;
//   divText.appendChild(paraNotes);

//   console.log('liEl: ', liEl);

// }
