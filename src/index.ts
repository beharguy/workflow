function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello from typescript';

  return element;
}

document.body.appendChild(component());