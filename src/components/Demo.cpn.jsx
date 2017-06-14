import React from 'react';
import propsType from 'prop-types';
export default function(props) {
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