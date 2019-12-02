/**********************************************
    Dynamic field handler for the forms
**********************************************/

// insurance health
$(document).ready(function() {
  var maxField = 6; //Input fields increment limitation
  var addButton = $(".add_button4"); //Add button selector
  var wrapper = $(".insurance"); //Input field wrapper
  var fieldHTML =
    '<div class="row no-gutters"><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr" ></div></div><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class=" form-control datepicker" id="usr" ></div></div><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr"></div></div><div class="col-1"> <a class="btn btn-danger remove_button" href="javascript:void(0);"> - </a></div></div>'; //New input field html
  var x = 1; //Initial field counter is 1

  //Once add button is clicked
  $(addButton).click(function() {
    //Check maximum number of input fields
    if (x < maxField) {
      x++; //Increment field counter
      $(wrapper).append(fieldHTML); //Add field html
    }
  });

  //Once remove button is clicked
  $(wrapper).on("click", ".remove_button", function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .parent()
      .remove(); //Remove field html
    x--; //Decrement field counter
  });
});

//  reference
$(document).ready(function() {
  var maxField = 6; //Input fields increment limitation
  var addButton = $(".add_button3"); //Add button selector
  var wrapper = $(".reference"); //Input field wrapper
  var fieldHTML =
    '<div class="row no-gutters"><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr" ></div></div><div class="col"><div class="form-group"> <textarea name="field_name[]" class="form-control" rows="1" id="adress"></textarea></div></div><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr"></div></div><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr"></div></div><div class="col-1"> <a class="btn btn-danger remove_button" href="javascript:void(0);"> - </a></div></div>'; //New input field html
  var x = 1; //Initial field counter is 1

  //Once add button is clicked
  $(addButton).click(function() {
    //Check maximum number of input fields
    if (x < maxField) {
      x++; //Increment field counter
      $(wrapper).append(fieldHTML); //Add field html
    }
  });

  //Once remove button is clicked
  $(wrapper).on("click", ".remove_button", function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .parent()
      .remove(); //Remove field html
    x--; //Decrement field counter
  });
});

//  experince
$(document).ready(function() {
  var maxField = 6; //Input fields increment limitation
  var addButton = $(".add_button2"); //Add button selector
  var wrapper = $(".expericence"); //Input field wrapper
  var fieldHTML =
    '<div class="row no-gutters"><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class=" datepicker form-control" id="usr" placeholder="MM/YY"></div></div><div class="col-1"><div class="form-group"> <input name="field_name[]" type="text" class="datepicker form-control" id="usr" placeholder="MM/YY"></div></div><div class="col-2"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr"></div></div><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr"></div></div><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr"></div></div><div class="col-2"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr"></div></div><div class="col-1"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr"></div></div><div class="col-1"> <a class="btn btn-danger remove_button" href="javascript:void(0);"> - </a></div></div>'; //New input field html
  var x = 1; //Initial field counter is 1

  //Once add button is clicked
  $(addButton).click(function() {
    //Check maximum number of input fields
    if (x < maxField) {
      x++; //Increment field counter
      $(wrapper).append(fieldHTML); //Add field html
    }
  });

  //Once remove button is clicked
  $(wrapper).on("click", ".remove_button", function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .parent()
      .remove(); //Remove field html
    x--; //Decrement field counter
  });
});

// qualification
$(document).ready(function() {
  var maxField = 6; //Input fields increment limitation
  var addButton = $(".add_button"); //Add button selector
  var wrapper = $(".qulaification_wraper"); //Input field wrapper
  var fieldHTML =
    '<div class="row no-gutters"><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class="datepicker form-control" id="usr" placeholder="MM/YY"></div></div><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class="datepicker form-control" id="usr" placeholder="MM/YY"></div></div><div class="col-3"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr" ></div></div><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr" ></div></div><div class="col"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr" ></div></div><div class="col-2"><div class="form-group"> <input name="field_name[]" type="text" class="form-control" id="usr" ></div></div><div class="col"> <a class="btn btn-danger remove_button" href="javascript:void(0);"> - </a></div></div>'; //New input field html
  var x = 1; //Initial field counter is 1

  //Once add button is clicked
  $(addButton).click(function() {
    //Check maximum number of input fields
    if (x < maxField) {
      x++; //Increment field counter
      $(wrapper).append(fieldHTML); //Add field html
    }
  });

  //Once remove button is clicked
  $(wrapper).on("click", ".remove_button", function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .parent()
      .remove(); //Remove field html
    x--; //Decrement field counter
  });
});

// Gratuity tab: Declearation witness
$(document).ready(function () {
  var maxField = 6; //Input fields increment limitation
  var addButton = $('.addWitness'); //Add button selector
  var wrapper = $('.witnessWrapper'); //Input field wrapper
  var fieldHTML =
      '<div class="row no-gutters"><div class="col-4"><div class="form-group"> <input type="text" class="form-control"></div></div><div class="col-4"><div class="form-group"><textarea class="form-control" rows="1"></textarea></div></div><div class="col-1"> <a href="javascript:void(0);" class="btn btn-danger removeWitness">-</a></div></div>'; //New input field html 
  var x = 1; //Initial field counter is 1

  //Once add button is clicked
  $(addButton).click(function () {
      //Check maximum number of input fields
      if (x < maxField) {
          x++; //Increment field counter
          $(wrapper).append(fieldHTML); //Add field html
      }
  });

  //Once remove button is clicked
  $(wrapper).on('click', '.removeWitness', function (e) {
      e.preventDefault();
      $(this).parent().parent().remove(); //Remove field html
      x--; //Decrement field counter
  });
});

// Gratuity tab: Nominee Wrapper
$(document).ready(function () {
  var maxField = 6; //Input fields increment limitation
  var addButton = $('.addNominee'); //Add button selector
  var wrapper = $('.nomineeWrapper'); //Input field wrapper
  var fieldHTML =
      '<div class="row no-gutters"><div class="col"><div class="form-group"> <input type="text" class="form-control"></div></div><div class="col"><div class="form-group"> <input type="text" class="form-control"></div></div><div class="col"><div class="form-group"> <select name="" id="" class="form-control"><option value="">Relation 1</option><option value="">Relation 2</option> </select></div></div><div class="col"><div class="form-group"> <input type="text" class="form-control"></div></div><div class="col"><div class="form-group"> <input type="text" class="form-control"></div></div><div class="col-1"><div class="form-group"> <a href="javascript:void(0);" class="btn btn-danger removeNominee">-</a></div></div></div>'; //New input field html 
  var x = 1; //Initial field counter is 1

  //Once add button is clicked
  $(addButton).click(function () {
      //Check maximum number of input fields
      if (x < maxField) {
          x++; //Increment field counter
          $(wrapper).append(fieldHTML); //Add field html
      }
  });

  //Once remove button is clicked
  $(wrapper).on('click', '.removeNominee', function (e) {
      e.preventDefault();
      $(this).parent().parent().parent().remove(); //Remove field html
      x--; //Decrement field counter
  });
});