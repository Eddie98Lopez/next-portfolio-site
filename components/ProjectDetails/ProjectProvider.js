import React, {createContext, useContext, useState} from 'react'
import projectReducer from './projectReducer'

const ProjectContext = createContext()
export const useDispatch = () => useContext(ProjectContext).dispatch
export const useProject = () => useContext(ProjectContext).state.project
export const useModal = () => useContext(ProjectContext).state.modal
export const useImgIndex = () => useContext(ProjectContext).state.imgIndex 

const initialState = {
  project:{},
  modal:false,
  imgIndex:0,

}


const ProjectProvider = ({value, children,...props}) => {
 // console.log(value)

  const [state, setState] = useState({...initialState,project:value})

  const dispatch = (action) => {
    setState(projectReducer(state,action))
  }


  return (
    <ProjectContext.Provider value={{state,dispatch}}>
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider