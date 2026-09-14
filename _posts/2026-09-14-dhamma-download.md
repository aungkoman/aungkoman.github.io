---
layout: post
title: "Download dhamma mp3s to google drive"
date: 2026-09-14
categories: learning
author: "Cisco Ramon"
tags: [life,promotion] # TAG names should always be lowercase
---

```python
# ==============================================================================
# 1. MOUNT GOOGLE DRIVE
# ==============================================================================
from google.colab import drive
drive.mount('/content/drive')

# ==============================================================================
# 2. SETUP & IMPORTS
# ==============================================================================
!pip install -q beautifulsoup4 requests

import os
import re
import time
import requests
from urllib.parse import urljoin, unquote
from bs4 import BeautifulSoup

TARGET_URL = "https://www.dhammadownload.com/Dr-Nandamalabhivamsa-mp3-myanmar.htm"
SAVE_DIR = "/content/drive/MyDrive/Dhamma_MP3s/Dr_Nandamalabhivamsa"
os.makedirs(SAVE_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

# ==============================================================================
# 3. HELPER FUNCTIONS
# ==============================================================================
def sanitize_filename(name: str) -> str:
    """Removes invalid OS filesystem characters."""
    name = re.sub(r'[\\/*?:"<>|]', '', name)
    name = re.sub(r'\s+', ' ', name).strip()
    return name

def clean_track_title(text: str) -> str:
    """Cleans unwanted boilerplate and web tags from the individual link text."""
    text = re.sub(r'(To download|right click|save target as|MP3|Audio|Download)', '', text, flags=re.IGNORECASE)
    text = re.sub(r'[\r\n\t]+', ' ', text)
    return text.strip()

def build_myanmar_filename(a_tag, author_name: str, fallback_slug: str) -> str:
    """
    Extracts strictly the single link title and caps the length to prevent Errno 36.
    Format: ဆရာတော်အမည် - တရားခေါင်းစဉ် - နေ့စွဲ - တည်နေရာ.mp3
    """
    # 1. Read ONLY the text of this specific <a> tag, not the parent container
    raw_text = a_tag.get_text(strip=True)

    # 2. If <a> tag has no text, check the immediate next/prev text node
    if not raw_text or len(raw_text) < 2:
        raw_text = a_tag.next_sibling if isinstance(a_tag.next_sibling, str) else ""
        raw_text = raw_text.strip()

    cleaned = clean_track_title(raw_text)

    # 3. Detect date if present inside this single track's label
    date_match = re.search(r'(\d{1,2}[-\/.]\d{1,2}[-\/.]\d{2,4}|\d{4}\s*ခုနှစ်)', cleaned)
    found_date = date_match.group(0) if date_match else "ရက်စွဲမသိ"

    # Remove the date from the title string to prevent duplication
    title_part = cleaned
    if date_match:
        title_part = title_part.replace(found_date, "").strip()

    # Fall back to URL filename slug if link has no usable text
    if not title_part or len(title_part) < 2:
        title_part = fallback_slug

    title_part = sanitize_filename(title_part)
    location = "စစ်ကိုင်း"

    # 4. Enforce strict character limits for multi-byte Myanmar Unicode
    # Linux filesystems enforce 255 bytes max. Myanmar characters take 3 bytes each.
    if len(title_part) > 40:
        title_part = title_part[:40].strip()

    filename = f"{author_name} - {title_part} - {found_date} - {location}.mp3"
    return sanitize_filename(filename)

def download_file(url: str, save_path: str):
    """Streams file download in chunks, skipping already completed files."""
    if os.path.exists(save_path) and os.path.getsize(save_path) > 1024:
        print(f"  [✓] Exists, skipping: {os.path.basename(save_path)}")
        return

    print(f"  [↓] Downloading: {os.path.basename(save_path)}")
    try:
        with requests.get(url, headers=HEADERS, stream=True, timeout=60) as r:
            r.raise_for_status()
            with open(save_path, 'wb') as f:
                for chunk in r.iter_content(chunk_size=32768):
                    if chunk:
                        f.write(chunk)
        print("  [✓] Finished successfully.")
    except Exception as e:
        print(f"  [✗] Failed: {e}")
        if os.path.exists(save_path):
            os.remove(save_path)

# ==============================================================================
# 4. MAIN DOWNLOAD RUNNER
# ==============================================================================
def run_batch_download(page_url: str):
    print(f"[*] Accessing page: {page_url}")
    res = requests.get(page_url, headers=HEADERS)
    res.raise_for_status()
    soup = BeautifulSoup(res.content, 'html.parser')

    author_name = "ဒေါက်တာနန္ဒမာလာဘိဝံသ"

    # Find all direct MP3 links
    mp3_elements = soup.find_all('a', href=re.compile(r'\.mp3(\?.*)?$', re.IGNORECASE))
    print(f"Found {len(mp3_elements)} MP3 links to process.\n")

    for idx, a_tag in enumerate(mp3_elements, 1):
        raw_href = a_tag['href'].strip()
        mp3_url = urljoin(page_url, raw_href)
        fallback_slug = os.path.splitext(os.path.basename(unquote(raw_href)))[0]

        filename = build_myanmar_filename(a_tag, author_name, fallback_slug)
        save_path = os.path.join(SAVE_DIR, filename)

        print(f"[{idx}/{len(mp3_elements)}] Processing:")
        download_file(mp3_url, save_path)
        time.sleep(0.3)

if __name__ == "__main__":
    run_batch_download(TARGET_URL)
    print("\nAll downloads finished!")
```


dhamma download to telegram

to get chat id 

https://api.telegram.org/botBOTTOKEN/getUpdates


https://www.dhammadownload.com/ThitsarShweSi-Sayadaw-AshinOaktama-mp3InMyanmar.htm


```python
# ==============================================================================
# 1. INSTALL DEPENDENCIES
# ==============================================================================
!pip install -q beautifulsoup4 requests

import os
import re
import time
import requests
from urllib.parse import urljoin, unquote
from bs4 import BeautifulSoup

# ==============================================================================
# 2. CONFIGURATION
# ==============================================================================
TELEGRAM_BOT_TOKEN = ""
TELEGRAM_CHAT_ID = "12345678"  # e.g., "@my_dhamma_channel" or "123456789"

TARGET_URL = "https://www.dhammadownload.com/Dr-Nandamalabhivamsa-mp3-myanmar.htm"
TEMP_DIR = "/content/temp_mp3s"
os.makedirs(TEMP_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

# ==============================================================================
# 3. HELPER FUNCTIONS
# ==============================================================================
def sanitize_filename(name: str) -> str:
    name = re.sub(r'[\\/*?:"<>|]', '', name)
    return re.sub(r'\s+', ' ', name).strip()

def clean_track_title(text: str) -> str:
    text = re.sub(r'(To download|right click|save target as|MP3|Audio|Download)', '', text, flags=re.IGNORECASE)
    return re.sub(r'[\r\n\t]+', ' ', text).strip()

def extract_metadata(a_tag, default_author: str, fallback_slug: str):
    """
    Extracts structured data for Telegram audio tags and filename.
    """
    raw_text = a_tag.get_text(strip=True)
    if not raw_text or len(raw_text) < 2:
        raw_text = a_tag.next_sibling if isinstance(a_tag.next_sibling, str) else ""
        raw_text = raw_text.strip()

    cleaned = clean_track_title(raw_text)

    date_match = re.search(r'(\d{1,2}[-\/.]\d{1,2}[-\/.]\d{2,4}|\d{4}\s*ခုနှစ်)', cleaned)
    found_date = date_match.group(0) if date_match else "ရက်စွဲမသိ"

    title_part = cleaned
    if date_match:
        title_part = title_part.replace(found_date, "").strip()

    if not title_part or len(title_part) < 2:
        title_part = fallback_slug

    title_part = sanitize_filename(title_part)
    if len(title_part) > 40:
        title_part = title_part[:40].strip()

    location = "စစ်ကိုင်း"
    filename = f"{default_author} - {title_part} - {found_date} - {location}.mp3"

    return {
        "filename": filename,
        "title": f"{title_part} ({found_date})",
        "performer": default_author,
        "caption": f"🎧 {title_part}\n👤 {default_author}\n📅 {found_date} | 📍 {location}"
    }

# ==============================================================================
# 4. TELEGRAM UPLOAD FUNCTION
# ==============================================================================
def upload_to_telegram(file_path: str, meta: dict) -> bool:
    """
    Uploads the file via Telegram Bot API sendAudio endpoint.
    """
    # Telegram Bot API limit is 50MB (52,428,800 bytes)
    file_size = os.path.getsize(file_path)
    if file_size > 50 * 1024 * 1024:
        print(f"  [!] Skipped: File exceeds Telegram 50MB limit ({file_size / (1024*1024):.1f} MB)")
        return False

    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendAudio"

    data = {
        "chat_id": TELEGRAM_CHAT_ID,
        "caption": meta["caption"],
        "title": meta["title"],
        "performer": meta["performer"]
    }

    try:
        with open(file_path, "rb") as audio_file:
            files = {"audio": (meta["filename"], audio_file, "audio/mpeg")}
            response = requests.post(url, data=data, files=files, timeout=120)

        res_json = response.json()
        if res_json.get("ok"):
            print(f"  [✓] Uploaded to Telegram: {meta['filename']}")
            return True
        elif res_json.get("error_code") == 429:
            # Handle Telegram rate limits dynamically
            retry_after = res_json.get("parameters", {}).get("retry_after", 30)
            print(f"  [!] Rate limited. Waiting {retry_after}s...")
            time.sleep(retry_after)
            return upload_to_telegram(file_path, meta)
        else:
            print(f"  [✗] Telegram API Error: {res_json.get('description')}")
            return False
    except Exception as e:
        print(f"  [✗] Upload failed: {e}")
        return False

# ==============================================================================
# 5. STREAM PIPELINE (Download -> Upload -> Delete)
# ==============================================================================
def process_and_upload_all(page_url: str):
    print(f"[*] Fetching page: {page_url}")
    res = requests.get(page_url, headers=HEADERS)
    res.raise_for_status()
    soup = BeautifulSoup(res.content, 'html.parser')

    author_name = "ဒေါက်တာနန္ဒမာလာဘိဝံသ"
    mp3_elements = soup.find_all('a', href=re.compile(r'\.mp3(\?.*)?$', re.IGNORECASE))
    print(f"Found {len(mp3_elements)} MP3 links.\n")

    for idx, a_tag in enumerate(mp3_elements, 1):
        raw_href = a_tag['href'].strip()
        mp3_url = urljoin(page_url, raw_href)
        fallback_slug = os.path.splitext(os.path.basename(unquote(raw_href)))[0]

        meta = extract_metadata(a_tag, author_name, fallback_slug)
        temp_file_path = os.path.join(TEMP_DIR, meta["filename"])

        print(f"[{idx}/{len(mp3_elements)}] Downloading temporarily: {meta['filename']}")

        # Download locally to temporary storage
        try:
            with requests.get(mp3_url, headers=HEADERS, stream=True, timeout=60) as r:
                r.raise_for_status()
                with open(temp_file_path, 'wb') as f:
                    for chunk in r.iter_content(chunk_size=32768):
                        if chunk:
                            f.write(chunk)

            # Upload to Telegram
            upload_to_telegram(temp_file_path, meta)

        except Exception as e:
            print(f"  [✗] Error processing track: {e}")

        finally:
            # Delete file to prevent filling Colab memory/disk
            if os.path.exists(temp_file_path):
                os.remove(temp_file_path)

        # Pause to stay within Telegram flood limits (~20 messages/min in group/channels)
        time.sleep(3)

if __name__ == "__main__":
    process_and_upload_all(TARGET_URL)
    print("\nBatch upload process completed.")
```