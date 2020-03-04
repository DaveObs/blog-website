import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Button from "../components/Button/Button";
import Image from "gatsby-image";

const ContentWrapper = styled.div`
height: calc(100vh - 80px);
width: 60%;
text-align: right;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;

h1 {
  font-size: 100px;
  margin: 0;
  width: 50%;
  line-height: 0.9;
}

p {
  font-size: 18px;
  width: 40%;
  margin: 60px 0 40px;
}
`;

const ImageWrapper = styled(Image)`
position: absolute !important;
top: 0;
right:0;
width:40%;
height: 100vh;
object-fit:cover;
`;


const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Your new space</h1>
      <p>While artists work from real to the abstract, architects must work from the abstract to the real.</p>
      <Button>estimate project</Button>
    </ContentWrapper>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />

  </>
)


export const query = graphql`
  {
    file(name: {eq: "spaghetti"}){
      childImageSharp {
        fluid(maxWidth: 750, maxHeight: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default IndexPage