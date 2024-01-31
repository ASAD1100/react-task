import "./home.css";
import Navbar from "../../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesSuccess } from "../../../redux/courseData/courseAction";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../card/Card";
import data from '../../../assets/data.json'

const Home = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  console.log(courses);
  useEffect(() => {
    const fetchCourses = () => {
      try {
        dispatch(fetchCoursesSuccess(data));
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="wrapper">
        <div className="header">
          <Navbar/>
        </div>
        <div className="courses"> 
        {courses.map(courses => (
    <div key={courses.id}>
       <Card
        title={courses.title}
        topic={courses.name}
        instructor={courses.instructor}
        description={courses.description}
        duration={courses.duration}
        schedule={courses.schedule}
        location={courses.location}
        
        />
    </div>
  ))}
        
        </div>
      </div>
    </div>
  );
};

export default Home;
