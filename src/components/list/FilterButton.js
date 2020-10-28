import { Visibility } from '../../actions';
import {connect} from 'react-redux';
import Button from './Button';

const mapStateToProps = (state,ownProps)=>({
    current : ownProps.filter === state.Visibility
})

const mapDispatchToProps = (dispatch , ownProps)=>({
    onclick: ()=> dispatch(Visibility(ownProps.filter))
})




export default connect(mapStateToProps,mapDispatchToProps)(Button)