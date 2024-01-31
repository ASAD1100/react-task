
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursesSuccess } from '../../redux/actions/courseAction';
import axios from 'axios';
import { useEffect } from 'react';

function Courses() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('../../assets/data.json');
        dispatch(fetchCoursesSuccess(response.data));
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [dispatch]);

  return (
    <div className="courses">
      {/* Render your course listing and details components here */}
    </div>
  );
}

export default Courses;
