import React from 'react'

const User=(user)=>{
     const {user:{name:{title,first,last},email,gender}}=user
    const{user:{location:{city,state,country,postcode}}}=user
   const{user:{picture:{medium}}}=user

    console.log(title)
    return(
           
        <div>
              <span>
          Name:{title}{first}{last}<br></br>
          {<img src={medium} alt=""></img> }
           Gender:{gender}<br></br>
           Email:{email}<br></br>
           Address:{city}{state}{country}{postcode}
           </span> 
                  </div>
    )
}

export default User