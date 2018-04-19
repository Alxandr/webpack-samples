import classes from './main.styl';
import domready from 'domready';

domready(() => {
  const root = document.getElementById('root')!;
  root.classList.add(classes.foo);
  root.innerHTML = `<h1 class="${classes.bar}">I am groot!</h1>`;
  if (Math.random() > 0.5) {
    import('./second').then(({ default: second }) => second(root));
  }
});
