
import './App.css';
import Navbar from './components/Navbar';

import ImageList from './components/ImageList';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FavList from './components/FavList';
import UserDetails from './components/UserDetails';
function App() {
  return (
    <div>
     <Router>
      <Navbar/>
    

      <Routes>
          <Route exact path="/" element={ <ImageList cat="general"/>}>
          </Route>
          <Route exact path="/favorite" element={<FavList/>}>
          </Route>
          <Route exact path="/general" element={<ImageList cat="general"/>}>
          </Route>
          <Route exact path="/sports" element={<ImageList cat="sports"/>}>
          </Route>
          <Route exact path="/entertainment" element={<ImageList cat="entertainment"/>}>
          </Route>
          <Route exact path="/cricket" element={<ImageList cat="cricket"/>}>
          </Route>
          <Route exact path="/nature" element={<ImageList cat="nature"/>}>
          </Route>
          <Route exact path="/animal" element={<ImageList cat="animal"/>}>
          </Route>
          <Route exact path="/mountain" element={<ImageList cat="mountain"/>}>
          </Route>
          <Route exact path="/building" element={<ImageList cat="building"/>}>
          </Route>
          <Route exact path="/plant" element={<ImageList cat="plant"/>}>
          </Route>
          <Route exact path="/business" element={<ImageList cat="business"/>}>
          </Route>
          <Route exact path="/user/:userID" element={<UserDetails/>}>
          </Route>
        </Routes>
      
       </Router>
    </div>
  );
}

export default App;
