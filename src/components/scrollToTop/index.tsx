import * as React from 'react';
import styles from './scrollToTop.scss';

/**
 * scrollToTop
 */
function scrollToTop() {
  function toTop() {
    if (window.scroll) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      
    } else {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  return (
    <div className={styles['top-btn']} onClick={toTop}>
      <i className="iconfont icon-arrow-upward-outline" />
    </div>
  );
}

export default scrollToTop;
