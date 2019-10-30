import * as React from 'react';
import styles from './search.scss';

const { useState, useEffect } = React;

export interface Props {
  value?: string,
  onChange?: (input: string) => void,
  onConfirm?: (input: string) => void
}

/**
 * 输入框
 */
function Search(props: Props) {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(props.value || '');
  }, [props.value]);

  function onChange(e: any) {
    const value = e.currentTarget.value;
    setInput(value);
    if (props.onChange) props.onChange(value);
  }

  function onKeyDown(e: any) {
    if (e.keyCode === 13) onConfirm();
  }

  function onConfirm() {
    if (props.onConfirm) props.onConfirm(input);
  }

  function clear() {
    setInput('');
  }

  return (
    <div className={styles.search}>
      <i className={`iconfont icon-search-outline ${styles['search-icon']}`} />
      <input 
        className={styles.input}
        type="text" 
        placeholder="输入关键字，回车搜索"
        value={input} 
        onChange={onChange} 
        onKeyDown={onKeyDown} 
      />
      {input !== '' && 
        <i 
          className={`iconfont icon-changyongtubiao-mianxing-8 ${styles['clear-icon']}`} 
          onClick={clear} 
        />
      }
    </div>
  );
}

export default Search;
