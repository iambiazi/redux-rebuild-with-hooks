import React, {useState} from 'react';
import connect from './connect';
import {submitData, resetData} from './actions';

const Controls = ({dispatch, submitData, resetData}) => {
  const [text, updateText] = useState('');

  const handleChange = e => {
    updateText(e.target.value);
  };

  const updateData = () => {
    submitData(text);
  };

  const reset = () => {
    resetData();
  };

  return (
    <div>
      <form>
        <input type="text" value={text} onChange={handleChange} />
      </form>
      <button onClick={updateData}>Fetch Data</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default connect(
  () => ({}),
  {submitData, resetData},
)(Controls);
