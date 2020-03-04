import React from "react"
import Navigation from "../components/navigation/Navigation"
import GlobalStyle from "../assets/styles/globalStyle"
 


const MainLayout = ({children}) => (
  <>
  <GlobalStyle />
   <Navigation />
   {children}
  </>
)

export default MainLayout