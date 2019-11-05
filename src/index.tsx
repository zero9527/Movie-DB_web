import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/store-rematch';
import AxiosConfig from './api';
import Router from './router';
import './index.scss';
// import registerServiceWorker from './registerServiceWorker'; 

setTimeout(() => {
  const whiteLoading = document.querySelector('#white-loading');
  document.body.removeChild(whiteLoading!);
}, 0);

const Loading = () => (<div>loading...</div>);

AxiosConfig(); // 初始化 axios

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.Suspense>,
  document.getElementById('root') as HTMLElement
);

// registerServiceWorker();
