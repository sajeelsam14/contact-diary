class Contact {
  constructor(firstName, lastName, number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.number = number;
  }
}

class UI {
  addContact(contact) {
    // Add contact in UI
    let tbody = document.getElementById("contact-list");
    let row = document.createElement("tr");

    let trbody =
      "<td>" +
      contact.firstName +
      "</td><td>" +
      contact.lastName +
      "</td><td>" +
      contact.number +
      "</td><td><button class='btn btn-danger btn-sm btn-remove'>&times;</button></td>";
    row.innerHTML = trbody;
    tbody.appendChild(row);
  }

  removeContact(target) {
    // Remove contact from UI
    target.parentElement.parentElement.remove();
  }

  validate(contact) {
    // Validate contact
    if (contact.firstName.length === 0) {
      // show error
      $("#firstName").addClass("is-invalid").removeClass("is-valid");
      return false;
    } else {
      $("#firstName").removeClass("is-invalid").addClass("is-valid");
      // hide error
    }
    if (contact.lastName.length === 0) {
      // show error
      $("#lastName").addClass("is-invalid").removeClass("is-valid");
      return false;
    } else {
      // hide error
      $("#lastName").removeClass("is-invalid").addClass("is-valid");
    }
    if (contact.number.length === 0) {
      $("#number12").addClass("is-invalid").removeClass("is-valid");
      // show error
      return false;
    } else {
      // hide error
      $("#number12").removeClass("is-invalid").addClass("is-valid");
    }

    return true;
  }

  clear() {
    // clear the form
    $("#firstName").val("").removeClass("is-valid");
    $("#lastName").val("").removeClass("is-valid");
    $("#number12").val("").removeClass("is-valid");
  }
}
