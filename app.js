let customers = [
    { id: 1, name: "moe", email: "moe@gmail.com", isVIP: true },
    { id: 2, name: "larry", isVIP: true, email: "larry@gmail.com" },
    { id: 4, name: "shep", email: "shep@gmail.com" }
  ];
  
  let container = document.querySelector("#container");
  
  const render = () => {
    let html = customers
      .map(customer => {
        return `
              <li>${customer.name} joined on </li>
              `;
      })
      .join("");
    container.innerHTML = html;
  };
  render();
  