/* eslint-disable */

// truncate file name
function truncate(n, len) {
  var ext = n.substring(n.lastIndexOf(".") + 1, n.length).toLowerCase();
  var filename = n.replace('.' + ext,'');
  if(filename.length <= len) {
      return n;
  }
  filename = filename.substr(0, len) + (n.length > len ? '..' : '');
  return filename + '.' + ext;
};

document.addEventListener('DOMContentLoaded', function() {
  // check if on thankyou page
  document.addEventListener('touchstart', {});
  if (document.querySelectorAll('p').length) {
    pEl = document.querySelectorAll('p')[0];
    pEl.innerHTML = 'YOUR GRANT APPLICATION HAS BEEN SUBMITTED, GOOD LUCK!';
    pEl.classList.add('submitted');
  } else {
    // assign Vars
    var labelEL = document.querySelectorAll('[for="edit-submitted-file-upload"]')[0];
    var labelVal = labelEL.innerHTML;
    var inputEl = document.getElementById('edit-submitted-file-upload');
    // add custom text and SVG icon to label
    labelEL.innerHTML = '<span>Select a file (must be a PDF under 5mb)</span><svg width="25" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" stroke="#FFF" fill-rule="evenodd"><path d="M18.275 19.875c-.3 0-.575.25-.575.575v1.6c0 .175-.125.3-.3.3h-15a.289.289 0 0 1-.3-.3V2.425c0-.175.125-.3.3-.3h15c.175 0 .3.125.3.3v1.55c0 .3.25.575.575.575.3 0 .575-.25.575-.575v-1.55c0-.8-.65-1.425-1.425-1.425h-15C1.625 1 1 1.65 1 2.425v19.6c0 .8.65 1.425 1.425 1.425h15c.8 0 1.425-.65 1.425-1.425v-1.6c-.025-.3-.275-.55-.575-.55" stroke-width=".5"></path><path d="M14.275 5.6h-8.75c-.3 0-.575.25-.575.575 0 .325.25.575.575.575h8.75c.3 0 .575-.25.575-.575a.566.566 0 0 0-.575-.575M14.275 9.65h-8.75c-.3 0-.575.25-.575.575 0 .3.25.575.575.575h8.75c.3 0 .575-.25.575-.575a.566.566 0 0 0-.575-.575M14.275 13.675h-8.75c-.3 0-.575.25-.575.575 0 .325.25.575.575.575h8.75c.3 0 .575-.25.575-.575a.566.566 0 0 0-.575-.575M14.275 17.7h-8.75c-.3 0-.575.25-.575.575 0 .3.25.575.575.575h8.75c.3 0 .575-.25.575-.575 0-.3-.25-.575-.575-.575" stroke-width=".5"></path><path d="M24.15 8.3c-.3 0-.575.25-.575.575v5.6c0 1.55-1.25 2.8-2.8 2.8-1.55 0-2.8-1.25-2.8-2.8V8.85a1.675 1.675 0 0 1 3.35 0v5.625c0 .3-.25.55-.55.55-.3 0-.55-.25-.55-.55V8.85c0-.3-.25-.575-.575-.575-.3 0-.575.25-.575.575v5.625c0 .925.75 1.7 1.7 1.7s1.7-.75 1.7-1.7V8.85c0-1.55-1.25-2.8-2.8-2.8-1.55 0-2.825 1.25-2.825 2.8v5.625a3.931 3.931 0 0 0 3.925 3.925c2.15 0 3.95-1.75 3.95-3.925V8.85c0-.3-.25-.55-.575-.55" stroke-width=".25"></path></g></svg>';
    // update upload input text
    var uploadBtnEl = document.getElementById('edit-submitted-file-upload-button');
    if(uploadBtnEl) { uploadBtnEl.value = 'Upload now' }
    // add SVG icon to form submit button
    document.getElementsByClassName('webform-submit')[0].insertAdjacentHTML('afterend','<svg width="44" height="14" xmlns="http://www.w3.org/2000/svg"><g stroke="#00AD20" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M0 7.2h42.232M36.379 12.857L42.036 7.2l-5.657-5.657"/></g></svg>');
    if (inputEl) {
      // add "selected" filename to label
      inputEl.addEventListener('change', function(e) {
        var fileName = '';
        fileName = e.target.value.split('\\').pop();
        if (fileName) {
          labelEL.innerHTML = '<span class="file-selected">'+truncate(fileName, 26)+'</span><svg width="28" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd"><path stroke-width="2" d="M17.49 12.364l2.828 2.828 6.364-6.364"/><g fill="#FFF" stroke-width=".5"><path d="M18.275 19.875c-.3 0-.575.25-.575.575v1.6c0 .175-.125.3-.3.3h-15a.289.289 0 0 1-.3-.3V2.425c0-.175.125-.3.3-.3h15c.175 0 .3.125.3.3v1.55c0 .3.25.575.575.575.3 0 .575-.25.575-.575v-1.55c0-.8-.65-1.425-1.425-1.425h-15C1.625 1 1 1.65 1 2.425v19.6c0 .8.65 1.425 1.425 1.425h15c.8 0 1.425-.65 1.425-1.425v-1.6c-.025-.3-.275-.55-.575-.55"/><path d="M14.275 5.6h-8.75c-.3 0-.575.25-.575.575 0 .325.25.575.575.575h8.75c.3 0 .575-.25.575-.575a.566.566 0 0 0-.575-.575M14.275 9.65h-8.75c-.3 0-.575.25-.575.575 0 .3.25.575.575.575h8.75c.3 0 .575-.25.575-.575a.566.566 0 0 0-.575-.575M14.275 13.675h-8.75c-.3 0-.575.25-.575.575 0 .325.25.575.575.575h8.75c.3 0 .575-.25.575-.575a.566.566 0 0 0-.575-.575M14.275 17.7h-8.75c-.3 0-.575.25-.575.575 0 .3.25.575.575.575h8.75c.3 0 .575-.25.575-.575 0-.3-.25-.575-.575-.575"/></g></g></svg>';
        } else {
          labelEL.innerHTML = labelVal;
        }
      })
      // add focus styles
      inputEl.addEventListener('focusin', function() {
        labelEL.classList.add('focused');
      });
      inputEl.addEventListener('focusout', function() {
        labelEL.classList.remove('focused');
      });
    } else {
      // add "uploaded" filename to label
      var fileName = document.getElementsByClassName('form-managed-file')[0].querySelector('a').innerHTML;
      if (fileName) labelEL.innerHTML = '<span class="file-selected">'+truncate(fileName, 26)+'</span><svg width="28" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd"><path stroke-width="2" d="M17.49 12.364l2.828 2.828 6.364-6.364"/><g fill="#FFF" stroke-width=".5"><path d="M18.275 19.875c-.3 0-.575.25-.575.575v1.6c0 .175-.125.3-.3.3h-15a.289.289 0 0 1-.3-.3V2.425c0-.175.125-.3.3-.3h15c.175 0 .3.125.3.3v1.55c0 .3.25.575.575.575.3 0 .575-.25.575-.575v-1.55c0-.8-.65-1.425-1.425-1.425h-15C1.625 1 1 1.65 1 2.425v19.6c0 .8.65 1.425 1.425 1.425h15c.8 0 1.425-.65 1.425-1.425v-1.6c-.025-.3-.275-.55-.575-.55"/><path d="M14.275 5.6h-8.75c-.3 0-.575.25-.575.575 0 .325.25.575.575.575h8.75c.3 0 .575-.25.575-.575a.566.566 0 0 0-.575-.575M14.275 9.65h-8.75c-.3 0-.575.25-.575.575 0 .3.25.575.575.575h8.75c.3 0 .575-.25.575-.575a.566.566 0 0 0-.575-.575M14.275 13.675h-8.75c-.3 0-.575.25-.575.575 0 .325.25.575.575.575h8.75c.3 0 .575-.25.575-.575a.566.566 0 0 0-.575-.575M14.275 17.7h-8.75c-.3 0-.575.25-.575.575 0 .3.25.575.575.575h8.75c.3 0 .575-.25.575-.575 0-.3-.25-.575-.575-.575"/></g></g></svg>';
      else labelEL.innerHTML = labelVal;
      document.getElementsByClassName('file')[0].style.display = 'none';
    }
    // upload field validation 
    var uploadSubmittedHidden = document.getElementsByName('submitted[file][fid]');
    if (document.getElementsByClassName('ErrorLabel').length > 0 && uploadSubmittedHidden[0].value == 0) {
      var uploadErrorEl = document.createElement('div');
      uploadErrorEl.classList.add('EditingFormErrorLabel');
      var uploadErrorMessage = ' There was a problem uploading your file. Please select your application PDF and try again.';
      document.getElementsByClassName('webform-component--file')[0].insertAdjacentElement('afterend', uploadErrorEl);
      uploadErrorEl.innerHTML = uploadErrorMessage;
    }
  }
});
