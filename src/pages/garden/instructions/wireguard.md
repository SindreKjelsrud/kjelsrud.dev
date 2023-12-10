---
title: 'Wireguard'
description: '🌿 ~ Some info I keep forgetting lol'
layout: "../../../layouts/Layout.astro"
---

## 📝 Info

[Wireguard](https://www.wireguard.com/) is a VPN service I use to connect to the server at home.

One needs to configure the connection between the machine server and the new device.


## 📋 Different commands

- ***get servers network info***

`ifconfig`

- ***generate private & public keys***

`wg genkey | tee privatekey | wg pubkey > publickey`

- ***change permissions***

`chmod 600 privatekey && chmod 600 wg0.conf`

- ***start and enable wireguard server***

`systemctl start wg-quick@wg0 && systemctl enable wg-quick@wg0`

- ***check status***

`systemctl status wg-quick@wg0`

- ***add client on wireguard server***

`wg set wg0 peer PUBLICKEY_CLIENT allowed-ips ADDRESS_CLIENT && wg-quick show wg0`

- ***wg0.conf***

```
[Interface]
Address = redacted/24
ListenPort = 55555
PrivateKey = redacted

PostUp = iptables -A FORWARD -i wg0 -j ACCEPT
PostUp = iptables -t nat -A POSTROUTING -o SERVER_IFCONFIG_NAME -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT
PostDown = iptables -t nat -D POSTROUTING -o SERVER_IFCONFIG_NAME -j MASQUERADE
```