import * as React from 'react';
import { getMovieLine, getMovieComing, getMovieTop250 } from '@/api/movie';
import Star from '@/components/star';
import Loading from '@/components/loading';
import TopBtn from '@/components/scrollToTop';
import HeaderSearch from '@/components/header-search';
import { getMovieTop250All } from '@/utils';
import { RouteComponentProps, withRouter } from 'react-router';
import { History } from 'history';
import { Toast } from 'antd-mobile';
import { observer, inject } from 'mobx-react';
import { homeStoreType } from '@/store/home';
import styles from './home.scss';

interface IProps extends RouteComponentProps {
  history: History;
  homeStore: homeStoreType;
}

// 占位初始化数据
const initMovie: any[] = [
  { title: '', images: { medium: '' }, rating: { average: '' } },
  { title: '', images: { medium: '' }, rating: { average: '' } },
  { title: '', images: { medium: '' }, rating: { average: '' } },
  { title: '', images: { medium: '' }, rating: { average: '' } },
  { title: '', images: { medium: '' }, rating: { average: '' } },
  { title: '', images: { medium: '' }, rating: { average: '' } },
  { title: '', images: { medium: '' }, rating: { average: '' } },
  { title: '', images: { medium: '' }, rating: { average: '' } },
  { title: '', images: { medium: '' }, rating: { average: '' } }
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

@inject('homeStore')
@observer
class Home extends React.Component<IProps> {
  public readonly state: Readonly<IState> = initialState;

  constructor(props: IProps) {
    super(props);
    this._onScroll = this._onScroll.bind(this);
    setTimeout(() => {
      const whiteLoading = document.querySelector(
        '#white-loading'
      ) as HTMLDivElement;
      whiteLoading.style.visibility = 'hidden';
    }, 1000);
  }

  public componentDidMount() {
    this._getMovieLine();
    this._getMovieTop250();
    getMovieTop250All();

    this.props.homeStore.setCount(2);
    console.log(this.props.homeStore.count); // 2

    this.props.history.listen(route => {
      this.onRouteChange(route);
    });

    window.addEventListener('scroll', this._onScroll);
  }

  public componentWillUnmount() {
    // 组件销毁后，不操作数据
    this.setState = () => {};
    window.removeEventListener('scroll', this._onScroll);
  }

  // 监听路由变化
  public onRouteChange(route: any) {
    // 首页
    if (route.pathname === '/') {
      const { scrTop } = this.state;
      window.addEventListener('scroll', this._onScroll);
      // 恢复滚动条位置
      this.setScrollTop(scrTop);
    }
    // 详情页
    if (route.pathname.includes('/movie-detail/')) {
      // 重置滚动条位置
      this.setScrollTop(0);
      window.removeEventListener('scroll', this._onScroll);
    }
  }

  // 设置滚动条位置
  public setScrollTop(top: number) {
    document.body.scrollTop = top;
    document.documentElement.scrollTop = top;
  }

  public _onScroll() {
    const winHeight = window.innerHeight;
    const srcollHeight = document.documentElement.scrollHeight;
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    const toBottom = srcollHeight - winHeight - scrollTop;

    if (toBottom <= 300) {
      this._getMovieTop250({ start: this.state.currentPage * 10 });
    }
    if (this.props.location.pathname === '/') {
      this.setState({ scrTop: scrollTop });
    } else {
      window.removeEventListener('scroll', this._onScroll);
    }
  }

  public _getMovieLine() {
    if (this.state.movieLine[0].title) return;

    getMovieLine({
      start: 0,
      count: 9,
      city: '深圳'
    })
      .then((res: any) => {
        this.setState({
          movieLine: res.subjects
        });
      })
      .catch((err: any) => {
        console.log('err: ', err);
        Toast.fail('数据加载失败，请稍后再试');
      });
  }

  public _getMovieComing() {
    if (this.state.movieComing[0].title) return;

    getMovieComing({
      start: 0,
      count: 9
    })
      .then((res: any) => {
        this.setState({
          movieComing: res.subjects
        });
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }

  public _getMovieTop250({ start = 0, count = 20 } = {}) {
    const {
      isLoading,
      movieTop250,
      currentPage,
      isTop250FullLoaded
    } = this.state;
    if (isLoading || isTop250FullLoaded) return;

    this.setState(
      {
        isLoading: true
      },
      () => {
        getMovieTop250({
          start,
          count
        })
          .then((res: any) => {
            this.setState({
              movieTop250: movieTop250[0].title
                ? [...movieTop250, ...res.subjects]
                : res.subjects,
              isLoading: false,
              currentPage: currentPage + 1,
              isTop250FullLoaded: res.subjects.length === 0
            });
          })
          .catch(err => {
            console.log('err: ', err);
            this.setState({ isLoading: false });
          });
      }
    );
  }

  // 切换院线热播、即将上映
  public movieStatusChange(status: number) {
    this.setState({ movieLineStatus: status });
    const { movieLine, movieComing } = this.state;

    if (status === 0 && !movieLine[0].title) {
      this._getMovieLine();
    }
    if (status === 1 && !movieComing[0].title) {
      this._getMovieComing();
    }
  }

  public toDetail(id: string) {
    if (!id) return;
    this.props.history.push(`/movie-detail/${id}`);
  }

  // 搜索输入框回车
  public onConfirm(val: string) {
    if (!val) return;
    this.props.history.push(`/search?input=${val}`);
  }

  public isDetailPage() {
    return this.props.location.pathname.includes('/movie-detail/');
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
      <div className={`${styles.home}`}>
        {!this.isDetailPage() && (
          <HeaderSearch onConfirm={val => this.onConfirm(val)} />
        )}
        <div
          className={`${styles['home-content']} center-content`}
          style={{ display: this.isDetailPage() ? 'none' : 'block' }}
        >
          <section className={styles['movie-block']}>
            <div className={styles['block-title']}>
              <span
                className={`${styles['title-item']} ${movieLineStatus === 0 &&
                  styles['title-active']}`}
                onClick={() => this.movieStatusChange(0)}
              >
                院线热映
              </span>
              <span
                className={`${styles['title-item']} ${movieLineStatus === 1 &&
                  styles['title-active']}`}
                onClick={() => this.movieStatusChange(1)}
              >
                即将上映
              </span>
            </div>

            {movieLineStatus === 0 ? (
              <MovieItem
                movieList={movieLine}
                toDetail={(id: string) => this.toDetail(id)}
              />
            ) : (
              <MovieItem
                movieList={movieComing}
                toDetail={(id: string) => this.toDetail(id)}
              />
            )}
          </section>

          <MovieTop250
            isLoading={isLoading}
            movieTop250={movieTop250}
            toDetail={(id: string) => this.toDetail(id)}
          />

          {isLoading && <Loading />}

          <TopBtn />

          {isTop250FullLoaded && (
            <div className={styles.nomore}>没有更多数据了~</div>
          )}
        </div>

        {/* detial */}
        {this.props.children}
      </div>
    );
  }
}

function MovieItem({
  movieList = initMovie,
  toDetail = (id: string) => {}
} = {}) {
  return (
    <div>
      {movieList.map((item, index) => (
        <div
          className={styles['movie-item']}
          key={index}
          title={item.title}
          onClick={() => toDetail(item.id)}
        >
          {!movieList[0].title ? (
            <div className={`${styles.img} loading-shink`} />
          ) : (
            <img
              className={styles.img}
              src={item.images.medium}
              alt="loading"
            />
          )}
          <div className={styles['movie-title']}>{item.title}</div>
          {item.rating.average === 0 ? (
            <span className="desc">尚未上映</span>
          ) : (
            <div className={styles.score}>
              <Star score={item.rating.average} readonly={true} />
              <span>{item.rating.average}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MovieTop250({
  isLoading = false,
  movieTop250 = initMovie,
  toDetail = (id: string) => {}
} = {}) {
  return (
    <section className={styles['movie-block']}>
      <div className={styles['block-title']}>
        <span className={styles['title-active']}>Top250</span>
      </div>
      <div>
        {movieTop250.map((item, index) => (
          <div
            className={styles['movie-item']}
            key={index}
            title={item.title}
            onClick={() => toDetail(item.id)}
          >
            <span className={styles.index}>{index + 1}</span>
            {isLoading && !movieTop250[0].title ? (
              <div className={`${styles.img} loading-shink`} />
            ) : (
              <img
                className={styles.img}
                src={item.images.medium}
                alt="loading"
              />
            )}
            <div className={styles['movie-title']}>{item.title}</div>
            <div className={styles.score}>
              <Star score={item.rating.average} readonly={true} />
              <span>{item.rating.average}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default withRouter(Home);
