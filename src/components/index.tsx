import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Container } from './styles';

export const CoursesList: React.FC = () => {
  const courses: any = useSelector<any>(state => state.data);
  const dispatch: any = useDispatch();
  const [curses, setCurses] = useState('');

  function addCourses(){
    dispatch({ type:'ADD_COURSE', title: curses});
   }

  return (
            <div>
              <ul>
                {courses.map((courses: any) =>(
                  <li>{courses}</li>
                ))}               
              </ul> 
              <input type="text" onChange={(e: any) => setCurses(e.target.value)} />
              <button onClick={addCourses}>ADD</button>       
            </div>
        );   
  
}
