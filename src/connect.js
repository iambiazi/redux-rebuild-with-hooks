import React, {useContext} from 'react';
import {Store} from './store';

const connect = (
  mapStateToProps = () => ({}),
  mapDispatchToProps = () => ({}),
) => WrappedComponent => props => {
  const {dispatch, state} = useContext(Store);

  const bindActionCreators = (actionCreators = {}, dpatch = dispatch) => {
    const bound = {};
    for (let creator in actionCreators) {
      if (actionCreators.hasOwnProperty(creator)) {
        bound[creator] = (...args) => dpatch(actionCreators[creator](...args));
      }
    }
    return bound;
  };

  const dispatchToProps =
    typeof mapDispatchToProps === 'function'
      ? mapDispatchToProps(dispatch, props)
      : bindActionCreators(mapDispatchToProps);

  return (
    <WrappedComponent
      dispatch={dispatch}
      {...mapStateToProps(state, props)}
      {...dispatchToProps}
    />
  );
};

export default connect;
