document.querySelector("#registration-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const dob = new Date(document.querySelector("#dob").value);
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();
  if (age < 18 || age > 55) {
    alert("Error: Age must be between 18 and 55 years.");
    return false;
  }

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const terms = document.querySelector("#terms").checked;

  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
  registrations.push({ name, email, password, dob: dob.toLocaleDateString(), terms });
  localStorage.setItem("registrations", JSON.stringify(registrations));

  const table = document.querySelector("#registrations tbody");
  table.innerHTML = "";
  registrations.forEach(registration => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="p-4">${registration.name}</td>
      <td class="p-4">${registration.email}</td>
      <td class="p-4">${registration.password}</td>
      <td class="p-4">${registration.dob}</td>
      <td class="p-4">${registration.terms}</td>
    `;
    table.appendChild(row);
  });
  
  document.querySelector("#registration-form").reset();
});

window.addEventListener("load", function() {
  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
  const table = document.querySelector("#registrations tbody");
  registrations.forEach(registration => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="p-4">${registration.name}</td>
      <td class="p-4">${registration.email}</td>
      <td class="p-4">${registration.password}</td>
      <td class="p-4">${registration.dob}</td>
      <td class="p-4">${registration.terms}</td>
    `;
    table.appendChild(row);
  });
});