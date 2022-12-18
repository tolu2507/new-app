document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  document.getElementById("button").addEventListener("click", createTodo);

  function createTodo() {
    const input = document.getElementById("input");
    const list = document.getElementById("list-item");

    if (input) {
      const li = document.createElement("li");
      li.textContent = input.value;
      list.append(li);
      input.value = " ";
    }
  }
}
