import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import PictureContainer from '../PictureContainer';
import Mheader from '../Mheader'
import Mmenu from '../Mmenu';


class IndexPage extends React.Component {

  render() {
    return (
      <div>
         <Mheader></Mheader>
         <Mmenu></Mmenu>
         {/* <Loading></Loading> */}
      </div>
      );
  }

}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
