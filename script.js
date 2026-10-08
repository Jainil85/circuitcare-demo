const form = document.querySelector("#repair-form");
const result = document.querySelector("#form-result");
const contactEmail = "email-26ec096@charusat.edu.in";

if (form && result) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#customer-name").value.trim();
    const device = document.querySelector("#device").value.trim();
    const issue = document.querySelector("#issue").value.trim();

    const subject = encodeURIComponent("CircuitCare repair request: " + device);
    const body = encodeURIComponent(
      "Name: " + name + "\nDevice or project: " + device +
      "\n\nWhat needs attention:\n" + issue
    );
    const mailto = "mailto:" + contactEmail + "?subject=" + subject + "&body=" + body;

    result.replaceChildren(document.createTextNode("Your request is ready. "));
    const emailLink = document.createElement("a");
    emailLink.href = mailto;
    emailLink.textContent = "Open your email app to send it";
    result.append(emailLink);
  });
}
