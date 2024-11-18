function scroll(productId) {
  const product = document.getElementById(productId);
  if (product) {
    product.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
  }
}
