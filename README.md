[README.md](https://github.com/user-attachments/files/25730925/README.md)
# Ying Liu — Product Designer Portfolio

Static HTML portfolio for [yingwliu.com](https://yingwliu.com).

## Structure

```
index.html              ← Home / Work
about.html              ← About
case-studies/
  ticketmaster.html     ← Ticketmaster (NDA-safe overview)
  gsm.html              ← UC Davis GSM Alumni Platform
  bereal.html           ← BeReal New Features
```

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio launch"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then enable GitHub Pages in **Settings → Pages → Source: main / root**.
