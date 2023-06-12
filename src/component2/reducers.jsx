const initialState = {
    user: null,
  };
  
  const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_UP':
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default signUpReducer;
  