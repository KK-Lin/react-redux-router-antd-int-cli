import React from 'react';

export default function listWarp(Component) {
    return function(props) {
        if (!Component)
            throw new Error("高阶函数需要一个组件");

        let className = ["km-list"];
        className.push(props.className);
        return (
            <div className={ className.join(" ") }>
              <ul className="km-list-warp">
                { props.dataSource.map((data, index) => {
                      return (
                          <li key={ index } className="km-list-item">
                            <Component {...data}/>
                          </li>
                      )
                  }) }
              </ul>
            </div>
        )
    }
}


function GeneralComponent(props) {
    return (
        <div className="km-list-general-component">
          <p>
            { props.name }
          </p>
        </div>
    )
}
export let GeneralList = listWarp(GeneralComponent);