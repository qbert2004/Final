function validateForm() {
      var firstName = document.forms["applicationForm"]["first_name"].value;
      if (firstName == "") {
        alert("Please enter your first name.");
        return false;
      }

      var lastName = document.forms["applicationForm"]["last_name"].value;
      if (lastName == "") {
        alert("Please enter your last name.");
        return false;
      }

      var email = document.forms["applicationForm"]["email"].value;
      if (email == "") {
        alert("Please enter your email address.");
        return false;
      }

      var phone = document.forms["applicationForm"]["phone"].value;
      if (phone == "") {
        alert("Please enter your phone number.");
        return false;
      }

      var title = document.forms["applicationForm"]["title"].value;
      if (title == "") {
        alert("Please select your title.");
        return false;
      }

      var maritalStatus = document.forms["applicationForm"]["marital_status"].value;
      if (maritalStatus == "") {
        alert("Please select your marital status.");
        return false;
      }

      var age = document.forms["applicationForm"]["age"].value;
      if (age == "" &&  age < 1 &&  age > 70) {
        alert("Please enter a valid age.");
        return false;
      }

      var birthDate = document.forms["applicationForm"]["birth_date"].value;
      if (birthDate == "") {
        alert("Please enter your date of birth.");
        return false;
      }

      var registrationDate = document.forms["applicationForm"]["registration_date"].value;
      if (registrationDate == "") {
        alert("Please enter your registration date.");
        return false;
      }

      alert("Form submitted successfully!");
      return true;
    }
