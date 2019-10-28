import * as React from 'react';
import styles from './scrollToTop.scss';

/**
 * scrollToTop
 */
function scrollToTop() {
  function toTop() {
    const doc = document.documentElement || document.body;
    doc.scrollTop = 0;
  }

  return (
    <div className={styles['top-btn']} onClick={toTop}>
      <i className="iconfont icon-arrow-upward-outline" />
    </div>
  );
}

export default scrollToTop;
