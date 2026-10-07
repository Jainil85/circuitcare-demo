const form = document.querySelector("#repair-form");
const result = document.querySelector("#form-result");

if (form && result) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#customer-name").value.trim();
    const device = document.querySelector("#device").value.trim();
    const issue = document.querySelector("#issue").value.trim();

    result.textContent = `Thanks, ${name}. Preview: ${device} — ${issue}. This demo has not sent your request.`;
  });
}
