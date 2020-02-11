import React from 'react';
import styles from './index.css';

const Loading = (props) => {
  return (
      <div className={styles.roataqx_loader}>
        <div className={styles.one}></div>
        <div className={styles.two}></div>
        <div className={styles.three}></div>
      </div>
  );
};

Loading.propTypes = {
};

export default Loading;
