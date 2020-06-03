const handleFieldChange = (evt, obj, func) => {
  const stateToChange = { ...obj };
  stateToChange[evt.target.id] = evt.target.value;
  func(stateToChange);
};

export default handleFieldChange;
