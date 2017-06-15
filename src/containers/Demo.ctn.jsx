import React from 'react';
import PropsType from 'prop-types';
import DemoCpn from '@components/Demo.cpn';
import { connect, actions } from '@store';

@connect
export default class DemoCtn extends React.Component {
    constructor(props) {
        super(props);
    }
    static mapStateToProps(state) {
        return {
            n: state.demoReducer
        }
    }
    static mapDispatchToProps(dispatch) {
        return {
            onTodoClick: (n) => {
                dispatch(actions.demoAction.addDemo(n));
            }
        }
    }
    render() {
        return (
            <div>
              <DemoCpn n={ this.props.n }></DemoCpn>
              <button onClick={ () => this.props.onTodoClick(this.props.n) }>add one</button>
            </div>
        )
    }
}

