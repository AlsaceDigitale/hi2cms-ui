# hi2cms-ui

### Compiles and hot-reloads for development
```
yarn serve
```

To change backend api url (by default its http://localhost:1337) 

```
VUE_APP_API_ROOT="http://YOUR_SERVER_IP:YOUR_PORT" yarn serve
VUE_APP_API_ROOT=https://hi2cms-dev.osc-fr1.scalingo.io/ yarn serve

```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Production deployment

You have to set:

- VUE_APP_API_ROOT : root of the backend api
- VUE_APP_MEDIA_ROOT : prefix of media (empty if you use AWS)