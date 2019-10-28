import * as React from 'react';
import { getMovieDetail } from '@/api/movie'
import styles from './movie-detail.scss';
import { RouteComponentProps } from 'react-router';

const { useState, useEffect }  = React;

interface IProps extends RouteComponentProps {
  match: any
}

const initialMovieInfo = {
  id: '', images: { medium: '' }, title: ''
};

function ListDetail(props: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState(initialMovieInfo);

  useEffect(() => {
    const cache = window.sessionStorage.getItem('movieInfo');
    if (cache) {
      setMovieInfo(JSON.parse(cache));
      return;
    }
    _getMovieDetail(props.match.params.id);
  }, []);

  function _getMovieDetail(id: string) {
    if (isLoading) return;
    setIsLoading(true);

    getMovieDetail({ id })
    .then((res: any) => {
      window.sessionStorage.setItem('movieInfo', JSON.stringify(res));
      setMovieInfo(res);
      setIsLoading(false);

    }).catch(err => {
      setIsLoading(false);
    });
  }

  return (
    <div className={`${styles['movie-detail']} center-content`}>
      <section className={styles.top}>
        <img className={`${isLoading && 'loading-shink'}`} src={movieInfo.images.medium} alt="loading"/>
      </section>
      <section className={styles.info}>
        { movieInfo.title }
      </section>
      <section className={styles.comment}>
        comment
      </section>
    </div>
  )
}

export default ListDetail;
