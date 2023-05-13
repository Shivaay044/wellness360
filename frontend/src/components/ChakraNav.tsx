import React from 'react'
import {NavLink} from "react-router-dom"

const ChakraNav = () => {
  return (
    <div style={{width:"100%",
                height:"60px",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-around",
                // border:"1px solid black",
                backgroundColor:"#9ed9c7",
                fontWeight:"bold"
                }} >
                   
     <div style={{width:"12%",
                height:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-around",
                border:"3px solid black",
                }}   >
        <h1 style={{fontSize:"50px"}} >WEFIT</h1>
     </div >

      <NavLink to="/mentalhealth" >Mental Health</NavLink>
      <NavLink to="/fit" >Fitness</NavLink>
      <NavLink to="/exe" >Exercise</NavLink>

      <div style={{width:"15%",
                height:"70%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-around",
                }} >

                    <div style={{
                        background:"#fe8d81",
                        width:"50%",
                        height:"100%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-around",
                        border:"1px solid black",
                        borderRadius:"5px"
                    }}>
                        <NavLink to="/exe" >Login</NavLink>
                    </div>


                        <div style={{width:"1%"}}></div>

                    <div style={{
                        background:"#fe8d81",
                         width:"50%",
                         height:"100%",
                         display:"flex",
                         alignItems:"center",
                         justifyContent:"space-around",
                         border:"1px solid black",
                         borderRadius:"5px"
                    }}>
                        <NavLink to="/exe" >SignUp</NavLink>
                    </div>
            
            
      </div>
    </div>
  )
}

export default ChakraNav
