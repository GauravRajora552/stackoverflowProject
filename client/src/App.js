import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";

import { fetchAllPosts } from "./actions/post";

import { Toaster } from 'react-hot-toast';
import Chatbot from "./components/Chatbot/Chatbot";


import { GrChat } from 'react-icons/gr'

function App() {

  const [isOpen, setIsOpen] = useState(false) 
  const [isVerified, setIsVerified] = useState(false) 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers());
    dispatch(fetchAllPosts());
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Toaster />
        <Navbar setIsOpen={setIsOpen}/>
        <AllRoutes />
        {isOpen ? (
          <Chatbot
            setIsOpen={setIsOpen}
            isVerified={isVerified}
            setIsVerified={setIsVerified}
          />
        )
          : <button
              className="open-chatbot"
              onClick={() => setIsOpen((prev) => !prev)}
          >
           <GrChat/>
          </button>}
      </Router>
    </div>
  );
}

export default App;


// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchAllQuestions());
//     dispatch(fetchAllUsers());
//     dispatch(fetchAllPosts());
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <AllRoutes />
//       </Router>
//     </div>
//   );
// }

// export default App;
