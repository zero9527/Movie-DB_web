import AuthRoute from '@/routes/auth-route';
import * as React from 'react';
import Loadable from '@loadable/component';

const Home = Loadable(() => import('@/views/home'));

// home
export default [
  <AuthRoute 
    key="home" 
    path="/" 
    render={() => (
      <Home>
        <AuthRoute 
          exact={true} 
          path="/movie-detail/:id" 
          component={Loadable(() => import('@/views/movie-detail'))} 
        />
      </Home>
    )}
  />
]
