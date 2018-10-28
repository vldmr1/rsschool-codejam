const make = function make(...par) {
  let a = par;

  const inner = function inner(...args) {
    if (typeof args[0] !== 'function') {
      a = a.concat(args);
      return inner;
    }
    return a.reduce(args[0]);
  };

  return inner;
};
