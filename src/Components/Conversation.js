import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import User from "./User"
import { Intro } from '../Api';
import { Link } from 'react-router-dom';

function Conversation(props) {

    const [mic, setmic] = useState(null)
    const [allowCoding, setallowCoding] = useState(false)
    const [aiText, setaiText] = useState("Hi, I am AI, Let's start the interview with your introduction and make sure to highlight your key technical strengths")
    const [utterance, setUtterance] = useState(null);
    const [userText, setuserText] = useState(null);

    const [user, setUser] = useState(null)
    console.log(user);
    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('profile'))?.name)
    }, [user])

    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    // const handleAudioSubmit = (e) => {
    //   e.preventDefault();
    //   alert(e.target.text.value);
    // };

    useEffect(() => {
        setuserText(transcript);
        console.log(userText);
      }, [transcript]);

    useEffect(() => {
        if(mic){
            SpeechRecognition.startListening({ continuous: true, onresult : (event) => {
                // console.log(event.results[event.results.length -1][0].transcript);
              }, });
        console.log("Now listening...");
    }
        else if(mic!==null){
          SpeechRecognition.stopListening();
          console.log("Stopped Listening");
          Intro(userText).then(
            setallowCoding(true)
          ).catch((e)=>console.log(e));
        };
      }, [mic]);

    useEffect(() => {
        // const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(aiText);
        setUtterance(u);

        //   return () => {
        //     synth.cancel();
        //   };
    }, [aiText]);

    const setText = () => {
        setaiText("Hi, I am AI, Let's start the interview with your introduction and make sure to highlight your key technical strengths");
        handlePlay();
    }

    const handlePlay = () => {
        const synth = window.speechSynthesis;
        synth.speak(utterance);
        return () => {
            synth.cancel();
        };
    };

    const handelMic = () => {
        setmic(!mic);
    }
   

    return (
        <>
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
            <br /><br /><br /><br />
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>

                        <Grid item>
                            <User user={"ai"} on={mic?false:true}/>
                            <Link to="/conversation2">
                            <Button  variant={allowCoding ? "contained" : "disabled"} sx={{ margin: "40px" }}>
                                Proceed to DSA round
                            </Button>
                            </Link>
                           
                            <Button variant="contained" onClick={setText}>Start</Button>
                            <Link to="/endInterview"><Button variant="contained" color="error" sx={{ margin: "10px" }}>
                                Stop Interview
                            </Button></Link>
                        </Grid>
                        <Grid item>
                            <User user={user} on={mic}/>
                            <Button onClick={handelMic} variant="contained" sx={{ margin: "40px" }}>
                                {mic ? "Stop" : "Open Mic"}
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
                {/* <form onSubmit={handleAudioSubmit}>
        <textarea name="text" rows={10} cols={50} value={transcript}></textarea>
        <div className="btn-container">
          <span onClick={resetTranscript} className="btn">
            Clear Text
          </span>
          <button type="submit" className="btn">
            Print Text
          </button>
        </div>
      </form> */}
            </Grid>
        </>
    );
}



export default Conversation;