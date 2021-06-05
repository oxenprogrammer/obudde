const searchForm = () => {
  const formSection = document.createElement('section');
  formSection.setAttribute('class', 'section-form');

  const formArticle = document.createElement('article');
  formArticle.setAttribute('class', 'article-form');

  const form = document.createElement('form');
  form.setAttribute('class', 'form');

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('placeholder', 'Enter City Name . . .');
  inputName.setAttribute('maxlength', '30');
  inputName.setAttribute('required', true);

  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('class', 'submit');

  form.appendChild(inputName);
  form.appendChild(submitButton);
  formArticle.appendChild(form);
  formSection.appendChild(formArticle);

  return formSection;
};

export default searchForm;