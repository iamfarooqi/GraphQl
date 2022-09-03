
import AddClient from './components/AddClient';
import GetClient from './components/GetClient';
import { Routes, Link, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="form">

      <Link to='/add-Client'>Add Client</Link>
      <Link to='/get-Client'>Get Client</Link>
      <Routes>
        <Route>
          <Route path="/add-Client" element={<AddClient />} />
          <Route path="/get-Client" element={<GetClient />} />
        </Route>
      </Routes>
      {/* <AddClient /> */}

    </div>
  );
}

export default App;
