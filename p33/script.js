const ellipse = {
  width: 10,
  height: 5,
  getArea() {
    return Math.PI * 10 * 5;
  },
  getPerimeter() {
    return 2 * Math.PI * Math.sqrt((Math.pow(this.width, 2) + Math.pow(this.height, 2)) / 2);
  },
  getEccentricity() {
    return Math.sqrt(1 - Math.pow(this.height / this.width, 2));
  },
};