AFFILIATE LINKS MANAGEMENT
==========================

This folder contains redirect pages for all affiliate links used on PickWebsiteHosting.com.

HOW TO UPDATE AN AFFILIATE LINK:
--------------------------------
1. Open the HTML file for the brand (e.g., hostinger.html)
2. Find the meta refresh tag near the top
3. Replace the URL with your actual affiliate link
4. Also update the JavaScript redirect URL at the bottom
5. Update the canonical link if needed

Example:
  Before: <meta http-equiv="refresh" content="0; url=https://www.hostinger.com">
  After:  <meta http-equiv="refresh" content="0; url=https://www.hostinger.com?aff=YOUR_AFFILIATE_ID">

FILES IN THIS FOLDER:
---------------------
Web Hosting Providers:
- hostinger.html    - Hostinger affiliate link
- bluehost.html     - Bluehost affiliate link
- hostgator.html    - HostGator affiliate link
- namecheap.html    - Namecheap affiliate link
- godaddy.html      - GoDaddy affiliate link
- dreamhost.html    - DreamHost affiliate link
- a2hosting.html    - A2 Hosting affiliate link
- ionos.html        - IONOS affiliate link
- greengeeks.html   - GreenGeeks affiliate link
- siteground.html   - SiteGround affiliate link
- webcom.html       - Web.com affiliate link

Website Builders:
- wix.html          - Wix affiliate link
- squarespace.html  - Squarespace affiliate link
- shopify.html      - Shopify affiliate link
- wordpress.html    - WordPress.com affiliate link
- weebly.html       - Weebly affiliate link
- webflow.html      - Webflow affiliate link

USAGE ON WEBSITE:
-----------------
Use these links in your HTML like this:
  <a href="go/hostinger.html" rel="sponsored nofollow">Visit Hostinger</a>

Or from subdirectories:
  <a href="../go/hostinger.html" rel="sponsored nofollow">Visit Hostinger</a>

NOTES:
------
- All redirect pages have noindex/nofollow meta tags
- Redirects happen instantly (0 second delay)
- Both meta refresh and JavaScript redirects are used for compatibility


