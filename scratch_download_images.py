import os
import urllib.request
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

images = {
    "keychron-c3-pro": "https://m.media-amazon.com/images/I/6125ZxZI9gL.jpg",
    "rk-royal-kludge-r75": "https://m.media-amazon.com/images/I/61k39IyVFiL.jpg",
    "logitech-mx-mechanical": "https://m.media-amazon.com/images/I/51SaAGOz-OL.jpg",
    "satechi-usb-c-pro-hub": "https://m.media-amazon.com/images/I/51l5DOtL5QL.jpg",
    "rain-design-mstand": "https://m.media-amazon.com/images/I/61fiRagpihL.jpg",
    "belkin-boostcharge-pro-3-in-1": "https://m.media-amazon.com/images/I/51MxFeJkWRL.jpg",
    "k-knodel-desk-mat": "https://m.media-amazon.com/images/I/717biirKDpL.jpg",
    "caldigit-ts4": "https://m.media-amazon.com/images/I/61RBOqHLI0L.jpg",
    "benq-screenbar-halo-2": "https://m.media-amazon.com/images/I/41fmQI53UNL.jpg",
    "quntis-monitor-light-bar": "https://m.media-amazon.com/images/I/71tO6KK6d1L.jpg",
    "benq-screenbar": "https://m.media-amazon.com/images/I/71FpP6myfPL.jpg",
    "nordik-leather-desk-mat": "https://m.media-amazon.com/images/I/81vexwYjHZS.jpg",
    "besign-ls03": "https://m.media-amazon.com/images/I/71utuSiUTXL.jpg",
    "elgato-stream-deck-mini": "https://m.media-amazon.com/images/I/61w+a4IDpsL.jpg",
    "proteq-desk-mat": "https://m.media-amazon.com/images/I/61b66eMimFL.jpg",
    "anker-zolo-cable": "https://m.media-amazon.com/images/I/61b-Wc9o+SL.jpg"
}

base_dir = "public/images/products"

for slug, url in images.items():
    dir_path = os.path.join(base_dir, slug)
    os.makedirs(dir_path, exist_ok=True)
    img_path = os.path.join(dir_path, "main.jpg")
    try:
        urllib.request.urlretrieve(url, img_path)
        print(f"Downloaded: {slug}")
    except Exception as e:
        print(f"Failed to download {slug}: {e}")
