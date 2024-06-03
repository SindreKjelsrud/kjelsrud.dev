---
title: 'sidsIgloo ~ A Minecraft server'
description: '🌿 ~ Some info about the server'
layout: "../../../layouts/Layout.astro"
---

## 📝 Info

sidsIgloo is a Minecraft server created for fun and learning. It's one of my first services to run on a server by myself and I've learned a bit from it! 

## 👷 Server work & maintenance

### 🛠️ How to run

```
1. Start screen with `screen`
2. Run start command: `java -Xmx4096M -jar server.jar nogui`
3. Press "ctrl + a + d" to exit screen
4. To enter the running screen, write `screen -r`
```

### ⬆️ Updating server version

1. Move everything, except `eula`, `logs`, and old server version to a folder named `backup` (or whatever you want to call it)
2. Delete remaining files/folders
3. Download latest Minecraft server from [website](https://www.minecraft.net/en-us/download/server) using `curl -O {LINK}`
4. Run the new server with the command on the website 
5. Edit `eula.txt` to ***true***
6. Move files/folders from `backup` to main directory again with `rsync -a backup/* .`
7. Finito! Run server again as usual

### Plugins

*Not added yet..*
