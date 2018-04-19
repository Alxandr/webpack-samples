import classes from './main.css';
import domready from 'domready';

domready(() => {
  const root = document.getElementById('root')!;
  root.classList.add(classes.foo);
  root.innerHTML = '<h1>I am groot too!</h1>';
});
