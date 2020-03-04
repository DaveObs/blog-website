import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavigationWrapper = styled.nav`
position: absolute;
top: 20px;
left: 30px;
display: flex;
align-items: center;
justify-content: flex-start;
font-family: "Montserrat";

a{
    text-decoration: none;
    color: inherit;
}
`;

const StyledLogo = styled.span`
font-weight: 900;
font-size: 20px;
margin-right: 11px;
`;

const NavigationList = styled.ul`
list-style: none;
display: flex;
`;

const NavigationListItem = styled.li`
font-weight: 600;
font-size: 16px;
margin-left: 32px;
`;


const Navigation = () => (
    <NavigationWrapper>
        <StyledLogo><Link to="/">HATTA</Link></StyledLogo>
        <NavigationList>
            <NavigationListItem>
                <Link to="/about">about</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/articles">articles</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/gallery">gallery</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/contact">contact</Link>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
)

export default Navigation;
