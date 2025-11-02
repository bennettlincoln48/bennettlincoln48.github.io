# Setup GitHub Pages Deployment

Proyek ini telah dikonfigurasi untuk deployment otomatis ke GitHub Pages.

## Konfigurasi yang Sudah Dilakukan

1. **Vite Config** (`vite.config.ts`):
   - `base: "/"` - Aplikasi akan berjalan di root direktori
   - `host: "0.0.0.0"` - Untuk development di Replit
   - `port: 5000` - Port untuk development

2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
   - Otomatis build dan deploy saat push ke branch `main`
   - Build menggunakan `npm run build`
   - Deploy hasil build dari folder `dist` ke GitHub Pages

## Cara Mengaktifkan GitHub Pages

1. **Push kode ke GitHub**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Aktifkan GitHub Pages di repository**:
   - Buka repository di GitHub
   - Klik **Settings** → **Pages**
   - Di bagian **Source**, pilih **GitHub Actions**
   - Workflow akan otomatis berjalan

3. **Akses website Anda**:
   - Setelah deployment selesai, website akan tersedia di:
   - `https://<username>.github.io/<repository-name>/`
   - Jika repository namanya sama dengan username, akan di:
   - `https://<username>.github.io/`

## Development Lokal

Untuk development di Replit:
```bash
npm run dev
```
Aplikasi akan berjalan di port 5000.

## Build Manual

Untuk build secara manual:
```bash
npm run build
```
Hasil build akan berada di folder `dist/`.

## Preview Build

Untuk preview hasil build:
```bash
npm run preview
```

## Catatan Penting

- Pastikan permissions untuk GitHub Actions sudah diaktifkan di repository settings
- Workflow memerlukan permissions: `contents: read`, `pages: write`, `id-token: write`
- Deployment akan berjalan setiap kali ada push ke branch `main`
- Anda juga bisa trigger deployment manual melalui tab "Actions" di GitHub
