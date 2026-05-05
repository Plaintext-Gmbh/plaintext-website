# Plaintext Website

Modern Astro-based website for Plaintext GmbH with team profiles and service overview.

## 🚀 Deployment Options

### 1. Production (GitHub Pages)
- **Trigger:** Push to `main` branch
- **URL:** https://daniel-marthaler.github.io/plaintext-website
- **Status:** ✅ Auto-deploys on every main push

### 2. Feature Branch Previews (GitHub Pages)
- **Trigger:** Push to any feature branch
- **URL:** `https://daniel-marthaler.github.io/plaintext-website/feature/{branch-name}`
- **Status:** ✅ Auto-deploys on every feature push

### 3. Feature Branch Previews (Vercel)
- **Trigger:** Pull requests + feature branches  
- **URL:** Auto-generated preview URL
- **Status:** ⚠️ Requires Vercel secrets

### 4. Hostpoint FTPS (Legacy)
- **Trigger:** Push to main (if secrets configured)
- **URL:** https://marthaler.io
- **Status:** ⚠️ Currently blocked (Hostpoint FTP issues)

## 🛠 Local Development

```bash
npm install
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 📸 Fixed Issues

- ✅ **Image loading:** Both `daniel.jpg` and `jasmin.jpg` load correctly
- ✅ **File permissions:** Fixed 600 → 644 for proper web access
- ✅ **Team section:** Complete profiles for Daniel & Jasmin Marthaler
- ✅ **Responsive design:** Mobile-first approach with proper scaling

## 🔧 Tech Stack

- **Framework:** Astro 5.17.1
- **Styling:** Tailwind CSS 4.1.18  
- **Deployment:** GitHub Actions + GitHub Pages
- **Images:** Optimized JPG with proper permissions

<!-- ci-test: integration-cleanup-verify 2026-05-05 -->
