export const capitalize = path => path[0].toUpperCase() + path.substr(1);

export const addSpaces = path => {
  let character = '';
  let newPath = path.charAt(0);

  for (let i = 1; i <= path.length; i++) {
    character = path.charAt(i);
    if (character === character.toUpperCase()) {
      character = ' ' + character;
    }
    newPath += character;
  }
  return newPath;
};

export const capitalizeAndAddSpaces = (path = '') => {
  if (!path) return;

  path = capitalize(path);
  path = addSpaces(path);
  return path;
};
