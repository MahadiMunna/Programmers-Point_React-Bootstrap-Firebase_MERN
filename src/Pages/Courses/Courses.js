import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>Available courses are here: </h2>
            {
                allCourses.map(course=><CourseCard key={course.id} course={course}></CourseCard>)
            }
        </div>
    );
};

export default Courses;