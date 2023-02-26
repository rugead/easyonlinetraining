import React from 'react';
import { useAuth } from './AuthProvider';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './components/Home'
// import { Auth } from './components/user/auth'
import { UserLogin } from './components/user/UserLogin'
// import { Person } from './components/Person';
import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { UserRegistration } from './components/user/UserRegistration';
import { UserVerifyEmail } from './components/user/UserVerifyEmail';
import { AuthProvider } from './AuthProvider';
import { CourseAdmin } from './components/course/CourseAdmin';
import { CourseAddEdit } from './components/course/CourseAddEdit';
import { CourseList } from './components/course/CourseList';
import { CourseShow } from './components/course/CourseShow';
import { Admin } from './components/Admin';
import { Department } from './components/department';
import { H2 } from './components/utilities/Headline';

const NoMatch = () => {
  return ( 
    <H2>
      There's nothing here: 404
    </H2> 
  )
};

const PrivatRoute = ({ children } )=> {
  const {currentUser} = useAuth();
  if (!currentUser) {
    return <Navigate to="/" replace />
  }
  return children;
}


const AdminRoute = ({ children } )=> {
  const {currentUser } = useAuth();
  if (currentUser && currentUser.attributes.role === "admin") {
    return children;
  }
  return <Navigate to="/" replace />
}

const App = () => {
 
  return (
    <AuthProvider>
      <Router>
        <Navbar />  
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} >
              <Route index element={<Home />} />
            </Route>
            
            <Route path='courses' element={
              <PrivatRoute>
                <CourseList />
              </PrivatRoute>
            }>
              <Route path='courses/:courseId' element={<CourseShow  />} />        
              <Route path="*" element={<NoMatch />} />
            </Route>
            
            <Route path="admin" element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }>
              <Route path='courses' element={<CourseAdmin />} />
              <Route path='courses/new' element={<CourseAddEdit />} />
              <Route path='courses/:objectId' element={<CourseAddEdit />} />
              <Route path="courses/*" element={<NoMatch />} />
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

