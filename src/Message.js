import React from 'react';
import {Store} from './store';
import connect from './connect';

const Message = ({data}) => {
  return (
    <div>
      {data.map((item, i) => <div key={`item-${i}`}>{item}</div>)}
    </div>
  );
};

export default connect(({data}) => ({data}))(Message);
