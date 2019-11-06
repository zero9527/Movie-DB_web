import AuthRoute from '@/routes/auth-route';
import * as React from 'react';
import Loadable from '@loadable/component';

const Home = Loadable(() => import('@/views/home'));
const SearchList = Loadable(() => import('@/views/search-list'));
const Detail = Loadable(() => import(/* webpackPrefetch: true */ '@/views/movie-detail'));

// home
export default [
  <AuthRoute 
    key="search"
    path="/search"
    render={() => (
      <SearchList>
        <AuthRoute 
          exact={true} 
          path="/search/movie-detail/:id" 
          component={Detail} 
        />
      </SearchList>
    )}
  />,
  <AuthRoute 
    key="home" 
    path="/" 
    render={() => (
      <Home>
        <AuthRoute 
          exact={true} 
          path="/movie-detail/:id" 
          component={Detail} 
        />
      </Home>
    )}
  />
]
