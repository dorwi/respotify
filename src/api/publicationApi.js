import axios from 'axios';

function fetch(request, callback) {
  axios.get(request)
    .then(response => {
      callback(response.data);
    });
}


export function getPublications(callback) {
  const request = `https://amphoreus-backend.herokuapp.com/publications`;
  fetch(request, callback);
}

