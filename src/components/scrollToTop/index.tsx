import * as React from 'react';
import styles from './scrollToTop.scss';

const { useState, useEffect } = React;

/**
 * scrollToTop
 */
function scrollToTop() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const height = window.innerHeight;

    // 滚动距离大于一屏高度则显示，否则隐藏
    setShowBtn(() => (
      document.body.scrollTop >= height
      || document.documentElement.scrollTop >= height
    ));
  }, [document.body.scrollTop, document.documentElement.scrollTop]);

  function toTop() {
    if (window.scroll) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      
    } else {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  return (
    <div 
      className={
        CSS.supports('position', 'sticky') 
          ? styles['top-btn-sticky'] 
          : styles['top-btn-fixed']
      } 
      style={{visibility: showBtn ? 'visible' : 'hidden'}}
      onClick={toTop}
    >
      <i className="iconfont icon-arrow-upward-outline" />
    </div>
  );
}

export default scrollToTop;
