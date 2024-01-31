import { FETCH_COURSES_SUCCESS } from './courseAction';

const initialState = {
  courses: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
