import os
import urllib.request
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

images_to_download = [
    {
        "url": "https://m.media-amazon.com/images/I/61b66eMimFL.jpg",
        "slug": "proteq-desk-mat-charging"
    },
    {
        "url": "https://m.media-amazon.com/images/I/61b-Wc9o+SL.jpg",
        "slug": "anker-zolo-usb-c"
    },
    {
        "url": "https://m.media-amazon.com/images/I/61NC+hoYdSL.jpg",
        "slug": "amazon-basics-power-bank"
    },
    {
        "url": "https://m.media-amazon.com/images/I/51++zVUoEOL.jpg",
        "slug": "anker-maggo-qi2-pad"
    },
    {
        "url": "https://m.media-amazon.com/images/I/71tO6KK6d1L.jpg",
        "slug": "quntis-monitor-light-bar"
    }
]

for item in images_to_download:
    dir_path = f"public/images/products/{item['slug']}"
    os.makedirs(dir_path, exist_ok=True)
    file_path = f"{dir_path}/main.jpg"
    
    if not os.path.exists(file_path):
        print(f"Downloading {item['slug']}...")
        urllib.request.urlretrieve(item["url"], file_path)
    else:
        print(f"Already downloaded {item['slug']}")

print("Done!")
