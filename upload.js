import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Initialize Supabase client
const supabaseUrl = 'https://zjadvvfuczujuwhydvjs.supabase.co';  // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqYWR2dmZ1Y3p1anV3aHlkdmpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0OTY0ODgsImV4cCI6MjA1ODA3MjQ4OH0.PL7ag2VBakyqS4-FiT3mtegQfuouyyQF_ysOsdKDN5s';  // Replace with your Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to upload an image
async function uploadImage(filePath) {
    try {
        const bucketName = 'headshots';
        const fileName = path.basename(filePath);
        const fileBuffer = fs.readFileSync(filePath);

        const { data, error } = await supabase.storage
            .from(bucketName)
            .upload(fileName, fileBuffer, {
                contentType: 'image/jpeg', // Change according to your file type
                upsert: false // Set to true to overwrite existing files
            });

        if (error) throw error;

        console.log('File uploaded successfully:', data);
        
        // Generate public URL
        const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(fileName);
        console.log('Public URL:', publicUrlData.publicUrl);
    } catch (error) {
        console.error('Error uploading file:', error.message);
    }
}

// Run the function
uploadImage('/Users/hardiksoni/Downloads/Person.jpeg');  // Replace with the actual image file path
