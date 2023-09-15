export const debouceRaf = (fn) => {
  let raf = 0;

  return (...args) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      fn(...args);
      raf = 0;
    });
  };
};
