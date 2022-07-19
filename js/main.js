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
