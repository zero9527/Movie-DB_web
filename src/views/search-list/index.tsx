import * as React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { iRootState, Dispatch } from '@/store-rematch';
import HeaderSearch from '@/components/header-search';
import Star from '@/components/star';
import Loading from '@/components/loading';
import TopBtn from '@/components/scrollToTop';
import { History } from 'history';
import { getMovieTop250All, getUrlParams } from '@/utils';
import { RouteComponentProps, withRouter } from 'react-router';
import styles from './search-list.scss';

interface IProps extends RouteComponentProps {
  history: History
}

// 占位初始化数据
const initMovie: any[] = [
  { title: '', images: { medium: ''}, rating: { average: '' }},
];
const initialState = {
  isLoading: false,
  input: '',
  searchList: initMovie,
  scrTop: 0
};

type IState = typeof initialState;

// 搜索电影，在Top250中匹配（搜索接口挂了。。。）
class SearchList extends React.Component<IProps> {
  public readonly state: Readonly<IState> = initialState;
  public inputTimer: any;

  constructor(props: IProps) {
    super(props);
    this._onScroll = this._onScroll.bind(this);
  }

  public componentDidMount() {
    let res = getUrlParams();
    if (!res || !res.input) return;
    
    this.setState({
      input: decodeURI(res.input)
    });
    this.searchMovie(decodeURI(res.input));
    
    this.props.history.listen(route => {
      this.onRouteChange(route);
    })

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
    if (route.pathname === '/search') {
      const { scrTop } = this.state;
      window.addEventListener('scroll', this._onScroll);
      // 恢复滚动条位置
      this.setScrollTop(scrTop);
    }
    // 详情页
    if (route.pathname.includes("/movie-detail/")) {
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
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (this.props.location.pathname === '/search') {
      this.setState({ scrTop: scrollTop });
    } else {
      window.removeEventListener('scroll', this._onScroll);
    }
  }

  // 根据电影名关键字 搜索 电影
  public searchMovie(input = '') {
    if (this.state.isLoading) return;
    this.setState({ isLoading: true });

    const cache = localStorage.getItem('movieTop250All');

    if (cache) {
      let movieTop250All = JSON.parse(cache);
      let searchRes = movieTop250All.filter((item: any) => item.title.includes(input));
      this.setState({
        searchList: searchRes
      }, () => {
        this.setState({ isLoading: false });
      });

    } else {
      getMovieTop250All(res => {
        if (!Array.isArray(res)) {
          this.setState({ isLoading: false });
          alert('请求失败，请稍后再试！');
          return;
        }

        let searchRes = res.filter((item: any) => item.title.includes(input));
        
        this.setState({
          searchList: searchRes
        }, () => {
          this.setState({ isLoading: false });
        });
      });
    }
  }

  public toDetail(id: string) {
    if (!id) return;
    this.props.history.push(`/search/movie-detail/${id}`);
  }

  public onChange(val: string) {
    if (this.inputTimer) clearTimeout(this.inputTimer);
    this.inputTimer = setTimeout(() => this.searchMovie(val), 500);
  }

  public onConfirm(val: string) {
    this.searchMovie(val);
  }

  public render() {
    const { 
      input,
      isLoading, 
      searchList, 
    } = this.state;

    return (
      <div className={styles.search} 
        style={{
          paddingTop: this.props.location.pathname.includes("/movie-detail/") 
          ? ''
          : '60px'
        }}
      >
        <div 
          className="center-content"
          style={{ 
            display: this.props.location.pathname.includes("/movie-detail/") 
            ? 'none' 
            : 'block' 
          }}
        >
          {!this.props.location.pathname.includes("/movie-detail/") &&
            <HeaderSearch 
              value={input} 
              onChange={(val) => this.onChange(val)} 
              onConfirm={(val) => this.onConfirm(val)} 
            />
          }

          {isLoading && <Loading />}

          <MovieItem movieList={searchList} toDetail={(id: string) => this.toDetail(id)} />
    
          <TopBtn />
        </div>

        {this.props.children}
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
      <section className="desc">
        <div>豆瓣电影搜索Api已挂。。。</div>
        <div>不知道其他Api还能活多久。。。</div>
        <div>目前的搜索结果来自Top250。。。</div>
        <br />
      </section>
      <div className={`${styles["movie-item"]} desc`}>搜索到 { (movieList[0] && movieList[0].title) ? movieList.length : 0 } 条数据</div>
      {movieList[0] && movieList[0].title && movieList.map((item, index) => (
        <section className={styles["movie-item"]} key={index} onClick={() => toDetail(item.id)}>
          <div className={styles["movie-item-pic"]}>
            <img src={item.images.small} alt="加载中..." className={styles.img} />
          </div>
          <div className={styles["movie-item-content"]}>
            <div className={styles["movie-item-name"]}>{ item.title }</div>
            <div className={`${styles["movie-item-score"]} desc`}>
              {item.rating.average !== 0 
                ? <React.Fragment>
                    <Star score={ item.rating.average } readonly={true} />
                    <span>{ item.rating.average }</span>
                  </React.Fragment>
                : <span>尚未上映</span>
              }
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default withRouter(SearchList);
