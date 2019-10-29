import * as React from 'react';
import styles from './search.scss';

const { useState, useEffect } = React;

export interface Props {
  value?: string,
  onChange?: (input: string) => void,
  onConfirm?: (input: string) => void
}

/**
 * 路由跳转 Loading组件
 */
function Loading(props: Props) {
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

  return (
    <div className={styles.search}>
      <input 
        type="text" 
        placeholder="输入关键字，回车搜索"
        value={input} 
        onChange={onChange} 
        onKeyDown={onKeyDown} 
      />
    </div>
  );
}

export default Loading;
