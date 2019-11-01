import * as React from 'react';
import styles from './star.scss';

const { useState } = React;

export interface StarProps {
  readonly?: boolean,
  score?: string
}

/**
 * Star 评分
 * @param {*} readonly 只读：显示评分 
 * @param {*} score 评分：如'8.2' 
 */
function Star({
  readonly = false,
  score,
  ...props
}: StarProps) {
  const starLen = [0, 1, 2, 3, 4];
  const [scrore1, setScore1] = useState(score || 0);

  return (
    <section className={styles["m-star"]}>
      {readonly ? (
        <div className={styles["star-wrappwer"]}>
          {/* 显示评分 */}
          <div className={styles["star-score"]} style={{width: (Number(score)!/10)*100+'%'}}>
            <i className="iconfont icon-changyongtubiao-mianxing-11" />
            <i className="iconfont icon-changyongtubiao-mianxing-11" />
            <i className="iconfont icon-changyongtubiao-mianxing-11" />
            <i className="iconfont icon-changyongtubiao-mianxing-11" />
            <i className="iconfont icon-changyongtubiao-mianxing-11" />
          </div>
          <div className={styles["star-bg"]}>
            <i className="iconfont icon-changyongtubiao-mianxing-11" />
            <i className="iconfont icon-changyongtubiao-mianxing-11" />
            <i className="iconfont icon-changyongtubiao-mianxing-11" />
            <i className="iconfont icon-changyongtubiao-mianxing-11" />
            <i className="iconfont icon-changyongtubiao-mianxing-11" />
          </div>
        </div>
      ) : (
        <div className={styles["star-bg"]}>
          {starLen.map(item => (
            <i 
              key={item}
              onClick={() => setScore1(item+1)}
              className={`iconfont icon-changyongtubiao-mianxing-11 ${
                scrore1 >= item+1 ? styles['star-active'] : ''
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Star;
