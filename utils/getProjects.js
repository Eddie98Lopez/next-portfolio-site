import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ldrjmzbrinwdylthbzry.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const getProjects = async (dispatch) => {
  try {
    const projects = await supabase.from("projects").select("*");
    dispatch({type:'FETCH_PROJECTS', payload:projects.data})
/*     setTimeout(()=>{
      
    },3500) */
    
  } catch (error) {
    console.log(error);
  }
};

export const getProjectById = async (id,setProject) => {
  try {
  
      
      const fetchedProject = await supabase.from('projects').select('*').eq('id', id)
     // console.log(fetchedProject)
      const projectPhotos = await supabase.from('projects_to_images').select('*').eq('project_id',id)
      const sorted = projectPhotos.data.sort((a, b) => a.index - b.index)
      setProject({...fetchedProject.data[0],images:sorted})
    
  } catch (error) {
    console.log(error)
    
  }

}