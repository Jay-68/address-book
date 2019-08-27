//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
Contact.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
}

//user interface logic
$('#new-contact').submit(function () {
  event.preventDefault();
  let inputFirstName = $('#new-first-name').val();
  let inputLastName = $('#new-last-name').val();
  let newContact = new Contact(inputFirstName, inputLastName);
  $('ul#contacts').append("<span class='contact'>" + newContact.fullName() + "</span>"+"<br>");
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $(".contact").last().click(function () {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
  });
})