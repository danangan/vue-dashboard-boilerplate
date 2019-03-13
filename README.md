# Vue Dashboard Sample using Vuetify

## Project setup
```
npm install
```

### Start development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Features
- Vuex
- Vue Router
- Src route alias @

  You can write `@/components/MyComponents` instead of `../../components/MyComponents`
- Localization support with vuex state
  - With LocaleSelector Component
  - You should use the localization mixins to use this feature

Example:
``` javascript
<i18n>
{
  "en": {
    "hello": "Hello World"
  },
  "idn": {
    "hello": "Halo dunia"
  }
}
</i18n>

<template>
  <h1>
  {{ $t('hello') }}
  </h1>
  <LocaleSelector />
</template>

<script>
import LocaleSelector from '@/components/LocaleSelector'

import localization from '@/mixins/localization'

export default {
  name: 'Hello',
  components: {
    LocaleSelector
  }
  mixins: [
    localization
  ],
</script>
```
- Vuetify
  - The global styling is located on global-style.scss
  - All the styling override from the vuetify you should put it on global-style.scss it
