import { mapState, mapMutations } from 'vuex'

export default {
  computed: mapState({
    locale: state => state.app.locale
  }),
  methods: {
    ...mapMutations({
      changeLocale: 'app/changeLocale'
    }),
    onChangeLocale (e) {
      this.changeLocale(e.target.value)
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
