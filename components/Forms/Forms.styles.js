import styled from 'styled-components'

export const Form = styled.form`
box-sizing:border-box;
width:100%:
height:100%;
display: grid;
gap:1rem;
padding:1rem;
grid-template-areas: 
'f l'
'e s'
'm m';

& .firstName{
    grid-area:f;
}

& .lastName{
    grid-area:l;
}

& .email{
    grid-area:e;
}

& .subject{
    grid-area:s;
}

& .body{
    grid-area:m;
}

@media only screen and (max-width:768px){
    grid-template-areas:
    'f'
    'l'
    'e'
    's'
    'm';

}
`

export const Label = styled.label`
display:block;
width:100%;
box-sizing:border-box;
font-family: acumin-pro-condensed, sans-serif;
font-weight: bolder;
text-transform: uppercase;

@media only screen and (max-width:768px){
    font-size: 1.15rem;
}

`

export const Input = styled.input`
box-sizing:border-box;
display:block;
padding: .5rem;
width:100%;
font-family: acumin-pro, sans-serif;
font-size:1.15rem;
background: rgba(0,0,0,.025);
outline:none;
border-radius:3px;
border:2px solid rgba(0,0,0,0);
transition:outline .2s ease-in;
&::placeholder{
    opacity:.3;
}

&:focus{
    transition: border .2s ease-in;
    border: 2px solid lightgrey;
}
@media only screen and (max-width:768px){
    font-size:1.5rem;
}`

export const TextArea = styled.textarea`
display:block;
width:100%;
padding: .5rem;
box-sizing:border-box;
font-family: acumin-pro, sans-serif;
font-size:1.15rem;
resize:none;
height:10rem;
background: rgba(0,0,0,.025);
outline:none;
border-radius:3px;
border:none;
transition:.2s ease-in;
&::placeholder{
    opacity:.3;
}

&:focus{
    outline: 2px solid grey;
    transition: .2s ease-in;
}
@media only screen and (max-width:768px){
    font-size:1.5rem;
}
`

export const Field = styled.div`
box-sizing:border-box;
display:flex;
flex-direction:column;
align-items:flex-start;
gap:.5rem;

& label,input,div, text-area {
    box-sizing:border-box;
    margin: 0;

}


& .errs{
    box-sizing:border-box;
    color:crimson;
    padding:0;
    width:20rem;
    margin:0;
    font-family:sans-serif;
    overflow:hidden;
}`

export const SubmitButton = styled.button`
grid-column: 1/3;
border:none;
border-radius:200px;
padding: 1rem;
font-size: 1.05rem;
text-transform: uppercase;
letter-spacing: 3px;
font-style:bold;
font-family: acumin-pro,sans-serif;
min-width:15rem;
margin:auto;
font-weight:700;
color:white;
background:black;
cursor:pointer;

&:disabled{
    opacity:.05;
    cursor:default;
}
`