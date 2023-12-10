---
title: 'Linux'
description: '🌱 ~ Some info I keep forgetting on Linux lol'
layout: "../../../layouts/Layout.astro"
---

## 📝 Info

...

## ❓ Random

### Remove .DS_Store files

`find . -name ".DS_Store" -print -delete`

### Get & Send files/folders from/to Linux machine

```
Get files/folder from Linux machine:
scp -r sid@10.0.0.1:minecraft-old/ Desktop

Send files/folder to Linux machine:
scp pepenarutorun.png sid@10.0.0.1:~/minecraft-old
```

### How to Format USB using the Terminal (link)

**Step 1: Locate USB Drive**

> Open the terminal and run the following command: ***df***  
The terminal prints out a list of all mounted partitions and relevant information: used space, available space, used space percentage, and the path.  
Locate the USB in the list and find the corresponding device.

**Step 2: Unmount and Format USB Drive**

> Unmount the USB drives before formatting. To do so, run this command: ***sudo umount {USB_FILESYSTEM}***. After unmounting, format the USB drive using the preferred file system:
> - FAT32 file system: sudo mkfs.vfat /dev/{NAME_OF_DEVICE}  
> - NTFS file system: sudo mkfs.ntfs /dev/{NAME_OF_DEVICE}
> - exFAT file system: sudo mkfs.exfat /dev/{NAME_OF_DEVICE}

**Step 3: Verify USB Drive Formatting**

> Confirm the formatting process has completed successfully: ***sudo fsck /dev/{NAME_OF_DEVICE}***. A USB drive with no files indicates successful formatting.