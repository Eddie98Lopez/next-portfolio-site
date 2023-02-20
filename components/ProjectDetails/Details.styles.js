import styled from 'styled-components'

export const StyledDetailsWrapper = styled.section`
height: min-content;
font-family: acumin-pro, sans-serif;
position: sticky;
width: 80%;
top: 8rem;
text-align:justify;

& h1,h2{
    text-transform: uppercase;
    font-family: acumin-pro-condensed, sans-serif;
    letter-spacing: 3px;
    font-weight: 700;
    margin-bottom: 1rem;

}
& p {
    line-height: 1.25rem;
    font-size: 0.9rem;
    color: grey;
    margin-bottom:3rem;
  }
  @media only screen and (max-width: 768px) {
    clear: top;
    padding: 4rem 2rem;
    width:100%;


    & p {
      font-size: 1.35rem;
      line-height: 2rem;
    }
  }`

export const StyledCategory = styled.div`
& h2{
    font-size: 1.1rem;
}
& p{
    text-transform:capitalize;
}`

export const StyledDetails = styled.div`
& h1{

    font-size: 1.25rem;

}`