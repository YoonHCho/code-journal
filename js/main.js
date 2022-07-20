var getPhotoURL = document.querySelector('#photo-url');
getPhotoURL.addEventListener('input', displayImage);
var image = document.querySelector('img');

function displayImage(event) {
  image.setAttribute('src', event.target.value);
}

var formEntry = document.querySelector('#form-journal');
formEntry.addEventListener('submit', submitEntry);
var $noDiv = document.querySelector('.no-entries');

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
  ulEl.prepend(renderList(entryObj));

  $getForm.className = 'hidden';
  $getEntries.className = 'get-entries';
  $noDiv.className = 'no-entries hidden';
  data.view = 'entries';
}

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

function loadView(event) {
  if (data.view === 'entry-form') {
    $getForm.className = 'get-entries';
    $getEntries.className = 'hidden';
  } else if (data.view === 'entries') {
    $getForm.className = 'hidden';
    $getEntries.className = 'get-entries';
  }

  for (var i = data.entries.length - 1; i >= 0; i--) {
    ulEl.prepend(renderList(data.entries[i]));
  }
}

var $view = document.querySelectorAll('.view');

var $getEntries = document.querySelector('.get-entries');
var $getForm = document.querySelector('.get-form');
// start making changes below  var $body = document.querySelector('body'); was here
var $anchors = document.getElementsByTagName('a');
for (var i = 0; i < $anchors.length; i++) {
  $anchors[i].addEventListener('click', toggleView);
}

/* $aEntries.addEventListener('click', toggleView); */

// below addEventListener was for when from body
// $body.addEventListener('click', toggleView);

// function viewSwapping();

function toggleView(event) {

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
