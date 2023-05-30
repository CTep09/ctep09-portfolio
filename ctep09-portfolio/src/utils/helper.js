export function validateEmail(email) {
  // Regular expression pattern for email validation

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Convert email to string and convert it to lowercase, then test against the regular expression pattern
  return re.test(String(email).toLowerCase());
}

export function checkPassword(input) {
  // Regular expression pattern for password validation
  const passw = /^[A-Za-z]\w{7,14}$/;

  // Check if the input matches the password pattern
  if (input.match(passw)) {
    return true; // Input matches the password pattern
  }
  return false; // Input does not match the password pattern
}
