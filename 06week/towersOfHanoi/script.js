'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let moved = {};

  document.querySelectorAll('.ball').forEach((ball) => {
    ball.addEventListener('click', (e) => {
      moved = { target: e.target, size: e.target.clientHeight, parent: e.target.parentNode };
      e.target.parentNode.removeChild(e.target);
    });
  });

  document.querySelector('.container').addEventListener('click', (e) => {
    console.log(e)
    e.target.appendChild(moved.target);
  });
    document.querySelector('.container2').addEventListener('click', (e) => {
      let last = e.target.children[e.target.children.length - 1];
      let size = last && last.clientHeight;
      if (!last || size > moved.size) {
        e.target.appendChild(moved.target);
      } else {
        moved.parent.appendChild(moved.target);
      }
  });
    document.querySelector('.container3').addEventListener('click', (e) => {
    console.log(moved.target)
    e.target.appendChild(moved.target);
  });
});
