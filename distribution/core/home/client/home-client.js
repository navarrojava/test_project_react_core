import fetch from 'isomorphic-fetch';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

class HomeClient {
  constructor() {
    this.getEntityUrl = () => BASE_URL;

    this.getHeaders = () => ({
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    });
  }

  /**
   *
   * @returns {Promise}
   */
  getAllPostsClient() {
    return new Promise((resolve, reject) => {
      fetch(`${this.getEntityUrl()}/posts`, {
        method: 'GET',
        headers: this.getHeaders()
      }).then(response => {
        if (response.status !== 200) {
          reject(`${response.status} : ${response.statusText}`);
        } else {
          response.json().then(posts => resolve(posts)).catch(error => {
            reject(error.message);
          });
        }
      }).catch(error => {
        reject(error.message);
      });
    });
  }

}

const homeClient = new HomeClient();

export default homeClient;