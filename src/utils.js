export const safeJSONStringify = s => {
  try {
    return JSON.stringify(s);
  } catch (err) {
    console.error(err);
    return NaN;
  }
};
