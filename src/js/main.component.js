import searchForm from './form.compoent';

const main = () => {
  const { body } = document;

  const mainBody = document.createElement('main');
  mainBody.setAttribute('class', 'container');

  mainBody.appendChild(searchForm());
  body.appendChild(mainBody);
  return body;
};

export default main;