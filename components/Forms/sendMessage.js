import supabase from "../../utils/supabase"


const sendMessage = async (form) => {
    try {
        const {data} = await supabase.from('messages').insert(form)
        console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }
 }

 export default sendMessage