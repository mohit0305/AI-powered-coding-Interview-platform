import React from 'react';
import { useState, useEffect } from 'react';
import Problem from './Problem';
import CodeEditor from './CodeEditor';
import './Problem.css';
import './CodeEditor.css';
import './Editor.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';


// const problems = [
//     "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0."+"" + "" + " A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters."+""+" "+ "For example, 'ace' is a subsequence of 'abcde'. A common subsequence of two strings is a subsequence that is common to both strings.",
//     ' Write a program to check if a given number is prime.',
//     ' Write a program to calculate the factorial of a number.',
//   ];

const Editor = (props) => {
  // const [selectedProblem, setSelectedProblem] = useState('');

  //   useEffect(() => {
  //     generateRandomProblem();
  //   }, []);

  //   const generateRandomProblem = () => {
  //     const randomIndex = Math.floor(Math.random() * problems.length);
  //     setSelectedProblem(problems[randomIndex]);
  //   };
  // console.log(props);


  return (<>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block', textAlign: 'left' } }}
          >
            Coding Platform
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <div className="Editor">
      <div className="problem-statement">
        <Problem problem={props.selectedProblem} />
      </div>
      
      <div className="code-editor" style={{marginTop:"60px"}}>
        <CodeEditor problem={props.selectedProblem} />
      </div>
    </div>
  </>
  );
}

export default Editor;