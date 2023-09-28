shortnerInput.addEventListener('focus', function (ev) {
  ev.preventDefault();
  shortnerInputContainer.style.outline = "1px solid";
  shortnerInputContainer.style.outlineColor = "skyblue";
});

shortnerInput.addEventListener('focusout', function (ev) {
  ev.preventDefault();
  shortnerInputContainer.style.outline = "none";
});