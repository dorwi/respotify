import axios from 'axios';

function fetch(request, callback) {
  axios.get(request)
    .then(response => {
      callback(response.data['_embedded']['publications']);
    });
}


export function getPublications(author, callback) {
  const request = `https://amphoreus-backend.herokuapp.com/publications/search/findAuteurByRegexp?auteur=%25${author}%25`;
  fetch(request, callback);
}


export function createPublication(data, callback){
	const url = `https://amphoreus-backend.herokuapp.com/publications`;
	axios.post(url, data)
		.then(response => {
			callback(response)})
		.catch(function (error){
			console.log(error);
		});
}
