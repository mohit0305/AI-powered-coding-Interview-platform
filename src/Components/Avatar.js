import { Grid, Typography } from '@mui/material'
import React from 'react'

const Avatar = (props) => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "yellow", width: props.height, height: (props.height * 1.3), border: "2px solid black", borderRadius: "50%", fontSize: props.fontSize, }}
        >
            <div style={{ height: props.height, marginBottom: props.marginBottom }}>
                {props.name?.slice(0,1)}
            </div>
        </Grid>
    )
}

export default Avatar

// height: "80px", marginBottom: "20px", fontSize:"68px" for original