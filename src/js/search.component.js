import searchForm from './form.compoent';

const search = () => {
  const { body } = document;
  body.appendChild(searchForm());
  return body;
};

export default search;