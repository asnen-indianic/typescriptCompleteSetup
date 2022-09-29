import axios from 'axios';

const callGetApi = (endPoint: string) => {
  return axios({
    url: endPoint,
    method: 'GET',
  }).then(response => {
    if (!response?.status) {
      return {response: 1, data: []};
    }
    return response?.data;
  });
};

const Api = {
  userData: () => callGetApi('users'),
};
export default Api;
