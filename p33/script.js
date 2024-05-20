const ellipse = {
  width: 10,
  height: 5
};
ellipse.getArea = function() {
  return Math.PI * this.width * this.height;
}
ellipse.getPerimeter = function() {
return 2 * Math.PI * Math.sqrt((this.width ** 2 + this.height ** 2) / 2);
}
ellipse.getEccentricity = function() {
  return Math.sqrt(1 - ((this.height / this.width) ** 2));
}