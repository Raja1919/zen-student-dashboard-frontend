import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/UserAuthendication/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Class from "./Components/Class/Class";
import Task from "./Components/Tasks/Task";
import Webcode from "./Components/Webcode/Webcode";
import Home from "./Components/Home/Home";
import Signup from "./Components/UserAuthendication/Signup/Signup";
import Resetpassword from "./Components/UserAuthendication/Resetpassword/Resetpassword";
import Savepassword from "./Components/UserAuthendication/Savepassword/Savepassword";
import Profile from "./Components/Profile/Profile";
import Dashboard from "./Components/Dashboard/Dashboard";
import Syllabus from "./Components/Syllabus/Syllabus";
import Application from "./Components/Application/Application";
import Certificate from "./Components/Certificate/Certificate";
import Interviewtask from "./Components/InterviewTask/InterviewTask";
import Capstone from "./Components/Capstone/Capstone";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<Resetpassword />} />
        <Route path="/save-new-password/:resetToken" element={<Savepassword />}/>
        <Route path="" element={<Home />}>
          <Route path="/class" element={<Class />} />
          <Route path="/task" element={<Task />}/>
          <Route path="/webcode" element={<Webcode />}/>
          <Route path="/user" element={<Profile  />} />
          <Route path="/dashboard" element={<Dashboard  />} />
          <Route path="/syllabus" element={<Syllabus  />} />
          <Route path="/application" element={<Application  />} />
          <Route path="/certificate" element={<Certificate  />} />
          <Route path="/interviewTask" element={<Interviewtask  />} />
          <Route path="/capstone" element={<Capstone  />} />
          <Route path="/leaderboard" element={<Leaderboard  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
