const ellipse = {
  width: 10,
  height: 5,
  getArea:function(w,h){
    console.log(Math.PI*this.width*this.height);},
  getPerimeter:function(w,h){
    console.log(Math.PI*2*Math.sqrt((this.width**2+this.height**2)/2))
  },
  getEccentricity:function(w,h){
    return Math.sqrt(1-this.height**2/this.width**2)
  }
};
