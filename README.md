<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1VbXFg7VO5Kjo0PR7sMpXHOEGjW2679lE

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

This project is configured for easy deployment on Vercel.

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variable:
   - Go to your project settings → Environment Variables
   - Add `GEMINI_API_KEY` with your Gemini API key value
4. Deploy! Vercel will automatically detect the Vite configuration and deploy your app.

The project includes:
- `vercel.json` - Vercel configuration for proper routing and build settings
- `.vercelignore` - Files to exclude from deployment
- Optimized Vite build configuration for production