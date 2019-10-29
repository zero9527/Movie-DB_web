import * as React from 'react';
import axios, { CancelTokenSource } from 'axios';
import { getMovieDetail } from '@/api/movie';
import Star from '@/components/star';
import { RouteComponentProps } from 'react-router';
import styles from './movie-detail.scss';

const { useState, useEffect } = React;

interface IProps extends RouteComponentProps {
  match: any
}

const initialMovieInfo = {
  id: '', images: { medium: '' }, title: '', original_title: '', summary: '',
  countries: [], genres: [], pubdates: [], durations: [], rating: { average: '' },
  ratings_count: '', directors: [{ name: '', avatars: { medium: '' } }],  
  casts: [{ name: '', avatars: { medium: '' } }], photos: [{ image: '' }], 
  popular_reviews: [{ summary: '', author: { avatar: '', name: '' }, rating: { value: 0 } }]
};

// 电影详情
function MovieDetail(props: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState(initialMovieInfo);
  const [showDescFull, setShowDescFull] = useState(false);
  let request: CancelTokenSource;

  useEffect(() => {
    _getMovieDetail(props.match.params.id);

    return () => {
      request.cancel('取消请求！');
    }
  }, []);

  function _getMovieDetail(id: string) {
    if (isLoading) return;
    request = axios.CancelToken.source();
    setIsLoading(true);

    getMovieDetail({ 
      id,
      cancelToken: request.token
    })
    .then((res: any) => {
      setMovieInfo(res);
      setIsLoading(false);

    }).catch(err => {
      if (!axios.isCancel) setIsLoading(false);
    });
  }

  return (
    <div className={`${styles['movie-detail']}`}>
      <section className={`${styles['movie-header']} center-content`}>
        <div className={styles['movie-top']}>
          <div className={`${styles['movie-img']} ${isLoading && 'loading-shink'}`}>
            {isLoading 
              ? <div className={styles.img} /> 
              : <img className={styles.img} src={movieInfo.images.medium} alt="loading"/>
            }
          </div>
          <div className={styles['movie-top-content']}>
            <div className={`${styles['movie-title']} ${isLoading && 'loading-shink'}`}>{ movieInfo.title || '...' }</div>
            <div className={`${isLoading && 'loading-shink'}`}>{ movieInfo.original_title }</div>
            <div className={`desc ${isLoading && 'loading-shink'}`} style={{margin: '6px 0 12px'}}>
              { movieInfo.countries } / 
              { movieInfo.genres } / 
              { movieInfo.pubdates } / 
              片长{ movieInfo.durations[0] }
            </div>
          </div>
        </div>
        <div className={styles['movie-score']}>
          <div>豆瓣评分 TM</div>
          <div className={styles["score-wrapper"]}>
            <span className={styles.score}>{ movieInfo.rating.average||'0.0' }</span>
            <div>
              <Star score={movieInfo.rating.average} readonly={true} />
              <div className="desc">{ movieInfo.ratings_count }人评价</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles['movie-info']} center-content`}>
        <div className={styles["block-title"]}>剧情简介</div>
        <span>{ showDescFull ? movieInfo.summary : movieInfo.summary.substr(0, 60) }</span>
        {!isLoading && !showDescFull && (
          <span className={styles.more} onClick={() => setShowDescFull(true)}>展开</span>
        )}
      </section>

      <section className={`${styles["movie-actor"]} center-content`}>
        <div className={styles["block-title"]}>演职员</div>
        <div className={styles["scroll-x"]} style={{ display: isLoading ? 'none': '' }}>
          {
            movieInfo.directors.map((item) => (
              <div className={styles["actor-item"]} key={item.avatars.medium}>
                <img src={item.avatars.medium} />
                <div>{ item.name }</div>
                <span className="desc">导演</span>
              </div>
            ))
          }
          {
            movieInfo.casts.map((item) => (
              <div className={styles["actor-item"]} key={item.avatars.medium}>
                <img src={item.avatars.medium} alt="loading" />
                <div>{ item.name }</div>
                <span className="desc">演员</span>
              </div>
            ))
          }
        </div>
      </section>

      <section className={`movie-pic center-content`}>
        <div className={styles["block-title"]}>预告片 / 剧照</div>
        <div className={styles["scroll-x"]} style={{ display: isLoading ? 'none': '' }}>
          {
            movieInfo.photos.map((item) => (
              <div className={styles["movie-pic-item"]} key={item.image}>
                <img src={item.image} alt="loading" />
              </div>
            ))
          }
        </div>
      </section>

      <section className={`movie-comment center-content`}>
        <div className={styles["block-title"]}>影评</div>
        <div style={{ display: isLoading ? 'none': '' }}>
          {
            movieInfo.popular_reviews.map((item, index) => (
              <div className={styles["comment-item"]} key={index}>
                <div className={`${styles["comment-title"]} desc`}>
                  <img src={item.author.avatar} alt="loading" />
                  <span>{ item.author.name }</span>
                  <Star score={`${item.rating.value*2}`} readonly={true} />
                </div>
                <div>{ item.summary }</div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default MovieDetail;
