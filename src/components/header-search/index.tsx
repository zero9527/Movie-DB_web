import * as React from 'react';
import Search from '@/components/search';
import styles from './header-search.scss';

export interface Props {
  value?: string,
  onChange?: (input: string) => void,
  onConfirm?: (input: string) => void
}

/**
 * 头部搜索 HeaderSearch
 */
function HeaderSearch(props: Props) {
  let inputTimer: any;

  function onChange(val: string) {
    if (!props.onChange) return;
    if (inputTimer) clearTimeout(inputTimer);
    inputTimer = setTimeout(() => {
      if (props.onChange) props.onChange(val)
    }, 500);
  }

  // 搜索输入框回车
  function onConfirm(val: string) {
    if (!val) return;
    if (props.onConfirm) props.onConfirm(val);
  }
  
  return (
    <div className={`${styles['search-wrapper']} center-content`}>
      <span className={styles.title}>MovieDoB</span>&emsp;
      
      <Search 
        value={props.value}
        onChange={(val) => onChange(val)} 
        onConfirm={(val) => onConfirm(val)} 
      />
    </div>
  );
}

export default HeaderSearch;
