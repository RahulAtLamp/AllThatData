import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/profile/Profile';
import Home from './components/Home';
import Registration from './components/registration/Registration';
import Files from './components/organization/Files';
import Organization from './components/organization/Organization';
import CreateOrganisation from './components/CreateOrganisation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route eaxct path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/files" element={<Files />} />
          <Route path="/organisation" element={<Organization />} />
          <Route path="/create_org" element={<CreateOrganisation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
