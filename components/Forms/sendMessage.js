import supabase from '../../utils/supabase';

const sendMessage = async (form) => {
  try {
    const { data, error } = await supabase.from('messages').insert([form]).select();
    console.log(data);
    if (error) {
      console.log({ ...error });
      throw new Error(error);
    }
    return data;
  } catch (error) {
    console.log({ ...error });
  }
};

export default sendMessage;
