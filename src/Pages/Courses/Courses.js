import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className='mt-4'>
            <h2 className='text-center mb-3 text-primary'>Available Courses</h2>

            <div className='row gap-4 mx-5 mb-5'>
                {
                    allCourses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;