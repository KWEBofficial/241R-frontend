const ellipse = {
  width: 10,
  height: 5,
  /* TODO */
  getArea () {
    const area = ellipse.width * ellipse.height * Math.PI;
    return area;
  },
  getPerimeter () {
    const peri1 = Math.sqrt(
      (Math.pow(ellipse.width, 2) + Math.pow(ellipse.height, 2)) / 2
    );
    const peri2 = 2 * Math.PI * peri1;
    return peri2;
  },
  getEccentricity () {
    const eccen = Math.sqrt(1 - Math.pow(ellipse.height / ellipse.width, 2));
    return eccen;
  }
};
