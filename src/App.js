import React from 'react';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { Home } from './components/Home'
import { UserLogin } from './components/user/UserLogin'
// import { Auth } from './components/user/auth'
// import { Navbar } from './components/Navbar';
// import { Person } from './components/Person';
import { Layout } from './components/Layout';
import { UserRegistration } from './components/user/UserRegistration';
import { UserVerifyEmail } from './components/user/UserVerifyEmail';
import { AuthProvider } from './AuthProvider';
import { CourseAdmin } from './components/course/admin/';
import { CourseForm } from './components/course/admin/Form';
import { CourseList } from './components/course/CourseList';
import { CourseShow } from './components/course/CourseShow';
import { Admin } from './components/Admin';
import { Department } from './components/department';
import { H2 } from './components/utilities/Headline';
import { QuestionShow } from './components/course/quiz/QuestionShow';

const NoMatch = () => {
  return ( 
    <H2>
      There's nothing here: 404
    </H2> 
  )
};

const App = () => {
 
  return (
    <AuthProvider>
      <Router>
        <Layout>
          
          <Routes>
            <Route path="/" element={<Home />} >
              <Route index element={<Home />} />
            </Route>
            
            <Route path='courses' element={<CourseList />} />
            {/* <Route path='courses/:objectId' element={<CourseShow  />} /> */}
            <Route path='courses/*' element={<NoMatch />} />

            
            <Route path="admin" element={<Admin />} >
              <Route path='courses' element={<CourseAdmin />} />
              <Route path='courses/:objectId' element={<CourseForm />} />
              <Route path='courses/new' element={<CourseForm />} />
              <Route path="department" element={<Department />} />
            </Route>
            

            <Route path="/signup" element={<UserRegistration />} />
            <Route path="/verify-email" element={<UserVerifyEmail />} />
            {/* <Route path="/person" element={<Person />} /> */}
            <Route path="/login" element={<UserLogin />} />

            {/* <Route path="/auth" element={<Auth />} /> */}
            {/* <Route path="/department/create" element={<CreateDepartment />} /> */}
            {/* <Route path="/department/show" element={<ShowDepartment />} /> */}
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};


export default App;

