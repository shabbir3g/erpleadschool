import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Students from './Pages/Students/Students';
import LoginRoute from './Pages/Authentication/LoginRoute/LoginRoute';
import AddStudent from './Pages/AddStudent/AddStudent';
import UpdateStudent from './Pages/UpdateStudent/UpdateStudent';


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginRoute><Login /></LoginRoute>} />
            <Route path="/login" element={<LoginRoute><Login /></LoginRoute>} />
            <Route path="/register" element={<LoginRoute><Register /></LoginRoute>} />
            <Route path="/students" element={<PrivateRoute><Students /></PrivateRoute>} />
            <Route path="/student/add" element={<PrivateRoute><AddStudent /></PrivateRoute>} />
            <Route path="/student/update/:id" element={<PrivateRoute><UpdateStudent /></PrivateRoute>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
