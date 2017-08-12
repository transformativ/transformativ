$(document).foundation()
// Variable to hold request
var request;

// Bind to the submit event of our form
$("#foo").submit(function(event){


    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyrf9xFPk_8jNak-9M1-Tyf0rFrA_yTJxTFSO4hfD-9o2wNsK8/exec",
        type: "post",
        data: serializedData
    });


    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        document.getElementById('message').innerHTML = "Thank you for your message! We will get back to you shortly." + "<br><br><a href='./index.html'> Home </a>";
        document.getElementById('smallmessage').innerHTML = "Thank you for your message! We will get back to you shortly." + "<br><br><a href='./index.html'> Home </a>";

    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });



    // Prevent default posting of form
    event.preventDefault();

});


var check = function() {

  var err = 0;



       if (document.getElementById('contactname').value == "") {

         document.getElementById('contactname').style.borderColor = "red";
         err = 1;
       } else {
         document.getElementById('contactname').style.borderColor = "lightgray";
       }

       if (document.getElementById('email').value == "") {

         document.getElementById('email').style.borderColor = "red";
         err = 1;
       } else {
         document.getElementById('email').style.borderColor = "lightgray";
       }

      if (err == 0) {
        $("#foo").submit();
      }

      else {
        document.getElementById('message').innerHTML = "Please fill-in the required fields";
        document.getElementById('smallmessage').innerHTML = "Please fill-in the required fields";
      }

}
