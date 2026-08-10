# Plaintext Website

Modern Astro-based website for Plaintext GmbH with team profiles and service overview.

## 🚀 Deployment

Deployt wird per **rsync über SSH auf Hostpoint** — nicht über GitHub Pages.

### 1. Produktion
- **Workflow:** `.github/workflows/DeployProd.yml`
- **Trigger:** Push auf `master` (Default-Branch) oder manueller `workflow_dispatch`
- **Ziel:** `www/plaintext.ch/` auf Hostpoint → https://plaintext.ch
- Operative Dateien neben der Site (Logs, Backups, `watch.php`, `integration/*`) bleiben
  über `deploy-excludes.txt` unangetastet — `rsync --delete` sieht sie nicht.

### 2. Branch-Vorschauen
- **Workflow:** `.github/workflows/DeployIntegration.yml`
- **Trigger:** Push auf jeden Branch **ausser** `master`
- **URL:** `https://plaintext.ch/integration/{branch-slug}/`
  (Slug = Branchname, `/` → `-`, kleingeschrieben; Build mit `ASTRO_BASE=/integration/{slug}/`)
- Verwaiste Verzeichnisse geschlossener Branches räumt der Workflow selbst wieder auf.

### 3. Von Hand
- `./deploy-direct.sh` — derselbe rsync-Weg lokal, mit hart validiertem Zielpfad
  (`www/<domain>/`), damit `--delete` nicht die Nachbar-Sites des Shared-Hosts trifft.

> **GitHub Pages ist für dieses Repo nicht aktiv** (`has_pages: false`, `/pages`-API 404,
> `https://plaintext-gmbh.github.io/plaintext-website/` und die alte
> `daniel-marthaler.github.io`-Adresse antworten beide mit 404 — gemessen am 10.08.2026;
> Gegenprobe: `https://plaintext-gmbh.github.io/plaintext-scripts/` liefert 200, Pages
> funktioniert unter der Organisation also grundsätzlich). Die früher hier dokumentierten
> Pages-URLs, der Vercel-Weg (es gibt keinen Vercel-Workflow im Repo; `vercel.json` liegt noch
> herum) und der FTPS-Weg nach marthaler.io beschrieben alle einen Stand, den es nicht mehr
> gibt — siehe Karte 642.

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
- **Deployment:** GitHub Actions + rsync/SSH auf Hostpoint
- **Images:** Optimized JPG with proper permissions