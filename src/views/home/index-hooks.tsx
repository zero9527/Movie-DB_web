import * as React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { iRootState, Dispatch } from '@/store-rematch';
// import { Button } from 'antd';
import { getMovieLine, getMovieComing, getMovieTop250 } from '@/api/movie';
import Star from '@/components/star';
import Loading from '@/components/loading';
import styles from './home.scss';

const { useState, useEffect } = React;

interface IProps {
  [prop: string]: any
}

// 占位初始化数据
const initMovie: any[] = [
  { title: '', images: { medium: ''}, rating: { average: '' }},
  { title: '', images: { medium: ''}, rating: { average: '' }},
  { title: '', images: { medium: ''}, rating: { average: '' }},
  { title: '', images: { medium: ''}, rating: { average: '' }},
  { title: '', images: { medium: ''}, rating: { average: '' }},
  { title: '', images: { medium: ''}, rating: { average: '' }},
];

function Home(props: IProps) {
  // const dispatch: Dispatch = useDispatch();
  // const { count, countAsync } = useSelector((state: iRootState) => state.common);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [movieLineStatus, setMovieLineStatus] = useState(0);
  const [movieLine, setMovieLine] = useState(initMovie);
  const [movieComing, setMovieComing] = useState(initMovie);
  const [movieTop250, setMovieTop250] = useState(initMovie);
  
  useEffect(() => {
    _getMovieLine();
    _getMovieTop250();

    window.addEventListener('scroll', onScroll.bind(Home));
    return () => {
      window.removeEventListener('scroll', onScroll.bind(Home));
    }
  }, []);

  function onScroll() {
    const winHeight = window.innerHeight;
    const srcHeight = document.documentElement.scrollHeight;
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const toBottom = srcHeight - winHeight - scrollTop;

    if (toBottom <= 100) {
      _getMovieTop250({ start: currentPage*9 });
    }
  }

  function _getMovieLine() {
    if (movieLine[0].title) return;
    
    getMovieLine({
      start: 0,
      count: 9
    }).then((res: any) => {
      setMovieLine(res.subjects);

    }).catch(err => {
      console.log('err: ', err);
    });
  }

  function _getMovieComing() {
    if (movieComing[0].title) return;

    getMovieComing({
      start: 0,
      count: 9
    }).then((res: any) => {
      setMovieComing(res.subjects);

    }).catch(err => {
      console.log('err: ', err);
    });
  }
  
  function _getMovieTop250({
    start = 0,
    count = 9
  } = {}) {
    if (isLoading) return;
    console.log(`isLoading1: ${isLoading}`);

    setTimeout(() => {

      setIsLoading(true);
      console.log(`isLoading2: ${isLoading}`);
    }, 0);

    return;
    getMovieTop250({
      start,
      count
    }).then((res: any) => {
      setMovieTop250(movieTop250[0].title
        ? [...movieTop250, ...res.subjects]
        : res.subjects
      );
      setIsLoading(false);
      setCurrentPage(currentPage+1);

    }).catch(err => {
      console.log('err: ', err);
      setIsLoading(false);
    });
  }

  const movieStatusChange = (status: number) => {
    setMovieLineStatus(status);
    _getMovieComing();
  }

  return (
    <div className={`${styles.home} center-content`}>
      <section className={styles['movie-block']}>
        <div className={styles['block-title']}>
          <span className={`${styles['title-item']} ${movieLineStatus === 0 && styles['title-active']}`}
            onClick={() => movieStatusChange(0)}
          >院线热映</span>
          <span className={`${styles['title-item']} ${movieLineStatus === 1 && styles['title-active']}`}
            onClick={() => movieStatusChange(1)}
          >即将上映</span>
        </div>

        {`isLoading: ${isLoading}`}

        {movieLineStatus === 0 ? (
          <MovieItem movieList={movieLine} />
        ) : (
          <MovieItem movieList={movieComing} />
        )}
      </section>

      <MovieTop250 isLoading={isLoading} movieTop250={movieTop250} />

      {isLoading && <Loading />}
    </div>
  )
}

function MovieItem({
  movieList = initMovie,
  ...props
}) {
  return (
    <div>
      {movieList.map((item, index) => (
        <div className={styles['movie-item']} key={index}>
          <img className={`${!movieList[0].title && 'loading-shink'}`} src={item.images.medium} alt="loading"/>
        <div className={styles['movie-title']}>{ item.title }</div>
        {item.rating.average === '0' 
          ? <span>{ item.rating.average }</span>
          : <div className={styles.score}>
              <Star score={item.rating.average} readonly={true} />
              <span>{ item.rating.average }</span>
            </div>
        }
        </div>
      ))}
    </div>
  );
}

function MovieTop250({ 
  isLoading = false, 
  movieTop250 = [{ title: '', images: { medium: ''}, rating: { average: '' }}]
} = {}) {
  return (
    <section className={styles['movie-block']}>
        <div className={styles['block-title']}>
          <span className={styles['title-active']}>Top250</span>
        </div>
        <div>
          {
            movieTop250.map((item, index) => (
              <div className={styles['movie-item']} key={index}>
                <img className={`${isLoading && 'loading-shink'}`} src={item.images.medium} alt="loading"/>
                <div className={styles['movie-title']}>{ item.title }</div>
                <div className={styles.score}>
                  <Star score={item.rating.average} readonly={true} />
                  <span>{ item.rating.average }</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
  );
}

export default Home;
