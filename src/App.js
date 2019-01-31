import React from 'react';
import {Store, Provider} from './store';
import Controls from './Controls';
import Message from './Message';

const App = () => {
  return (
    <div>
      <Provider>
        <Controls />
        {/*with connect*/}
        <Message />
      </Provider>
    </div>
  );
};

export default App;

