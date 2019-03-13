<i18n>
{
  "en": {
    "hello": "Select language"
  },
  "idn": {
    "hello": "Pilih bahasa"
  }
}
</i18n>

<template>
  <div class="select-lang-container">
    <span class="mr-2">{{ $t('hello') }}</span>
    <div class="select-wrapper">
      <select @value='locale' @change='onChangeLocale'>
        <option value='en'>English</option>
        <option value='idn'>Bahasa</option>
      </select>
      <v-icon
        class='icon'
        size='20'
      >
        arrow_drop_down
      </v-icon>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import localization from '../mixins/localization'

export default {
  name: 'app',
  mixins: [localization],
  methods: {
    ...mapMutations({
      changeLocale: 'app/changeLocale'
    }),
    onChangeLocale (e) {
      this.changeLocale(e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
select {
  outline: none;
  flex: 1;
}

.select-wrapper {
  border: 1px solid rgba($color: #000000, $alpha: 0.2);
  padding: 3px 2px 3px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.select-lang-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
