const ellipse = {
  width: 10,
  height: 5,
  getArea: function () {
    return Math.PI * ellipse.width * ellipse.height;
  },
  getPerimeter: function () {
    return 2 * Math.PI * Math.sqrt((Math.pow(ellipse.width, 2) + Math.pow(ellipse.height, 2)) / 2)
  },
  getEccentricity: function () {
    return Math.sqrt(1 - Math.pow(ellipse.height, 2) / Math.pow(ellipse.width, 2))
  },
  
};
