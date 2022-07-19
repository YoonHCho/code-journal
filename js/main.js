var getPhotoURL = document.querySelector('#photo-url');
getPhotoURL.addEventListener('input', displayImage);
var image = document.querySelector('img');

function displayImage(event) {
  image.setAttribute('src', event.target.value);
}

var formEntry = document.querySelector('#form-journal');
formEntry.addEventListener('submit', submitEntry);

function submitEntry(event) {
  event.preventDefault();
  var entryObj = {};

  // add  .value at the end of title photoUrl notes
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
function renderList(entry) {
  var liEl = document.createElement('li');
  liEl.setAttribute('class', 'row margin-b40 align-center');

  var divImg = document.createElement('div');
  divImg.setAttribute('class', 'column-full column-half');
  liEl.appendChild(divImg);

  var viewImg = document.createElement('img');
  viewImg.setAttribute('src', entry.photoUrl);
  divImg.appendChild(viewImg);

  var divText = document.createElement('div');
  divText.setAttribute('class', 'column-full column-half');
  liEl.appendChild(divText);

  var h3Title = document.createElement('h3');
  h3Title.textContent = entry.title;
  divText.appendChild(h3Title);

  var paraNotes = document.createElement('p');
  paraNotes.textContent = entry.notes;
  divText.appendChild(paraNotes);

  return liEl;
}

var ulEl = document.querySelector('.list-none');
window.addEventListener('DOMContentLoaded', loadView);
function loadView() {
  for (var i = data.entries.length - 1; i >= 0; i--) {
    ulEl.prepend(renderList(data.entries[i]));
  }
}

var viewEntries = document.querySelector('.entry-view');

viewEntries.addEventListener('click', hideNewShowEntries);

function hideNewShowEntries(event) {
  /*   var formDataValue = event.target.getAttribute('data-view');
  console.log(formDataValue); */

  var $getForm = document.querySelector('.get-form');
  $getForm.className = 'hidden';
  /*   console.log('$getForm now hides', $getForm); */

  var $getEntries = document.querySelector('.get-entries');
  $getEntries.className = 'get-entries';
}
