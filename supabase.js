const SUPABASE_URL =
    https://lysjkrlkwkytirojtrfb.supabase.co/rest/v1/;

const SUPABASE_PUBLISHABLE_KEY =
    sb_publishable_1H0E0NDaa6YnNoGtg7IJNw_OL4MfEyC;


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );
