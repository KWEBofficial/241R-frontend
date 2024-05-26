const ellipse = {
  width: 10,
  height: 5,
  
  getArea() {
    return Math.PI * this.width * this.height;
  },

  getPerimeter() {
    return 2 * Math.PI * Math.sqrt((Math.pow(this.width, 2) + Math.pow(this.height, 2)) / 2);
  },

  getEccentricity() {
    return Math.sqrt(1 - Math.pow(this.height / this.width, 2));
  }
};

// console.log(ellipse.getArea());         // 157.07963267948966
// console.log(ellipse.getPerimeter());    // 49.67294132898805
// console.log(ellipse.getEccentricity()); // 0.8660254037844386