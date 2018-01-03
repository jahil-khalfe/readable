import { config } from '../../../package.json';

const getData = (param) =>
  fetch(`${config.api}/${param}`, {
    method: 'GET',
    headers: { 'Authorization': config.authorization },
  });

export default getData;