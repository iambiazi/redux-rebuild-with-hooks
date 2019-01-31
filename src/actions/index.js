export const submitData = (str) =>
  ({type: 'FETCH_DATA', payload: str});

export const resetData = () =>
  ({type: 'RESET_DATA', payload: null});

