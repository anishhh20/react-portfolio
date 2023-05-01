import React from 'react'
import {projectData} from './data'
import FolderItem from './folderItem'

const Folderss = () => {
  return (
    
    <div className="folder__container container" >
    
        {projectData.map((item) => {
            return <FolderItem item={item} key={item.id} />
        })}
        
    </div>

  )
}

export default Folderss