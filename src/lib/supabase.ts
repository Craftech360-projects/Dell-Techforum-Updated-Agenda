import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const saveSurveyResponse = async (selectedOptions: string[]) => {
  try {
    const { data, error } = await supabase
      .from('survey_responses')
      .insert([
        { selected_options: selectedOptions }
      ])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error saving response:', error);
    return { success: false, error };
  }
};