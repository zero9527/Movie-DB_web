import * as React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { iRootState, Dispatch } from '@/store-rematch';
// import { Button } from 'antd';
import { getMovieLine, getMovieComing, getMovieTop250 } from '@/api/movie';
import Star from '@/components/star';
import Loading from '@/components/loading';
import TopBtn from '@/components/scrollToTop';
import styles from './home.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { History } from 'history';

interface IProps extends RouteComponentProps {
  history: History
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
const initialState = {
  isLoading: false,
  currentPage: 0,
  movieLineStatus: 0,
  movieLine: initMovie,
  movieComing: initMovie,
  movieTop250: initMovie,
  isTop250FullLoaded: false,
  scrTop: 0
};

type IState = typeof initialState;

class Home extends React.Component<IProps> {
  public readonly state: Readonly<IState> = initialState;

  constructor(props: IProps) {
    super(props);
  }

  public componentDidMount() {
    this._getMovieLine();
    this._getMovieTop250();

    this.props.history.listen(route => {
      this.onRouteChange(route);
    })

    window.addEventListener('scroll', this._onScroll.bind(this));
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll.bind(this));
  }

  // 监听路由变化
  public onRouteChange(route: any) {
    const { scrTop } = this.state;
    // 详情页
    if (route.pathname.includes("/movie-detail/") ) {
      // 重置滚动条位置
      this.setScrollTop(0);

    } else {
      // 首页
      window.addEventListener('scroll', this._onScroll.bind(this));
      setTimeout(() => {
        // 恢复滚动条位置
        this.setScrollTop(scrTop);
      }, 0);
    }
  }

  // 设置滚动条位置
  public setScrollTop(top: number) {
    let doc = document.documentElement || document.body;
    doc.scrollTop = top;
  }

  public _onScroll() {
    const winHeight = window.innerHeight;
    const srcollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const toBottom = srcollHeight - winHeight - scrollTop;

    if (toBottom <= 100) {
      this._getMovieTop250({ start: this.state.currentPage*10 });
    }
    // location.pathname 因为是同一组件，所以有问题，所以用原生js的
    if (location.hash.includes('/movie-detail/')) {
      window.removeEventListener('scroll', this._onScroll.bind(this));
      
    } else {
      this.setState({
        scrTop: scrollTop
      });
    }
  }

  public _getMovieLine() {
    if (this.state.movieLine[0].title) return;
    
    getMovieLine({
      start: 0,
      count: 9
    }).then((res: any) => {
      this.setState({
        movieLine: res.subjects
      });

    }).catch(err => {
      console.log('err: ', err);
    });
  }

  public _getMovieComing() {
    if (this.state.movieComing[0].title) return;

    getMovieComing({
      start: 0,
      count: 9
    }).then((res: any) => {
      this.setState({
        movieComing: res.subjects
      });

    }).catch(err => {
      console.log('err: ', err);
    });
  }
  
  public _getMovieTop250({
    start = 0,
    count = 10
  } = {}) {
    const { 
      isLoading, 
      movieTop250, 
      currentPage, 
      isTop250FullLoaded 
    } = this.state;
    if (isLoading || isTop250FullLoaded) return;

    this.setState({ isLoading: true });
    
    getMovieTop250({
      start,
      count
    }).then((res: any) => {
      this.setState({
        movieTop250: movieTop250[0].title
          ? [...movieTop250, ...res.subjects]
          : res.subjects,
        isLoading: false,
        currentPage: currentPage+1,
        isTop250FullLoaded: res.subjects.length === 0
      });

    }).catch(err => {
      console.log('err: ', err);
      this.setState({ isLoading: false });
    });
  }

  public movieStatusChange(status: number) {
    this.setState({ movieLineStatus: status });
    this._getMovieComing();
  }

  public toDetail(id: string) {
    if (!id) return;
    this.props.history.push(`/movie-detail/${id}`);
  }

  public render() {
    const { 
      movieLineStatus, 
      isLoading, 
      movieLine, 
      movieComing, 
      movieTop250, 
      isTop250FullLoaded
    } = this.state;

    return (
      <div className={`${styles.home} center-content`}>
        <div 
          style={{ 
            display: this.props.location.pathname.includes("/movie-detail/") 
            ? 'none' 
            : 'block' 
          }}>
          <section className={styles['movie-block']}>
            <div className={styles['block-title']}>
              <span className={`${styles['title-item']} ${movieLineStatus === 0 && styles['title-active']}`}
                onClick={() => this.movieStatusChange(0)}
              >院线热映</span>
              <span className={`${styles['title-item']} ${movieLineStatus === 1 && styles['title-active']}`}
                onClick={() => this.movieStatusChange(1)}
              >即将上映</span>
            </div>
    
            {movieLineStatus === 0 ? (
              <MovieItem movieList={movieLine} toDetail={(id: string) => this.toDetail(id)} />
            ) : (
              <MovieItem movieList={movieComing} toDetail={(id: string) => this.toDetail(id)} />
            )}
          </section>
    
          <MovieTop250 isLoading={isLoading} movieTop250={movieTop250} toDetail={(id: string) => this.toDetail(id)} />
    
          {isLoading && <Loading />}

          <TopBtn />

          {isTop250FullLoaded && <div className={styles.nomore}>没有更多数据了~</div>}
        </div>
        
        {/* detial */}
        { this.props.children }
      </div>
    )
  }
}

function MovieItem({
  movieList = initMovie,
  toDetail = (id: string) => {}
} = {}) {
  return (
    <div>
      {movieList.map((item, index) => (
        <div className={styles['movie-item']} key={index} onClick={() => toDetail(item.id)}>
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
  movieTop250= initMovie,
  toDetail = (id: string) => {}
} = {}) {
  return (
    <section className={styles['movie-block']}>
        <div className={styles['block-title']}>
          <span className={styles['title-active']}>Top250</span>
        </div>
        <div>
          {
            movieTop250.map((item, index) => (
              <div className={styles['movie-item']} key={index} onClick={() => toDetail(item.id)}>
                <span className={styles.index}>{ index+1 }</span>
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

export default withRouter(Home);
