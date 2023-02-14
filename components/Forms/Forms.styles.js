import styled from 'styled-components'

export const Form = styled.form`
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
display:block;
width:100%;
padding: .5rem;
box-sizing:border-box;
font-family: acumin-pro, sans-serif;
font-size:1.15rem;
background: rgba(0,0,0,.025);
outline:none;
border-radius:3px;
border:none;
transition:.2s ease-in;
&::placeholder{
    opacity:.3;
}

&:focus{
    outline: 2px solid lightgrey;
    transition: .2s ease-in;
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

& label,input,div, text-area {
    margin: .5rem 0;
    box-sizing:border-box;
}


& .errs{
    color:crimson;
    padding:0;
    width:90%;
    box-sizing:border-box;
    font-family:sans-serif
}`