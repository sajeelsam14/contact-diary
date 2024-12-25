$("#addContact").on("submit", (e) => {
  e.preventDefault();
  let firstName = $("#firstName").val();
  let lastName = $("#lastName").val();
  let number = $("#number12").val();

  let contact = new Contact(firstName, lastName, number);
  let ui = new UI();
  let isValid = ui.validate(contact);
  if (isValid) {
    ui.addContact(contact);
    ui.clear();
  }
});

$("#contact-list").click((e) => {
  if (e.target.classList.contains("btn-remove")) {
    let ui = new UI();
    ui.removeContact(e.target);
  }
});
