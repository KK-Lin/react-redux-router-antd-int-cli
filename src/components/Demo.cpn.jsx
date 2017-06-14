import React from 'react';
import PropsType from 'prop-types';
export default function DemoCpn(props) {
    let list = [];
    for (let i = props.n; i--;) {
        list.push(<p key={ i }>Demo
                    { i }
                  </p>);
    }
    return (
        <div>
          { list }
        </div>
    )
}

DemoCpn.propTypes = {
    n: PropsType.number
}