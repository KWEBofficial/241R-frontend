const ellipse = {
  width: 10,
  height: 5,
  getarea: function() {
    return this.width*this.height*Math.PI;
  },
  getPerimeter: function() {
    return 2*Math.PI*Math.sqrt((this.height*this.height+this.width*this.width)/2);
  },
  getEccetricity: function() {
    return Math.sqrt(1-(this.height/this.width)*(this.height/this.width));
  }
};
