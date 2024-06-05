const ellipse = {
  width: 10,
  height: 5
};
  ellipse.getArea=function(){
    return(Math.PI*this.width*this.height);};
  ellipse.getPerimeter=function(){
    return(Math.PI*2*Math.sqrt((this.width**2+this.height**2)/2))
  };
  ellipse.getEccentricity=function(){
    return Math.sqrt(1-this.height**2/this.width**2)
  };
