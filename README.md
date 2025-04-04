## Follow me
- https://www.instagram.com/baumannzone/
- https://www.threads.net/@baumannzone

# Lazy load routes on Vue
> with Webpack dynamic comments 🔮

![main-terminal-image: lazy loading routes](./assets/main.png)

>  [Twitter](https://x.com/baumannzone) &nbsp;&middot;&nbsp;
>  [Instagram](https://instagram.com/baumannzone) &nbsp;&middot;&nbsp;
>  [Twitch](https://twitch.tv/baumannzone) &nbsp;&middot;&nbsp;
>  [Threads](https://threads.net/baumannzone)

---

## Branches

Each branch has its own router code. There are 5 branches:

- `main`: Routes without lazy loading.
- `lazy-load`: Lazy loading routes with randomly generated hashed chunks.
- `lazy-load-named-chunks`: Lazy loading routes with manually generated named chunks.
- `lazy-load-named-chunks-request`: Lazy loading routes with dynamically generated named chunks.
- `lazy-load-grouped-chunks`: Lazy loading routes grouped into two separate chunks.

## Build output

- `main`:  
  ![main image](./assets/1-main.png)
  
- `lazy-load`:  
  ![lazy load image](./assets/2-lazy-load.png)

- `lazy-load-named-chunks`:  
  ![lazy load named chunks image](./assets/3-lazy-load-named-chunks.png)

- `lazy-load-named-chunks-request`:  
  ![lazy load request chunks image](./assets/4-lazy-load-request-chunks.png)

- `lazy-load-grouped-chunks`:  
  ![grouped chunks image](./assets/5-grouped-chunks.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
