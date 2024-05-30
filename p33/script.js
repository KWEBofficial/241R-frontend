const ellipse = {
  width: 10,
  height: 5,
  getArea() {
    console.log(Math.PI * ellipse.width * ellipse.height);
  },
  getPerimeter() {
    console.log(2*Math.PI*Math.sqrt((ellipse.width ** 2 + ellipse.height ** 2)/2))
  },
  getEccentricity() {
    console.log(Math.sqrt(1-(ellipse.height/ellipse.width)**2))
  }
};