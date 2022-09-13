function scrollTo(element, spacingTop = 0) {
  window.scrollTo({
    top:
      element.current.getBoundingClientRect().top + window.scrollY - spacingTop,
    behavior: "smooth",
  });
}
export default scrollTo;
