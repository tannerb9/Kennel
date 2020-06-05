import Manager from "../modules/Manager";

export function handleFieldChange(evt, obj, func) {
  const stateToChange = { ...obj };
  stateToChange[evt.target.id] = evt.target.value;
  func(stateToChange);
}

export function removeObj(tab, id, func) {
  Manager.delete(`${tab}`, `${id}`).then(() =>
    Manager.getAll(`${tab}`).then(func)
  );
}
