const giphyApiKey = '8pUlWOsLhQjPt47fs2nl2VGxITduHHJO';
const giphyApiPath = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&`;
const localApiPath = 'http://localhost:3000/api/favorites/';
import { resolve } from 'path';

export default {
  async seachGifsIds (query) {
    let params = encodeURIComponent(query).replace(/%20/g, '+');
    return fetch(`${giphyApiPath}&q=${params}`)
            .then(res => res.json())
            .then(res => {
              let ids = [];
              for (let i = 0; i < res.data.length; i++) {
                ids.push(res.data[i].id);
              }
              return Promise.resolve(ids);
            });
  },
  async postFavorite (id) {
    return fetch(localApiPath, {
                headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                },
                method: 'POST',
                body: JSON.stringify({id: id})
              })
            .then(res => res.json());
  },
  async deleteFavorite (id) {
    return fetch(localApiPath + id, {
                headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                },          
                method:'DELETE'
              })
            .then(res => res.json());
  },
  async getFavorites () {
    return fetch(localApiPath, {method: 'GET'})
            .then(res => res.json());
  }
}