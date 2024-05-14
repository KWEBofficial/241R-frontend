const isValidNumber = (arg) => {
  if (parseInt(arg) == arg && arg >= 1 && arg <= 9) {
    return true;
  } else {
    return false;
  }
};
