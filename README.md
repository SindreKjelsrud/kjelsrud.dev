# v.3 of my personal website

![Alt Text](https://media4.giphy.com/media/vvbGMpbhZMcHSsD50w/giphy.gif?cid=ecf05e47qcz9h0plmj7zmn71kelzs4h6nj47bb1qmu0r1uvm&rid=giphy.gif&ct=g)

## Info

### What I've learned from the project so far

- Coding with html and css
- Some understanding of Github Actions + Pages
- How to use some of the most popular open-source static site generators
- How to create websites that are faster, more secure, and easier to maintain
- How to use templates to generate static websites
- How to use DNS pointers (A- & CNAME records)
- How to create & use layouts for a static website
- How to write JSON-docs and use data from it

### Updates

- v.1 - basic html/css
- v.2 - same site as this repo, just couldn't figure out last repository
- v.3 - made new repo as I'm still learning Git, site works - I'm happy lol

### Future plans:

- [ ] Add a "foodwall" for my recipes
- [ ] Might convert website over to either:
    - the hugo [cocoa](https://github.com/mtn/cocoa-eh-hugo-theme) theme, or
    - a svelte version (to learn svelte), or
    - a react version (to learn more react before internship)

## How do I run it locally?

1. [Hugo](https://gohugo.io/) must be installed
2. Clone the project and add submodules

```bash
git clone https://github.com/SindreKjelsrud/sindrekjelsrud.github.io.git
cd sindrekjelsrud.github.io
git submodule update --init --recursive
```

3. To run the project use: `hugo serve` (livereload \<3)

> 3.5. To add a new blogpost use: `hugo new blog-posts/{NameOfPost}.md`

4. Feel free to create issues if you see room for improvement!

## Misc

### Useful links

- Hugo functions - https://gohugo.io/functions/

### Powered by:

1. Hugo - https://gohugo.io/
2. PaperMod - https://github.com/adityatelange/hugo-PaperMod
