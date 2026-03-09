import React from "react";

function ActivityCard({title,steps}){

  return(

    <div style={{
      border:"1px solid #ddd",
      padding:"10px",
      margin:"10px",
      width:"200px"
    }}>

      <h3>{title}</h3>

      <p>Steps: {steps}</p>

    </div>

  )

}

export default ActivityCard;