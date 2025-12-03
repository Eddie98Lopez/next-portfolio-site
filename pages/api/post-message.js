import sendMessage from '../../components/Forms/sendMessage';
import supabase from '../../utils/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { data, error } = await supabase.from('messages').insert([req.body]).select();

    if (error) {
      res.status(500).json(error);
    }
    res.status(200).json(data);
  } else {
    // Handle any other HTTP method
  }
}
