import axios from 'axios';

function fetch(request, callback) {
  axios.get(request)
    .then(response => {
      callback(response.data);
    });
}


export function getPublications(author, callback) {
  const request = `https://amphoreus-backend.herokuapp.com/publications/search/findAuteurByRegexp?auteur=%25${author}%25`;
  fetch(request, callback);
}
