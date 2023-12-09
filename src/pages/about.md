---
title: 'About Me'
description: 'Some information about me & stuff I like'
layout: "../layouts/Layout.astro"
---

```js
public class Me {
    
    private String self;

    public Information info(self) {
        self.name = "Sindre Kjelsrud";
        self.nickname = "Sid";
        self.year_born = 1999;
        self.hometown = "Skedsmokorset, Viken";
        self.curr_location = "Bergen, Vestlandet";
        self.university = "Western University of Applied Sciences";
    } 

    public Favourites favs(self) {
        self.fav_sport = "bouldering && climbing";
        self.fav_color = "purple";
        self.fav_series = "Silicon Valley";
        self.fav_anime = "One Piece";
        self.fav_movie = "The Social Network || Ready Player One";
        self.fav_animemov = "Le Sommet des Dieux";
    }

    public ContactInformation contact_info(self) {
        self.github = "SindreKjelsrud";
        self.linkedin = "Sindre Kjelsrud";
        self.instagram = "sindrekjelsrud";
    }
}
```