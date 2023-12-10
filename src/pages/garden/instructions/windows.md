---
title: 'Windows'
description: '🌱 ~ Some info I keep forgetting on Windows lol'
layout: "../../../layouts/Layout.astro"
---

## 📝 Info

...

## ❓ Random

### How do I remove the process currently using a port on localhost in Windows? (link)

**1.** Open up cmd.exe (note: you may need to run it as an administrator, but this isn’t always necessary), then run the below command:

```
netstat -ano | findstr :<PORT>

(Replace <PORT> with the port number you want, but keep the colon)

ps: the last column is the PID (process identifier)
```

**2.** Next, run the following command:

`taskkill /PID <PID> /F`


### How to Format a Bootable USB Drive (link)

This is for when you want to restore back your pen drive to its usual condition.
This is done by formatting the pen drive via DiskPart by follwoing the steps under:

**1.** Open Run using the key combination (Win key + R).

**2.** Type cmd to open Command Prompt.

**3.** Type diskpart and run the pop-up winidow that appears. This opens DiskPart.

**4.** Type list disk. This will list all the memory storage devices connected to the PC.

**5.** Type select disk 1. (usually disk 1 if no other storage devices are connected).
The number specifies the drive to be formatted. Drive 0 wil be your internal hard disk. Identify and select your disk correctly.

**6.** Type clean. This wipes data off your pen drive.

**7.** Type create partition primary. This will format the pen drive as FAT.

**8.** Now go to My Computer or This PC, and format the pen drive by right clicking on it and selecting the format option.