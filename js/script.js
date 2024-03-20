// Created by: Logan Connors
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  let streetname = document.getElementById("street-name-entered").value
  // get age from text field and cast it to integer
  let streetnumber = parseInt(document.getElementById("street-number-entered").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = " You live at " + streetnumber + " on " + streetname + " street "
}
