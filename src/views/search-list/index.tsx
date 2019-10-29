import * as React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { iRootState, Dispatch } from '@/store-rematch';
import Search from '@/components/search';
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
  movieList: initMovie,
  searchList: initMovie
};

type IState = typeof initialState;

class SearchList extends React.Component<IProps> {
  public readonly state: Readonly<IState> = initialState;
  public inputTimer: any;

  constructor(props: IProps) {
    super(props);
  }

  public componentDidMount() {
    let res = getUrlParams();
    if (!res || !res.input) return;
    
    this.setState({
      input: decodeURI(res.input)
    });
    this.searchMovie(decodeURI(res.input));
  }

  public searchMovie(input = '') {
    const cache = localStorage.getItem('movieTop250All');
    if (cache) {
      let movieTop250All = JSON.parse(cache);
      let searchRes = movieTop250All.filter((item: any) => item.title.includes(input));
      this.setState({
        isLoading: false,
        searchList: searchRes
      });

    } else {
      getMovieTop250All(res => {
        this.setState({
          isLoading: false,
          searchList: res
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
      <div className={styles.search}>
        <div 
          className="center-content"
          style={{ 
            display: this.props.location.pathname.includes("/movie-detail/") 
            ? 'none' 
            : 'block' 
          }}
        >
          <Search 
            value={input}
            onChange={(val) => this.onChange(val)} 
            onConfirm={(val) => this.onConfirm(val)} 
          />

          <MovieItem movieList={searchList} toDetail={(id: string) => this.toDetail(id)} />
    
          {isLoading && <Loading />}

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
      <section className="center-content desc">
        <div>豆瓣电影搜索Api已挂。。。</div>
        <div>不知道其他Api还能活多久。。。</div>
        <div>目前的搜索结果来自Top250。。。</div>
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
