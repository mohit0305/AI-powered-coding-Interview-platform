import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {/* {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))} */}
          <Grid item xs={5} sm={5} md={5}>
            {/* <Item>xs=2</Item> */}
            <Container maxWidth="sm">
            <div style={{
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                height: "50vh", width: "50vw", display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize:"45px",
                color:"#163b87"
            }}>
                Empower Your Interview<br /> Skills with our AI<br/>guidance
            </div>
            <div style={{
                alignItems: "center",
                justifyContent: "center",
                fontSize:"18px"
            }}>
                The <b style={{color:"green"}}>First Ever AI Powered Coding Interview Platform</b> which will enable companies to hire and students to work on their coding interview skills 
            </div>
            <Link style={{padding:"40px"}} to="/conversation"><Button variant="contained"  >
                                Start Interview
                            </Button></Link>
        </div>
            </Container>
          </Grid>
          <Grid item xs={4} sm={4} md>
            <Box component="main" sx={{ p: 3 }}>
              {/* <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis animi ex? Veritatis, quae magnam voluptatum non voluptate dolorem repellendus alias ea vitae. Molestias veniam vel possimus ullam similique ex maiores? Autem amet aliquid accusantium at nesciunt laboriosam exercitationem animi. Odit architecto ipsum earum veniam sint natus, asperiores itaque ipsa veritatis maxime molestias recusandae officiis quibusdam nam expedita quo impedit incidunt aut ex, tenetur ut! Officia, quidem.
              </Typography> */}
              <img src={process.env.PUBLIC_URL+"/coding.png"} style={{height:"50vh"}} />

            </Box>
          </Grid>
          {/* <Grid item xs={2} sm={4} md={4}>
              <Item>xs=2</Item>
            </Grid> */}
        </Grid>
      </Box>
    </div>
  )
}

export default Home;