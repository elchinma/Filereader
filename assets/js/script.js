
const elemInput = document.querySelector('[type="file"]');

const files = elemInput.files;

const countFiles = files.length;
  if (countFiles) {

    const file = files[0];
  }


document.querySelector('[type="file"]').addEventListener('change', (e) => {

    const files = e.target.files;
    const countFiles = files.length;
    if (countFiles) {

      const selectedFile = files[0];
    }
  });

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener('load', (e) => {

  });

  reader.addEventListener('error', () => {
  console.error(`Произошла ошибка при чтении файла: ${selectedFile.name}`);
});


const dropArea = document.querySelector('.drop-area');



dropArea.addEventListener('dragenter', (e) => {
    e.preventDefault();
    dropArea.classList.add('drop-area-over');
  });
  dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropArea.classList.remove('drop-area-over');
  });

  dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('drop-area-over');
    const transferredFiles = e.dataTransfer.files;
    [...transferredFiles].forEach(transferredFile => {
      if (!/^image/.test(transferredFile.type)) {
        console.log('Выбранный файл не является изображением!');
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(transferredFile);
      reader.addEventListener('error', () => {
        console.error(`Произошла ошибка при чтении файла: ${transferredFile.name}`);
        return;
      });
      reader.addEventListener('load', (e) => {
        dropArea.insertAdjacentHTML('beforeend', `<div class="drop-area-preview"><img class="drop-area-image" src="${e.target.result}" alt="${transferredFile.name}"><div class="drop-area-name">${transferredFile.name}</div><div class="drop-area-remove"><svg viewBox="0 0 24 24" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path fill='#f5f5f5' d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></div></div>`);
      });
    });
  });
  document.addEventListener('click', (e) => {
    if (e.target.closest('.drop-area-remove')) {
      e.target.closest('.drop-area-preview').remove();
    }
  });