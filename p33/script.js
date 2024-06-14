const ellipse = {
  width: 10,
  height: 5,
  /* TODO */
  getArea: function () { return Math.PI * this.width * this.height },
  getPerimeter()  { return 2 * Math.PI * ((this.width ** 2 + this.height ** 2) / 2) ** 0.5},
  getEccentricity() { return (1 - (this.height / this.width) ** 2) ** 0.5}
};
