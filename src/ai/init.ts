
// This function is intended to be called once at the start of the application
// to configure server-side credentials for Genkit.
export function initializeGenkit() {
  // This check ensures this server-side code doesn't accidentally run in the browser.
  if (typeof window !== 'undefined') {
    return;
  }

  // Set the GOOGLE_APPLICATION_CREDENTIALS environment variable for Genkit
  // if the SERVICE_ACCOUNT_JSON is available. This is the standard way
  // Google Cloud libraries find credentials on a server.
  if (process.env.SERVICE_ACCOUNT_JSON) {
    try {
      // Create a temporary file to hold the service account credentials.
      // This is necessary because Google's authentication libraries expect a file path.
      const fs = require('fs');
      const path = require('path');
      const os = require('os');
      
      const tempDir = os.tmpdir();
      const credentialsPath = path.join(tempDir, 'service-account.json');
      
      // Write the JSON string from the environment variable to the temp file.
      fs.writeFileSync(credentialsPath, process.env.SERVICE_ACCOUNT_JSON);
      
      // Tell Google's libraries where to find the credentials file.
      process.env.GOOGLE_APPLICATION_CREDENTIALS = credentialsPath;

    } catch (error) {
      console.error('Failed to write service account credentials for Genkit initialization:', error);
      // If this fails, Genkit will fall back to other authentication methods,
      // which might work in some environments (like Google Cloud Run).
    }
  }
}
