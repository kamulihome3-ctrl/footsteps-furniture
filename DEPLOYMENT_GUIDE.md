# Shared Hosting Deployment Guide

## Prerequisites
- Node.js and npm installed locally
- Access to your shared hosting control panel
- File manager or FTP access

## Build Process

1. **Build the application:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with optimized production files.

2. **Files to upload:**
   - All contents of the `dist` folder
   - The `.htaccess` file (for Apache servers)

## Deployment Steps

### Option 1: Using File Manager (Recommended)
1. Log into your hosting control panel
2. Navigate to File Manager
3. Go to your domain's public folder (usually `public_html` or `www`)
4. Upload all files from the `dist` folder to the root directory
5. Upload the `.htaccess` file to the same directory

### Option 2: Using FTP
1. Connect to your hosting via FTP client
2. Navigate to your domain's root directory
3. Upload all `dist` folder contents
4. Upload the `.htaccess` file

## Important Configuration

### Image Paths
Your logo images are currently in `/public/` - make sure to:
1. Copy images from `public` folder to your hosting
2. Update image paths in components if needed

### Router Configuration
The `.htaccess` file handles React Router routing for Apache servers.
For other servers, you may need different configuration.

## Post-Deployment Checklist
- [ ] Test all page routes work correctly
- [ ] Verify images load properly
- [ ] Check mobile responsiveness
- [ ] Test navigation and functionality
- [ ] Verify contact information is correct

## Troubleshooting

### Blank Page Issues
- Check browser console for errors
- Verify all files uploaded correctly
- Ensure `.htaccess` is in the root directory

### Routing Issues
- Confirm `.htaccess` file is present and working
- Test direct URL access to different pages

### Image Loading Issues
- Verify image files are uploaded
- Check image paths in components
- Ensure proper file permissions

## Performance Optimization
The build is configured with:
- Code splitting for better loading
- Asset compression
- Cache headers via `.htaccess`
- Minified JavaScript and CSS

Your Footsteps Furniture catalog is now ready for shared hosting deployment!
