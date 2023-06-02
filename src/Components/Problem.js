import { Grid } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';





const Problem = ({ problem }) => {
  const [ques, setques] = useState(problem.prob)

  return (
    <div>
      {/* <div>Problem Statement</div> */}
      <Grid sx={{ flexGrow: 1,paddingTop: "80px"}} container spacing={2} >
      <Grid item xs={12} sx={{ paddingTop: "20px", fontSize: "35px",  }}>
          
          Problem Statement
        </Grid>
        <br/>
        <Grid item xs={12} sx={{ paddingTop: "20px", fontSize: "25px", }} >
        
          {ques ? ques : ""}
        </Grid>
        <Grid item xs={12} sx={{ padding: "2px", fontSize: "18px",  }}>



          <p>{problem.inp1[0]}
            {problem.inp1[1]}</p>

          <p>{problem.inp2[0]}
            {problem.inp2[1]}</p>

          <p>{problem.inp3[0]}
            {problem.inp3[1]}</p>


        </Grid>
      </Grid>
    </div>
  );
};

export default Problem;