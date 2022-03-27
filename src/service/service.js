export const gearChangeBg = () => {
  const point = document
    .getElementsByClassName("gear")[0]
    .getBoundingClientRect().top;
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > point) {
    return true;
  }
  return false;
};
