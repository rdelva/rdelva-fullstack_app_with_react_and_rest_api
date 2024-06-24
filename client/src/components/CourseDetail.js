//import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';


const CoursesDetail = () => {
  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo"><Link to="/">Courses</Link></h1>
        <Nav />
      </div>
    </header>
  );
}

export default CoursesDetail;