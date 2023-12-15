async function getPromise() {
  const res = await fetch("http://localhost:3000/users");
  return res.json();
}

async function getData() {
  const users = await getPromise();
  const container = document.getElementById("container");

  users.forEach((user) => {
    let element = `<div class="card d-inline-flex p-3 m-3 hov" style="background-color: ${user.color}">
      <p class="">ID: ${user.id}</p>
      <p class="">${user.firstName} ${user.lastName}</p>
      <p class="">${user.username}</p>
      <p class="">Favorite color: ${user.color}</p>
    </div>`;

    container.insertAdjacentHTML("beforeend", element);
  });
}

getData();
