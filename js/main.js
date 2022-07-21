var getPhotoURL = document.querySelector('#photo-url');
getPhotoURL.addEventListener('input', displayImage);
var image = document.querySelector('img');
var $entryIdNum;
function displayImage(event) {
  image.setAttribute('src', event.target.value);
}

var formEntry = document.querySelector('#form-journal');
formEntry.addEventListener('submit', submitEntry);
var $noDiv = document.querySelector('.no-entries');

function submitEntry(event) {
  event.preventDefault();
  var entryObj = {};

  // issue 3 = Update the entry form's submit handler function to conditionally add a new entry object or update the existing one.
  if (data.editing !== null) {
    entryObj.title = formEntry.elements.title.value;
    entryObj.photoUrl = formEntry.elements['photo-url'].value;
    entryObj.notes = formEntry.elements.notes.value;
    entryObj.entryId = $entryIdNum;

    // TO REPLACE THE EXISTING WITH THE EDITED ONE
    var $liEl = document.querySelectorAll('li');
    for (var i = 0; i < $liEl.length; i++) {
      if (Number($liEl[i].getAttribute('data-liId')) === entryObj.entryId) {
        $liEl[i].replaceWith(renderList(entryObj));
      }
    }

    for (var k = 0; k < data.entries.length; k++) {
      if (Number(data.entries[k].entryId) === entryObj.entryId) {
        data.entries.splice([k], 1, entryObj);
      }
    }

    data.editing = null;
    image.setAttribute('src', 'images/placeholder-image-square.jpg');

  } else {
    entryObj.title = formEntry.elements.title.value;
    entryObj.photoUrl = formEntry.elements['photo-url'].value;
    entryObj.notes = formEntry.elements.notes.value;
    entryObj.entryId = data.nextEntryId;
    data.nextEntryId += 1;
    data.entries.unshift(entryObj);
    image.setAttribute('src', 'images/placeholder-image-square.jpg');
    ulEl.prepend(renderList(entryObj));
  }

  formEntry.reset();
  $getForm.className = 'hidden';
  $getEntries.className = 'get-entries';
  $noDiv.className = 'no-entries hidden';
  data.view = 'entries';
}

function renderList(entry) {
  var liEl = document.createElement('li');
  liEl.setAttribute('class', 'row margin-b40 align-center');
  liEl.setAttribute('data-liId', entry.entryId);

  var divImg = document.createElement('div');
  divImg.setAttribute('class', 'column-full column-half');
  liEl.appendChild(divImg);

  var viewImg = document.createElement('img');
  viewImg.setAttribute('src', entry.photoUrl);
  divImg.appendChild(viewImg);

  var divText = document.createElement('div');
  divText.setAttribute('class', 'column-full column-half');
  liEl.appendChild(divText);

  var divTitleIcon = document.createElement('div');
  divTitleIcon.setAttribute('class', 'row justify-between-align-center');
  divText.appendChild(divTitleIcon);

  var h3Title = document.createElement('h3');
  h3Title.textContent = entry.title;
  divTitleIcon.appendChild(h3Title);

  // this is where I added the ICON
  var icon = document.createElement('i');
  icon.setAttribute('class', 'fa-solid fa-pen-nib color-purple');
  icon.setAttribute('data-entry-id', entry.entryId);
  divTitleIcon.appendChild(icon);

  var paraNotes = document.createElement('p');
  paraNotes.textContent = entry.notes;
  divText.appendChild(paraNotes);

  return liEl;
}

var ulEl = document.querySelector('.list-none');
window.addEventListener('DOMContentLoaded', loadView);

function loadView(event) {
  if (data.view === 'entry-form') {
    $getForm.className = 'get-entries';
    $getEntries.className = 'hidden';
  } else if (data.view === 'entries') {
    $getForm.className = 'hidden';
    $getEntries.className = 'get-entries';
  }
  if (data.entries.length !== 0) {
    $noDiv.className = 'no-entries hidden';
  }

  for (var i = data.entries.length - 1; i >= 0; i--) {
    ulEl.prepend(renderList(data.entries[i]));
  }
}

var $newEntry = document.querySelector('.new-entry');
$newEntry.addEventListener('click', newEntry);
function newEntry() {
  $getForm.className = 'get-entries';
  $getEntries.className = 'hidden';
  document.querySelector('.edit-heading').textContent = 'New Entry';
  image.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.editing = null;
}
var $view = document.querySelectorAll('.view');
var $getEntries = document.querySelector('.get-entries');
var $getForm = document.querySelector('.get-form');

var $anchors = document.getElementsByTagName('a');
for (var i = 0; i < $anchors.length; i++) {
  $anchors[i].addEventListener('click', toggleView);
}

function toggleView(event) {
  formEntry.reset();
  if (event.target.matches('.clicker')) {
    var $dataValue = event.target.dataset.view;
    for (var i = 0; i < $view.length; i++) {
      if ($view[i].dataset.view === $dataValue) {
        $view[i].classList.remove('hidden');
        data.view = $view[i].dataset.view;
      } else {
        $view[i].classList.add('hidden');
      }
    }
  }
}
// below is for ISSUE 3
var $entryLists = document.querySelector('.entry-lists');
$entryLists.addEventListener('click', entryList);

function entryList(event) {
  if (event.target.matches('.fa-pen-nib')) {
    $getForm.className = 'get-entries';
    $getEntries.className = 'hidden';
    document.querySelector('.edit-heading').textContent = 'Edit Entry';
    // THIS IS WHERE I WILL ADD THE INFO
  }

  $entryIdNum = Number(event.target.getAttribute('data-entry-id'));
  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i].entryId === $entryIdNum) {
      // console.log('inside the if true');
      data.editing = data.entries[i];
      formEntry.elements.title.value = data.editing.title;
      formEntry.elements['photo-url'].value = data.editing.photoUrl;
      image.setAttribute('src', data.editing.photoUrl);
      formEntry.elements.notes.value = data.editing.notes;
    }
  }
  formEntry.addEventListener('submit', submitEntry);
}
