import axios from 'axios';
const request = axios.CancelToken.source();

export function getMovieLine(params = {}) {
  return axios.get('/v2/movie/in_theaters', {params});
}

export function getMovieComing(params = {}) {
  return axios.get('/v2/movie/coming_soon', {params});
}

export function getMovieTop250(params = {}) {
  return axios.get('/v2/movie/top250', {params});
}

export function getMovieDetail({ id = '', cancelToken = request.token } = {}) {
  return axios.get('/v2/movie/subject/'+id, {cancelToken});
}
