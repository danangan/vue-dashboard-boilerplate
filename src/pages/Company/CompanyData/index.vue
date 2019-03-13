<template>
  <div>
    <h2 class="mb-3 headline">
      Data Perusahaan
    </h2>
    <v-card>
      <v-tabs
        tabs
        hide-slider
        class="tabs"
        active-class="active-tab-header"
        color="grey lighten-3"
      >
        <v-tab
          class="tab-header"
          :href="`#tab-${idx}`"
          v-for="(tab, idx) in tabs"
          :key="idx"
        >
          <v-icon size="15" class="subtitle-icon">{{tab.icon}}</v-icon>
          <span class="body-1 text-none ml-2">&nbsp;{{tab.text}}</span>
        </v-tab>

        <v-tab-item
          v-for="(item, idx) in tabContents"
          :key="idx"
          :value="`tab-${idx}`"
        >
          <div class="tab-content">
            <component v-bind:is="item"></component>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import CompanyInfo from './CompanyInfo'
import LocationInfo from './LocationInfo'
import ContactInfo from './ContactInfo'
import Logos from './Logos'

export default {
  name: 'CompanyData',
  components: {
    CompanyInfo,
    LocationInfo,
    ContactInfo,
    Logos
  },
  data () {
    return {
      tabs: [
        {
          text: 'Informasi Perusahaan',
          icon: '$vuetify.icons.company',
          component: CompanyInfo
        },
        {
          text: 'Lokasi',
          icon: '$vuetify.icons.marker',
          component: LocationInfo
        },
        {
          text: 'Informasi Kontak',
          icon: '$vuetify.icons.phone',
          component: ContactInfo
        },
        {
          text: 'Logo',
          icon: '$vuetify.icons.image',
          component: Logos
        }
      ]
    }
  },
  computed: {
    tabContents () {
      return this.tabs.map(item => item.component)
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitle-icon {
  line-height: 20px;
}

.tab-content {
  padding: 25px 30px;
}

.tab-header {
  min-width: 180px;
  & > * {
    justify-content: flex-start;
  }
  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.05);
  }
}
</style>

<style lang="scss">
.active-tab-header {
  background-color: white !important;
  opacity: 1!important;
  color: var(--v-primary-darken1);
  i.subtitle-icon {
    color: var(--v-primary-darken1)
  }
}
</style>
