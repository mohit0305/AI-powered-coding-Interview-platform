import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Conversation from "./Components/Conversation"
import Conversation2 from "./Components/Conversation2"
import Editor from "./Components/Editor"
import EndInterview from "./Components/EndInterview"
// import { fetchQuestion } from './Api/index';

const problems = [
  {prob : 'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
   inp1 : ['Input : nums = {3, 10, 2, 1, 20}', 'Output : 3' ],
   inp2 : ['Input : nums = {50, 3, 10, 7, 40, 80}', 'Output : 4'],
   inp3 : ['Input : nums = {3, 2} ', 'Output : 1']},
   {prob : 'Given an array, find the most frequent element in it.',
   inp1 : ['Input : nums = {1, 3, 2, 1, 4, 1} ', 'Output : 1' ],
   inp2 : ['Input : nums = {1,2,3,2}', 'Output : 2'],
   inp3 : ['Input : nums = {2,3,2} ', 'Output : 2']},
   {prob : ' Given an array, find the largest element in the given array.',
   inp1 : ['Input : nums = {10, 20, 4} ', 'Output : 20' ],
   inp2 : ['Input : nums = {20, 10, 20, 4, 100}', 'Output : 100'],
   inp3 : ['Input : nums = {1,5}', 'Output : 5']}
];
const randomIndex = Math.floor(Math.random() * problems.length);
const selectedProblem=problems[randomIndex];

function App() {

  // const problems = [
  //   "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. For example, 'ace' is a subsequence of 'abcde'. A common subsequence of two strings is a subsequence that is common to both strings.",
  //   ' Write a program to check if a given number is prime.',
  //   ' Write a program to calculate the factorial of a number.',
  // ];

    // const [selectedProblem, setSelectedProblem] = useState('');
    // const randomIndex = Math.floor(Math.random() * problems.length);
    // // setSelectedProblem(problems[randomIndex]);
    // const selectedProblem=problems[randomIndex];
    // console.log(selectedProblem);


  return (
    <BrowserRouter>
      {/* <Suspense fallback={<div className='App'><Loader margin /></div>}> */}
      <div className="App" style={{backgroundImage: "url(background.jpg)",backgroundRepeat: "no-repeat",backgroundAttachment: "fixed", height:"100vh"}}>
      {/* <img src={process.env.PUBLIC_URL+"/background.png"} style={{height:"100vh", visibility:"50%"}} /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/conversation" exact element={<Conversation />} />
          <Route path="/conversation2" exact element={<Conversation2 problem={selectedProblem} />} />
          <Route path="/editor" exact element={<Editor selectedProblem={selectedProblem} />} />
          <Route path="/endInterview" exact element={<EndInterview />} />
        </Routes>
      </div>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
