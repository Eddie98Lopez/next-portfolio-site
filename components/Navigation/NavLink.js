import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledLink = styled.span`

text-decoration:none;
box-sizing: border-box;
position:relative;
text-align:center;
display:inline-block;
display:inline-block;
cursor:pointer;
transition: all .2s ease-in-out;

font-family: acumin-pro-condensed, sans-serif;
font-size:.9rem;
font-weight: bolder;
text-transform: uppercase;
color:grey;
border: 2px solid rgba(0,0,0,0)
border-bottom: 2px solid rgba(0,0,0,0);

& p {
    display:inline-block;
    padding: 1rem;
    transition: all ease-in-out .3s;
};

&:hover {
    border-bottom: 2px solid darkgray;

    p {
        
        transform:  translate(0,-7px) ;
        transition: all ease-in-out .3s;
    }
}



@media only screen and (max-width:768px){
    font-size:1.5rem;
    padding-right:2.5%;
    display:block;
    text-align:right;

    &:hover{
        & p{
            transition: all ease-in-out .3s;
            transform-origin:right;
            transform: translate(-30px,0) scale(110%,100%);

        }
    }

}
`



NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ to, exact, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === to : pathname.startsWith(to);

    if (isActive) {
        props.className += ' active';
    }
   

    return (
        <Link href={to}>
            <StyledLink {...props} >
                
                <p>{children}</p>
                

            </StyledLink>
        </Link>
    );
}

export default NavLink