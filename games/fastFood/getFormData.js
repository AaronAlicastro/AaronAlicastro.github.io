function getFormData(FORM, notReset = false) {
  let filled = true;
  let entrences = {};

  for (let entrence of new FormData(FORM).entries()) {
    if (!entrence[1].trim()) return { filled: false };
    entrences[entrence[0]] = entrence[1].trim();
  }

  if (!notReset) FORM.reset();
  return { filled, entrences };
}
