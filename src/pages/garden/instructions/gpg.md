---
title: 'GPG'
description: '🌱 ~ Info around GPG'
layout: "../../../layouts/Layout.astro"
---

## 📝 Info

...

### 🔗 Links

- [Encrypting and Decrypting Directory in Linux](https://www.baeldung.com/linux/encrypting-decrypting-directory)

## 📋 Commands

### Encrypt Directory Using Symmetric Key

```
gpgtar --encrypt --symmetric --output {NAME_OF_TO_BE_ENCRYPTED_FOLDER}.gpg --gpg-args="--passphrase={CHOSEN_PASSPHRASE} --batch" {NAME_OF_DIRECTORY_TO_ENCRYPT}
```

### Decrypting an Encrypted Directory 

```
mkdir {NAME_OF_DIRECTORY_TO_PUT_DECRYPTED_CONTENTS}

gpgtar --decrypt --directory {NAME_OF_DIRECTORY_TO_PUT_DECRYPTED_CONTENTSv} {ENCRYPTED_FOLDER}.gpg
```
