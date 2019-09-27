import React , { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import PictureBox from '../../components/PictureBox';
import Masonry from 'react-masonry-component';
import Loading from '../../components/Loading';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class PictureContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch( {
      type: 'getPic/fetchPic',
      payload: {
      }
    })
  }

  render() {
    // console.log(typeof this.props.data);
    // console.log(this.props.data);
    let imgBox,imgDom;
    let { isLoading } = this.props;
    // isLoading = true;
    if(this.props.data) {
      // console.log(this.props.data[0].key);
      imgBox = this.props.data.map( (v,k) => (<PictureBox key={v.key} picSrc={v.key}></PictureBox>))
      imgDom = isLoading ?  (<Loading></Loading>):  
      (<div className={styles.picWaterFallBox}>
        <Masonry
          className={'my-gallery-class'} // default ''
          elementType={'div'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {imgBox}
      </Masonry> 
    </div> ) 
    }

    
    // console.log('dddd');
    return (
      <div>{imgDom}</div>
      );
  }
  componentDidMount() {
    // console.log('did',this.props);
  }

}

PictureContainer.propTypes = {
  
};

// mS2P 返回对象 { data: state.data } 作用在组件上就好比 <PictureBox data={state.data} />
const mapStateToProps = (state) => {
  console.log("pictureContainer state",state);
  return {
    isLoading:state.loading.effects['getPic/fetchPic'],
    data: state.getPic.data   
  }
};

export default connect(mapStateToProps)(PictureContainer);
// export default PictureBox;
