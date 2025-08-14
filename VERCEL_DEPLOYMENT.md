# Vercel Deployment Instructions for dtforum2025.com/agenda

## ✅ Prerequisites Completed
- Vercel CLI installed
- Production build ready
- Vercel configuration file created

## Step 1: Deploy to Vercel

Run this command in your terminal:

```bash
vercel --prod
```

### During deployment, you'll be asked:

1. **Set up and deploy?** → Yes
2. **Which scope?** → Select your account (or create one)
3. **Link to existing project?** → No (create new)
4. **Project name?** → dell-forum-2025 (or any name you prefer)
5. **Directory?** → ./ (current directory)
6. **Override settings?** → No

The deployment will start automatically.

## Step 2: Get Your Vercel URL

After deployment, Vercel will provide you with:
- A production URL like: `dell-forum-2025.vercel.app`
- Note this URL - you'll need it!

## Step 3: Configure Custom Domain in Vercel

### Option A: Using Vercel Dashboard (Easier)

1. Go to https://vercel.com/dashboard
2. Click on your project (dell-forum-2025)
3. Go to "Settings" tab
4. Click on "Domains" in the left sidebar
5. Add your domain: `dtforum2025.com`
6. Vercel will show you the DNS records needed

### Option B: Using CLI

```bash
vercel domains add dtforum2025.com
```

## Step 4: Update GoDaddy DNS Settings

1. **Log in to GoDaddy**
   - Go to https://www.godaddy.com
   - Sign in to your account

2. **Access DNS Management**
   - Go to "My Products"
   - Find your domain (dtforum2025.com)
   - Click "DNS" or "Manage DNS"

3. **Remove Existing Records** (if any)
   - Delete any existing A or CNAME records for @ and www

4. **Add Vercel DNS Records**

   Add these records:

   **For the root domain (dtforum2025.com):**
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - TTL: 600 (or default)

   **For www subdomain (www.dtforum2025.com):**
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
   - TTL: 600 (or default)

5. **Save Changes**
   - Click "Save" to apply DNS changes
   - DNS propagation can take 5 minutes to 48 hours (usually within 1 hour)

## Step 5: Verify Domain in Vercel

1. Go back to Vercel dashboard
2. Check your domain settings
3. Vercel will automatically verify once DNS propagates
4. You'll see a green checkmark when ready

## Step 6: Test Your Deployment

Once DNS propagates, visit:
- https://dtforum2025.com/agenda
- https://www.dtforum2025.com/agenda

Both should show your Dell Technologies Forum page!

## Troubleshooting

### If the site doesn't load:
1. **Check DNS propagation**: Use https://dnschecker.org to verify
2. **Clear browser cache**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
3. **Check Vercel dashboard**: Ensure domain shows as "Valid"

### If you see "404 Not Found":
- The vercel.json file should handle routing
- Verify the base path in vite.config.ts is set to '/agenda/'

### If you need to redeploy:
```bash
npm run build
vercel --prod
```

## Future Updates

To update your site:
1. Make changes to your code
2. Run: `npm run build`
3. Run: `vercel --prod`
4. Changes will be live immediately

## Alternative: GitHub Integration

For automatic deployments on every code change:
1. Push your code to GitHub
2. Import the project in Vercel dashboard
3. Vercel will auto-deploy on every push to main branch

## Quick Reference

**Your Vercel project URL**: [Will be shown after deployment]
**Custom domain**: dtforum2025.com
**Site path**: /agenda
**Full URL**: https://dtforum2025.com/agenda

## Support

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- DNS Issues: Check with GoDaddy support

---

Ready to deploy! Run `vercel --prod` to start.