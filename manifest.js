{
    "manifest_version": 3,
    "name": "TreasureX",
    "version": "1.0.0",
    "description": "Advanced Trading Analytics & Alpha Signals",
    "permissions": [
      "storage",
      "activeTab",
      "scripting"
    ],
    "host_permissions": [
      "https://dexscreener.com/*",
      "https://dextools.io/*"
    ],
    "action": {
      "default_popup": "popup.html",
      "default_icon": {
        "16": "icons/icon16.png",
        "48": "icons/icon48.png",
        "128": "icons/icon128.png"
      }
    },
    "background": {
      "service_worker": "background.js",
      "type": "module"
    },
    "content_scripts": [
      {
        "matches": ["https://dexscreener.com/*", "https://dextools.io/*"],
        "css": ["content.css"],
        "js": ["content.js"]
      }
    ],
  } 