import * as React from 'react';
import loadingImg from '@/assets/loading.gif';
import styles from './loading.scss';

/**
 * 路由跳转 Loading组件
 */
function Loading() {
  return (
    <div className={styles['loading-wrapper']}>
      <img src={loadingImg} alt=""/>
    </div>
  );
}

export default Loading;
