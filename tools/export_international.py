"""Copy the ad landing page into _international-repo/ (the working copy of
github.com/failsdaddy-dev/international-cognasiumindia).

Source of truth stays in this folder: international.html, css/international.css,
js/international*.js, assets/img/intl/. Run this after editing them, then commit
and push inside _international-repo/.

    python tools/export_international.py
"""
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "_international-repo"

FILES = {
    "international.html": "index.html",
    "css/international.css": "css/international.css",
    "js/international.js": "js/international.js",
    "js/international-config.js": "js/international-config.js",
    "assets/favicon-32.png": "assets/favicon-32.png",
    "assets/favicon-180.png": "assets/favicon-180.png",
}

VERCEL = {
    "$schema": "https://openapi.vercel.sh/vercel.json",
    "cleanUrls": True,
    "trailingSlash": False,
    "redirects": [
        {"source": "/international", "destination": "/", "permanent": True},
        {"source": "/index", "destination": "/", "permanent": True},
    ],
    "headers": [
        {"source": "/(.*)", "headers": [
            {"key": "X-Content-Type-Options", "value": "nosniff"},
            {"key": "Referrer-Policy", "value": "strict-origin-when-cross-origin"},
            {"key": "X-Frame-Options", "value": "SAMEORIGIN"},
            {"key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()"},
            {"key": "Strict-Transport-Security", "value": "max-age=31536000"},
            {"key": "X-Robots-Tag", "value": "noindex, nofollow"},
        ]},
        {"source": "/assets/(.*)", "headers": [{"key": "Cache-Control", "value": "public, max-age=2592000"}]},
        {"source": "/(css|js)/(.*)", "headers": [{"key": "Cache-Control", "value": "public, max-age=0, must-revalidate"}]},
    ],
}

README = """# Cognasium India: international debating ad landing page

One-screen landing page for the Meta ad, served at **https://international.cognasiumindia.com/**.
Plain HTML, CSS and vanilla JS. No build step.

> This repo is GENERATED. Edit the source in `C:\\Agents\\cognasiumindia-site`
> (`international.html`, `css/international.css`, `js/international*.js`, `assets/img/intl/`),
> then run `python tools/export_international.py` there and commit + push here.
> Full documentation: README section 10 in the main site folder.

## Files
- `index.html`: the page (noindex)
- `css/international.css`: styles
- `js/international-config.js`: **edit here**: Pixel ID, WhatsApp number and message, levels, testimonials
- `js/international.js`: level chips, WhatsApp link, Meta Pixel `Lead` on the WhatsApp tap, testimonial rotation, utm/fbclid pass-through
- `assets/`: images (the site's own photos, WebP)
- `vercel.json`: clean URLs, security headers, noindex header, asset cache

## Meta Pixel
`PageView` on load, `Lead` only when the WhatsApp button is tapped (each with an event_id).
Check with the Meta Pixel Helper extension or Events Manager → Test Events.

## Vercel
Import this repo as a new project: Framework **Other**, no build command, output directory blank.
Add the domain `international.cognasiumindia.com` and copy the CNAME that Vercel shows into Hostinger DNS
(Name `international`). Commits must be authored by `failsdaddy-dev` (Hobby plan).
"""


def main():
    OUT.mkdir(exist_ok=True)
    # clear old export (keep .git)
    for p in OUT.iterdir():
        if p.name == ".git":
            continue
        shutil.rmtree(p) if p.is_dir() else p.unlink()
    for src, dst in FILES.items():
        d = OUT / dst
        d.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(ROOT / src, d)
    shutil.copytree(ROOT / "assets/img/intl", OUT / "assets/img/intl")
    (OUT / "vercel.json").write_text(json.dumps(VERCEL, indent=2) + "\n", encoding="utf-8")
    (OUT / "README.md").write_text(README, encoding="utf-8")
    (OUT / ".vercelignore").write_text("README.md\n", encoding="utf-8")
    print("exported to", OUT)


if __name__ == "__main__":
    main()
