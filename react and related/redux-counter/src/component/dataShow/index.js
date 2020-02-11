import React from 'react';
import {Add_num,Sub_Num} from '../../store/reducer';
import { connect } from 'react-redux';
class DataShow extends React.Component{
    componentDidMount(){
        // console.log(this.props)
    }
    handleAddClick=()=>{
        this.props.addClick();
    }
    handleSubClick=()=>{
        this.props.subClick();
    }
    render(){
        const data = this.props.num;
        return (
            <div>
                <div onClick={this.handleAddClick}>加加</div>
                <div onClick={this.handleSubClick}>减减</div>
                <div> {data} </div>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    console.log(state);
    return {num:state.num};
}
const mapDispatchToProps= (dispatch)=>{
    return {
        addClick: ()=>dispatch(Add_num()),
        subClick: ()=>dispatch(Sub_Num())
    }
}
const HOCDataShow = connect(mapStateToProps,mapDispatchToProps)(DataShow);
export default HOCDataShow;