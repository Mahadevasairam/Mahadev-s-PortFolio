
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = "https://eqdugnxmwyhotgtbneqt.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxZHVnbnhtd3lob3RndGJuZXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0MjQ1MzEsImV4cCI6MjAyMDAwMDUzMX0.lDO4veLY5F2sokePYSiUKmEA9CHAQA7PxF9m-XcCH-M"
const supabase = createClient(supabaseUrl, supabaseKey)

const nameEl = document.getElementById("name")
const emailEl = document.getElementById("mail")
const messageEl = document.getElementById("message")
const submitClear = document.getElementById("submit")

submitClear.addEventListener("click", function(){
    const nameValue = nameEl.value
    const emailValue = emailEl.value
    const messageValue = messageEl.value
    const insertData = async () => {
        const { data, error } = await supabase
          .from('Contact')
          .insert([
            { name: nameValue, email: emailValue, message: messageValue },
          ]);
      
        if (error) {
          console.error('Error inserting data:', error.message);
        } else {
          console.log('Data inserted successfully:', data);
        }
      };
    
    insertData();

    nameEl.value = ""
    emailEl.value = ""
    messageEl.value = ""

})