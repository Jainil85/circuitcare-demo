const form = document.querySelector("#repair-form");
const result = document.querySelector("#form-result");
const contactEmail = "email-26ec096@charusat.edu.in";

if (form && result) {
  const submitButton = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (submitButton.disabled) return;

    const name = document.querySelector("#customer-name").value.trim();
    const device = document.querySelector("#device").value.trim();
    const issue = document.querySelector("#issue").value.trim();

    result.classList.remove("is-error");
    result.textContent = "Sending your request...";
    submitButton.disabled = true;

    try {
      const response = await fetch("https://formsubmit.co/ajax/" + contactEmail, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          "Device or project": device,
          "What needs attention": issue,
          _subject: "CircuitCare repair request: " + device
        })
      });
      const data = await response.json();

      if (!response.ok || data.success === false || data.success === "false") {
        throw new Error(data.message || "The request could not be sent.");
      }

      result.textContent = "Your request has been sent. Thank you.";
      form.reset();
    } catch (error) {
      result.classList.add("is-error");
      result.textContent = "We couldn't send your request. Please try again or email " + contactEmail + ".";
    } finally {
      submitButton.disabled = false;
    }
  });
}
