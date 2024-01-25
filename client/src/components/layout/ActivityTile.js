import React from "react"
import {Link} from "react-router-dom"

const ActivityTile = ({id, name}) => {



  return (
    <div className="grid-container">
      <div className="grid-x align-center">
        <div className="cell small-6">
          <p className="items-list">{name}</p>
        </div>
      </div>
    </div>
  )
}
//   return (
//     <div className="grid-padding-x align-center">
//       <div className="tile-style grid-padding-x">
//         <div className="cell small-8">
//           <h3 className="tile-subtitle">{name}</h3>
//         </div>
//       </div>
//     </div>
//   )
// }
export default ActivityTile
