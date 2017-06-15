import actions from './actions';
import reducers from './reducers';
import { createStore } from 'redux';
import { connect as con } from 'react-redux';

function connect(target) {
    return con(target.mapStateToProps, target.mapDispatchToProps)(target);
}

let store = createStore(reducers);
export { actions, store, reducers, connect }

