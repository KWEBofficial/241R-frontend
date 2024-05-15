const ellipse = {
  width: 10,
  height: 5,
  /* TODO */
  getArea: function() { return this.width*this.height*Math.PI },
  getPerimeter: function() { return 2*Math.PI*Math.sqrt((Math.pow(this.width,2)+Math.pow(this.height,2))/2) },
  getEccentricity: function() { return Math.sqrt(1-Math.pow(this.height/this.width,2)) }
};

const area=ellipse.getArea();
console.log(area);
const eccentricity=ellipse.getEccentricity();
console.log(eccentricity);
const perimeter=ellipse.getPerimeter();
console.log(perimeter);
