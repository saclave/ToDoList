import { connect } from "react-redux";
import CounterGroup from "../components/CounterGroup";


const mapStatetoProps = state => ({
    size: state.size, 
})

const CounterGroupContainer = connect(mapStatetoProps)(CounterGroup);

export default CounterGroupContainer;