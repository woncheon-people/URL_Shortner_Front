let id = 10000000;

shortnerSubmitButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  const route = toBase62(++id);
  shortnerInput.value = "";
  shortnerResult.value = `https://wnchn.kr/${route}`;
});

shortnerCopyButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  navigator.clipboard.writeText(shortnerResult.value).then((value) => {
    alert("복사가 완료되었습니다.");
  });
})