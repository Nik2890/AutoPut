
const axios = require('axios');
const supabase = axios.get('https://cdn.jsdelivr.net/npm/@supabase/supabase-js')
  .then(response => response.data);


const { createClient } = require('@supabase/supabase-js');


const Database = iniSupabase();

//curl [https://nik2890.github.io/AutoPut/index.html](https://nik2890.github.io/AutoPut/index.htm)

//################################################################################
function iniSupabase() {
  const supabaseUrl = "https://hskeowlqxzmjfsaxwadj.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhza2Vvd2xxeHptamZzYXh3YWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5OTY4MTksImV4cCI6MjAzOTU3MjgxOX0.wus63Imorj_2Q8jJ9BiIHNTyv38-dYrOrHIs6ctYAH8";
  const Database = createClient(supabaseUrl, supabaseKey)
  return Database
}
//################################################################################

async function einfuegen() {

  let timestamp = new Date().toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).replace(',', '');

  //geht

  const { data, error } = await Database
    .from('Index')
    .update({ Datum: timestamp })
    .eq('id', '1')
    .select()

}
//################################################################################

async function lesen() {
  //geht
  const { data, error } = await Database
    .from('Index')
    .select('*')
  return data

}
//################################################################################

einfuegen();