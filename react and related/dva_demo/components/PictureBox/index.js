import styles from './index.less';
function PictureBox(props) {
    return (
        <div className={styles.container}  key={props.picSrc}>
            <div className={styles.picBox}> <img src={`http://pao1opmq0.bkt.clouddn.com/${props.picSrc}`} alt=""/></div>
            <div className={styles.des}><p>{props.picSrc}</p></div>
        </div>
    )
}
export default PictureBox;
