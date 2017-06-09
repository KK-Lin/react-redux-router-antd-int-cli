import React from 'react';
import { GeneralList } from '@components/list';
export default function() {
    let dataSource = [{
        name: 1
    }, {
        name: 1
    }, {
        name: 1
    }, {
        name: 1
    }, {
        name: 1
    }]
    return (
        <div>
          <GeneralList className="test-list" dataSource={ dataSource } />
        </div>
    )
}