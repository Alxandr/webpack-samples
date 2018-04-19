import classes from './main.styl';

const fn = (root: HTMLElement) => {
  const secondary = document.createElement('h2');
  secondary.classList.add(classes.baz);
  secondary.innerText = 'Subtitle...';
  root.appendChild(secondary);
};

export default fn;
