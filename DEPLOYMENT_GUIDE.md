# Deployment Guide for dtforum2025.com/agenda

## Build Status
✅ Production build completed successfully
✅ App configured to run at `/agenda` path
✅ All assets optimized and ready for deployment

## Deployment Options

### Option 1: Using GoDaddy Hosting (If you have GoDaddy hosting)

1. **Access your GoDaddy account**
   - Log in to your GoDaddy account
   - Go to "My Products" and find your hosting plan

2. **Upload the files**
   - Access your hosting File Manager or connect via FTP
   - Create a folder named `agenda` in your public_html or www directory
   - Upload all contents from the `dist` folder to the `agenda` folder
   - Make sure to maintain the folder structure

3. **Set up the domain**
   - Your site should now be accessible at https://dtforum2025.com/agenda

### Option 2: Using Netlify (Recommended - Free & Easy)

1. **Create a Netlify account** (if you don't have one)
   - Go to https://www.netlify.com
   - Sign up for free

2. **Deploy the site**
   ```bash
   # Install Netlify CLI globally
   npm install -g netlify-cli
   
   # Deploy to Netlify
   netlify deploy --prod --dir=dist
   ```

3. **Configure custom domain**
   - In Netlify dashboard, go to "Domain settings"
   - Add custom domain: dtforum2025.com
   - Configure DNS in GoDaddy:
     - Add A record: @ → 75.2.60.5
     - Add CNAME record: www → [your-netlify-site].netlify.app
   - The site will be available at dtforum2025.com/agenda

### Option 3: Using Vercel (Alternative - Free & Easy)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure custom domain in Vercel dashboard**
   - Add dtforum2025.com as custom domain
   - Update GoDaddy DNS records as per Vercel instructions

### Option 4: Using GitHub Pages (Free)

1. **Create a GitHub repository**
   - Name it `agenda` or any name you prefer

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**
   ```bash
   # Install gh-pages
   npm install --save-dev gh-pages
   
   # Add deploy script to package.json
   # "deploy": "npm run build && gh-pages -d dist"
   
   # Deploy
   npm run deploy
   ```

4. **Configure custom domain**
   - Add CNAME file in dist folder with: dtforum2025.com
   - Update GoDaddy DNS to point to GitHub Pages

## DNS Configuration in GoDaddy

Regardless of which hosting option you choose, you'll need to configure DNS in GoDaddy:

### For subdirectory deployment (dtforum2025.com/agenda):
1. Point your domain to your hosting provider
2. The `/agenda` path is already configured in the app

### DNS Records needed (varies by provider):
- **A Record**: @ → [Provider's IP address]
- **CNAME Record**: www → [Provider's domain]

## Important Files

- **Production Build**: `/dist` folder contains all files to deploy
- **Size**: ~460 KB total (115 KB gzipped)
- **Assets**: All images, CSS, and JS are optimized

## Testing After Deployment

1. Visit https://dtforum2025.com/agenda
2. Check that:
   - All sessions load correctly
   - Modals work when clicking titles
   - Register Now button links correctly
   - Favicons appear in browser tab
   - Site is responsive on mobile

## Updating the Site

To update the site after making changes:
1. Make your changes in the source code
2. Run `npm run build`
3. Upload the new `dist` folder contents to your hosting
4. Clear browser cache to see updates

## Support

If you encounter issues:
1. Check browser console for errors (F12)
2. Verify all files were uploaded correctly
3. Ensure DNS propagation is complete (can take up to 48 hours)
4. Check that HTTPS is enabled on your hosting

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Next Steps

1. Choose your preferred hosting option
2. Deploy the `dist` folder contents
3. Configure DNS in GoDaddy
4. Test the live site

Your site is production-ready and optimized for deployment!