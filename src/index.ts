  function component() {
    const element = document.createElement('div');

    element.innerHTML ="hello222";
    return element;
  }

  document.body.appendChild(component());