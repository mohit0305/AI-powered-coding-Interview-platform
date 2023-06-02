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


import { Navigate, Link } from "react-router-dom";

import { Approach} from '../Api/index';



function Conversation2({ problem }) {

    const [mic, setmic] = useState(null)
    const [allowCoding, setallowCoding] = useState(false)
    const [aiText, setaiText] = useState("There is given problem statement, you need to explain your approach for this")
    const [utterance, setUtterance] = useState(null);
    const [userText, setuserText] = useState(null);
    const [ques, setques] = useState(null);
    const [user, setUser] = useState(null);
    const [count, setcount] = useState(0);
    const [score, setscore] = useState(0);
    console.log(user);
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile'))?.name)
        setques(problem?.prob);
    }, [user])

    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    // const handleAudioSubmit = (e) => {
    //     e.preventDefault();
    //     alert(e.target.text.value);
    // };

    useEffect(() => {
        setuserText(transcript);
        console.log(userText);
    }, [transcript]);

    useEffect(() => {
        if (mic) {
            SpeechRecognition.startListening({
                continuous: true, onresult: (event) => {
                    // console.log(event.results[event.results.length -1][0].transcript);
                },
            });
            console.log("Now listening...");
        }
        else if (mic !== null) {
            SpeechRecognition.stopListening();
            console.log("Stopped Listening");
           
            Approach({
                question:problem.prob,
                approach:userText}).then((data) => {
                setscore(data);
                // setallowCoding(true);
                setcount(count + 1);
            }

            ).catch((e) => console.log(e));
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
        setaiText("There is given problem statement, you need to explain your approach for this");
        handlePlay();
    }

    const handlePlay = () => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(aiText);
        setUtterance(u);
        synth.speak(utterance);

        return () => {

            synth.cancel();
            setaiText(null);
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
                <Grid item xs={12} sx={{ paddingTop: "20px", fontSize: "24px", background: "rgba(100,0,0,0.2)" }}>
                    {ques ? ques : ""}
                </Grid>
                <Grid item xs={12} sx={{ padding: "2px", fontSize: "15px", background: "rgba(100,0,0,0.2)" }}>



                    <p>{problem.inp1[0]}
                        {problem.inp1[1]}</p>

                    <p>{problem.inp2[0]}
                        {problem.inp2[1]}</p>

                    <p>{problem.inp3[0]}
                        {problem.inp3[1]}</p>


                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>

                        <Grid item>
                            <User user={"ai"} on={mic ? false : true} />
                            {/* <Link to="/editor">
                                <Button variant={allowCoding ? "contained" : "disabled"} sx={{ margin: "40px" }}>
                                    Proceed to Coding Part
                                </Button>
                            </Link> */}

                            <Button variant="contained" onClick={setText} sx={{ margin: "20px" }}>Start</Button>
                            <Link to="/endInterview"><Button variant="contained" color="error">
                                Stop Interview
                            </Button></Link>
                        </Grid>
                        <Grid item>
                            <User user={user} on={mic} />
                            <Button onClick={handelMic} variant="contained" sx={{ margin: "20px" }}>
                                {mic ? "Stop" : "Open Mic"}
                            </Button>
                        </Grid>


                    </Grid>

                </Grid>

                {score !== 0 && score < 5 && count === 2 ?
                    <Navigate to={"/endInterview"} replace={true} /> : <></>
                }
                {score !== 0 && score >= 5 && count !== 0 ?
                    <Navigate to={"/editor"} replace={true} /> : <></>
                }


            </Grid>
        </>
    );
}



export default Conversation2;