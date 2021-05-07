import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store';
import { CoursesList } from './components';

export default function App() {
  return (
    <>
    <Provider store={store}>  
      <CoursesList />
    </Provider>
    </>   
  );
}


