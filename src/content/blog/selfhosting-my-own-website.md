---
title: "selfhosting my own website"
pubDate: 'May 06 2024'
description: ""
draft: false
---
As of the 13th of March 2024, `kjelsrud.dev` is hosted on own server, **eastblue <3**. This was such a milestone for myself, and I'm really proud of it! 🎉 Finally, I really own my website a 100% and I learned so much from the process! All from gaining more knowledge on GitHub Actions to learning how Caddy works. 📚

It all began with setting up Caddy, since the VM on my server was already up and running. Configuring Caddy was surpisingly straightforward, even with a lot of help/inspiration from [Mike Valstars](https://valstar.dev/) blogpost on [*Simple static site self-hosting for Astro with Caddy*](https://valstar.dev/blog/2022-09-06-astro-caddy-hosting/). Here's a snippet of my Caddyfile:

```
kjelsrud.dev {
    tls {EMAIL}
    encode zstd gzip

    root * /var/www/kjelsrud.dev/

    file_server {
        precompressed br gzip
    }

    handle_errors {
        rewrite * /404.html
        file_server
    }

    log {
        output file /var/log/caddy/access.log
    }
}
```

When this file was saved and the DNS was pointing to my server, it was supposed to work just fine. But, when checking out the log with `sudo systemctl status caddy`, I saw the HTTPS certificate was failing. Not understanding why and searching for a while I contacted by friend, [Mathias Haugsbø](https://mathiash98.github.io/), asking if he knew what the error could be.

He gave me some tips on using `dig` and `nmap` to get info on the DNS and network for the server. Using this, we saw that the ports `80` and `443` was marked as *filtered* when they should say *open* for a server where everything is good. Well, the ports weren't portforwarded... I forgot to do it hehe lesson learned! 😅

Next up was automating the deployment process using GitHub Actions! This setup was easily done, with some inspiration from the workflow for [fribyte.no](https://github.com/fribyte-code/fribyte.no). Now, the website could seamlessly build and deploy whenever changes were pushed!

In the future, I might even containerize my website using Docker, but we'll see!

Again, a big thanks to both Mike, for writing the blogpost, and Mathias for helping me understanding Caddy and the setup a bit more!

> *PS: I know this is over a month ago, but the bachelor thesis and sunbathing at the beach is taking up a lot of time..* ☀️