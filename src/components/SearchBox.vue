<template>
  <div
    :class="['search-container', displaySearchMenu ? 'active' : '']"
  >
    <slot name="search"></slot>
    <v-layout
      row
      align-end
      class="px-3 pb-2 pt-3"
    >
      <v-flex>
        <v-layout wrap align-center>
          <v-flex xs6 class='px-3' v-for="(item, idx) in searchItems" :key="idx">
            <TextField
              v-if="!item.items"
              v-model="item.model"
              :label="item.label"
            />
            <Select
              v-else
              v-model="item.model"
              :items="item.items"
              :label="item.label"
            />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-btn
        depressed
        dark
        color="tertiary"
        class="btn-search mb-3"
        @click="onClickButton"
      >
        <v-icon size="20">search</v-icon>&nbsp;<span class="mr-2">Cari</span>
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
import TextField from '@/components/TextField'
import Select from '@/components/Select'

export default {
  components: {
    TextField,
    Select
  },
  props: {
    displaySearchMenu: {
      required: true,
      type: Boolean
    },
    searchItems: {
      type: Array,
      required: true
    },
    onClickButton: {
      type: Function
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  background-color: var(--v-secondary-lighten3);
  border-radius: 10px;
  box-shadow: inset 0 2px 2px rgba(0,0,0,.1);
  transition: max-height 0.2s;
  max-height: 0px;
  overflow: hidden;
  &.active {
    max-height: 300px;
  }
}

.btn-search {
  margin-bottom: 12px;
  height: 41px;
}
</style>
