export const isTrignometricFunction = (str) => {
  if (/tan|sin|cos|sqrt/.test(str)) return true;
  else return false;
};
