import React from 'react'
import styled from 'styled-components'

const Grid = styled.section`
display:grid;
place-content:center center;
height:80vh;
width:100%;

font-family: acumin-condensed-pro, sans-serif;
color: grey;
`

const UnderConstruction = () => {
  return (
    <Grid>
        <p>Sorry this webpage is under construction at the moment.</p>
    </Grid>
  )
}

export default UnderConstruction