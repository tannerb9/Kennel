export function handleFieldChange(evt, obj, func) {
  const stateToChange = { ...obj };
  stateToChange[evt.target.id] = evt.target.value;
  debugger;
  func(stateToChange);
}
