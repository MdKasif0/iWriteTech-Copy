from PIL import Image, ImageDraw, ImageFont
import os

paths = [
    "public/images/posts/best-monitor-light-bars-2026/quntis-pro-plus.png",
    "public/images/posts/best-monitor-light-bars-2026/xiaomi-mi-light-bar.png",
    "public/images/posts/best-wireless-chargers-2026/hero.png",
    "public/images/posts/best-wireless-chargers-2026/pinterest.png",
    "public/images/posts/best-wireless-chargers-2026/anker-maggo.png",
    "public/images/posts/best-wireless-chargers-2026/spigen-arcfield.png",
]

for path in paths:
    # 3:2 ratio to match our cards
    img = Image.new('RGB', (900, 600), color = (45, 45, 45))
    d = ImageDraw.Draw(img)
    text = os.path.basename(path).replace(".png", "").replace("-", " ").title() + "\n(Placeholder - API Quota Exceeded)"
    
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 36)
    except:
        font = ImageFont.load_default()
        
    bbox = d.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    
    d.text(((900-w)/2, (600-h)/2), text, font=font, fill=(200, 200, 200), align="center")
    
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path)
    print(f"Generated {path}")
