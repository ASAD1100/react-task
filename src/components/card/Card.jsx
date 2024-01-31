// Card
import { useState } from "react";
import "./card.css";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
const Card = ({
  title,
  topic,
  instructor,
  description,
  duration,
  schedule,
  location,
}) => {

  const [isSyllabusOpen, setSyllabus]=useState(false)
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-content">
        <h3>
          {" "}
          <span>Sector:-</span>
          {instructor}
        </h3>
        <h3>
          <span>Topic:-</span>
          {topic}
        </h3>
       
        <h3>
          {" "}
          <span>Duration:-</span>
          {duration}
        </h3>
        <h3>
          <span>Schedule:-</span>
          {schedule}
        </h3>
        <h3>
          <span>Location:-</span>
          {location}
        </h3>
        <h3>
          <button onClick={()=>{
            isSyllabusOpen===false?setSyllabus(true):setSyllabus(false)
          }}>
            <span>syllabus {isSyllabusOpen===false? <KeyboardDoubleArrowDownIcon/>:<KeyboardDoubleArrowUpIcon/>}</span>
            </button>
      
        </h3>
        <h3 className={isSyllabusOpen===true?"open-syllabus":"close-syllabus"}>
          {description}
          
        </h3>
      </div>
    </div>
  );
};

export default Card;
