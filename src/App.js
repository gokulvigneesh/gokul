import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./navbar";
import NavBar1 from "./component1/Task1";
import SignUpForm from "./component2/form";
import AutocompleteComponent from "./component3/autocomplete";
import ImageGallery from "./component3/gallery";
import Timer from "./component3/timer";
import ImageZoom from "./component3/zoom";
import store from './component2/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    
      <>
        <NavBar />
        <Routes>
          <Route path="/component1/Task1" element={<NavBar1 />} />
          <Route path="/component2/form" element={
            <Provider store={store}>
              <SignUpForm />
            </Provider>
          } />
          <Route path="/component3/autocomplete" element={<AutocompleteComponent />} />
          <Route path="/component3/gallery" element={<ImageGallery />} />
          <Route path="/component3/timer" element={<Timer />} />
          <Route path="/component3/zoom" element={<ImageZoom />} />
        </Routes>
      </>
   
  );
};

export default App;
