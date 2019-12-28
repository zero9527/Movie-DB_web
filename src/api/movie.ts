import axios from 'axios';

// 跨域用不了，用jsonp
export function getMovieLine(params = {}) {
  return axios.get('/v2/movie/in_theaters', {params});
}

export function getMovieComing(params = {}) {
  return axios.get('/v2/movie/coming_soon', {params});
}

export function getMovieTop250(params = {}) {
  return axios.get('/v2/movie/top250', {params});
}

export function getMovieDetail({ id = '' } = {}) {
  return axios.get('/v2/movie/subject/'+id);
}
