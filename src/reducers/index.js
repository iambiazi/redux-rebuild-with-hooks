export const initialState = {
  data: [],
};

const reducer = (state, action) => {
  const prevData = state.data ? [...state.data] : [];
  switch(action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        data: [...prevData, action.payload],
      };
    case "RESET_DATA":
      return initialState;
    default:
      return state;
  }
};

export default reducer;




