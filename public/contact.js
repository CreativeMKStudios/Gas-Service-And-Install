const form = document.querySelector("#quote-form");
const ready = document.querySelector("#ready");
const error = document.querySelector("#form-error");
const messageEl = document.querySelector("[data-message]");
const smsLink = document.querySelector("[data-sms]");
const copyButton = document.querySelector("[data-copy]");

function value(params, name) {
  return (params.get(name) || "").trim();
}

function show(params) {
  if (!ready || !messageEl || !smsLink || !error) return;
  const website = value(params, "website");
  if (website) {
    messageEl.textContent = "Thanks. If you still need a visit, call 07738 598396.";
    smsLink.hidden = true;
    ready.hidden = false;
    return;
  }
  const name = value(params, "name");
  const phone = value(params, "phone");
  const town = value(params, "town");
  const job = value(params, "job");
  const message = value(params, "message");
  const attempted = ["name", "phone", "town", "message"].some((key) => params.has(key));
  if (!attempted) return;
  if (name.length < 2 || phone.length < 9 || town.length < 2 || message.length < 6) {
    error.hidden = false;
    ready.hidden = true;
    return;
  }
  const draft = `Hello, this is ${name} in ${town}.\nPhone: ${phone}\nJob: ${job || "Not sure"}\n\n${message}`;
  messageEl.textContent = draft;
  smsLink.href = `sms:+447738598396?body=${encodeURIComponent(draft)}`;
  smsLink.hidden = false;
  ready.hidden = false;
  error.hidden = true;
  if (form) {
    for (const key of ["name", "phone", "town", "job", "message"]) {
      const field = form.elements.namedItem(key);
      if (field && "value" in field && params.get(key)) field.value = params.get(key);
    }
  }
  const robots = document.querySelector('meta[name="robots"]');
  if (robots) robots.setAttribute("content", "noindex, follow");
}

if (form) {
  show(new URLSearchParams(window.location.search));
}

copyButton?.addEventListener("click", async () => {
  const text = messageEl?.textContent ?? "";
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Copied";
  } catch {
    copyButton.textContent = "Select the message above and copy it";
  }
});
