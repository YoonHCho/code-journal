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
  // delete below
  $getEntries.className = 'get-entries';
  $noDiv.className = 'no-entries hidden';
  data.view = 'entries';

  // checking toggleView

  // console.log(event);
  // console.log(event.target);

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
    // hideFormShowEntries();
  }

  for (var i = data.entries.length - 1; i >= 0; i--) {
    ulEl.prepend(renderList(data.entries[i]));
  }
}

/* var viewEntries = document.querySelector('.entry-view'); */
var $getEntries = document.querySelector('.get-entries');
var $getForm = document.querySelector('.get-form');
/* viewEntries.addEventListener('click', toggleView); */
var $body = document.querySelector('body');
var $clicker = document.querySelectorAll('.clicker');
$body.addEventListener('click', toggleView);
function toggleView(event) {
  if (event.target.matches('.clicker')) {
    var $dataValue = data.view;
    for (var i = 0; i < $clicker.length; i++) {
      if ($dataValue === $clicker) {
        // console.log($clicker);
      }
    }
    // console.log('event', event);
    // console.log('event.target', event.target);
    /*   var $currentEvent = event.target;  */
    if (event.target.matches('.new-entry')) {
      $getForm.className = 'get-entries';
      $getEntries.className = 'hidden';
      data.view = 'entry-form';
    } else {
      $getForm.className = 'hidden';
      $getEntries.className = 'get-entries';
      data.view = 'entries';
    }
    // console.log('clicker.length: ', $clicker.length);
  }

}

/* var $newEntry = document.querySelector('.new-entry');
$newEntry.addEventListener('click', toggleView); */

/* function toggleView(event) {
  $getForm.className = 'get-entries';
  $getEntries.className = 'hidden';
  data.view = 'entry-form';
} */

// var $container = document.querySelector('.container');
/* var $formView = data.view;
if ($formView === 'entry-form'); */

/* $container.body.addEventListener('click', toggleView);
/* var $view = queryselectorall('.view'); */
/* function toggleView(event) {
  console.log('event: ', event);
  console.log('event.target: ', event.target);
} */

// ************** BELOW IS TEST FOR TGGLEVIEW
/* var $view = document.querySelectorAll('.view');

function toggleView(event) {
  for (var i = 0; i < $view.length; i++) {
    if ($view[i].dataset.view === event.dataset.view) {
      data.view = $view[i];
    } else {
      data.view = $;
    }
  }
} */

/* var $save = document.querySelector('.save');
$save.addEventListener('click', saveEntry);
function saveEntry(event) {
  if (data.entries.length === 0) {
    var $noDiv = document.querySelector('.no-entries');
    var $noEntriesMsg = document.createElement('p');
    $noEntriesMsg.textContent = 'No entries have been recorded.';
    $noDiv.appendChild($noEntriesMsg);
  }
  console.log('YOU ARE INSIDE THE SAVE BUTTON FUNCTION');
  $getForm.className = 'hidden';
  $getEntries.className = 'get-entries';
} */
