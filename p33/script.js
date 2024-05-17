const ellipse = {
  width: 10,
  height: 5,
};

ellipse.getArea = function () {
  return this.width * this.height * Math.PI
}

ellipse.getPerimeter = function () {
  return 2*Math.PI*Math.sqrt((this.width*this.width+this.height*this.height)/2)
}

ellipse.getEccentricity = function () {
  return Math.sqrt(1 - (this.height/this.width)**2)
}