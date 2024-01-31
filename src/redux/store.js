import { createStore ,applyMiddleware} from 'redux';
import courseReducer from './courseData/courseReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(courseReducer,composeWithDevTools(applyMiddleware(logger)));
export default store;
