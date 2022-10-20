import React, {createContext, useContext} from 'react'

const ProjectContext = createContext()
export const useProject = () => useContext(ProjectContext)


const ProjectProvider = ({value, children,...props}) => {
  return (
    <ProjectContext.Provider value={value}>
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider