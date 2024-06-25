const ellipse = {
  width: 10,
  height: 5,
  getArea: function() { console.log(Math.PI * this.width * this.height)},
  getPerimeter: function() { console.log(2 * Math.PI * Math.sqrt((this.width ** 2 + this.height ** 2) / 2))},
  getEccentricity: function() { console.log(Math.sqrt(1 - ((this.height / this.width) ** 2)))}
};