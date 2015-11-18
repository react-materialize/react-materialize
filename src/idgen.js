let id = 0;

export function resetID() {
  id = 0;
}

export default function idgen() {
  let oldId = id;
  id += 1;
  return oldId;
}
