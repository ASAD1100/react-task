export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});
 