import React from 'react';
import PropsType from 'prop-types';
import DemoCpn from '@components/Demo.cpn';

export default class DemoCtn extends React.Component {
    constructor(props) {
        super(props);
        this.clickAction = this.clickAction.bind(this);
        this.state = {
            n: 1
        };
    }
    clickAction(e) {
        this.setState({
            n: this.state.n + 1
        })
    }
    render() {
        return (
            <div>
              <DemoCpn n={ this.state.n }></DemoCpn>
              <button onClick={ this.clickAction }>add one</button>
            </div>
        )
    }
}

