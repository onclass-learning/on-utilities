export const createNameIcon = (name) => {
  if (name) {
    const fullName = name.split(' ');

    if (fullName.length === 1) {
      const initials = fullName[0].substring(0, 2);

      return initials.toUpperCase();
    } else {
      const initials = `${fullName.shift().charAt(0)}${fullName
        .pop()
        .charAt(0)}`;

      return initials.toUpperCase();
    }
  }

  return null;
};
