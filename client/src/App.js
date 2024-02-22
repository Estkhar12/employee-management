import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersCollection from './components/UsersCollection';
import SubmitFrom from './components/form/SubmitFrom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<SubmitFrom />} />
            <Route path="employees" element={<UsersCollection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
