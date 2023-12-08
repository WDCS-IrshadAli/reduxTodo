import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import Todos from './reduxToolkitTodo/components/Todos';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/todos" element={<Todos />} />

            <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
