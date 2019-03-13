<template>
  <div>
    <h2 class="mb-3 headline">
      Data Lokasi
    </h2>
    <v-card class="card-container">

      <!-- Action buttons goes here -->
      <v-layout class="mb-3">
        <v-btn
          outline
          small
          class="ml-0 my-0"
          color='primary'
          @click="displaySearchMenu = !displaySearchMenu"
        >
          <v-icon small>{{displaySearchMenu ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
          &nbsp;pencarian
        </v-btn>
        <v-btn
          outline
          small
          class="ml-0 my-0"
          color='primary'
          @click="newLocationModalShow = true"
        >
          <v-icon small>add</v-icon>
          &nbsp;tambah lokasi
        </v-btn>
        <v-btn
          outline
          small
          class="ml-0 my-0"
          color='primary'
          @click="uploadFromExcelModalShow = true"
        >
          <v-icon small>cloud_upload</v-icon>
          &nbsp;upload data dari excel
        </v-btn>
        <v-btn
          outline
          small
          class="ml-0 my-0"
          color='primary'
        >
          <v-icon size="12">$vuetify.icons.file</v-icon>
          &nbsp;saldo awal
        </v-btn>
        <v-btn
          small
          outline
          class="ml-0 my-0"
          color='primary'
        >
          <v-icon size="12">$vuetify.icons.book</v-icon>
          &nbsp;anggaran akun
        </v-btn>
      </v-layout>

      <!-- Search Box Goes Here -->
      <SearchBox
        :displaySearchMenu="displaySearchMenu"
        :searchItems="searchItems"
        :onClickButton="() => {}"
      />

      <!-- Empty div for spacing -->
      <div class="mb-3"/>

      <!-- Display table goes here -->
      <v-data-table
        class="elevation-1 a"
        :headers="headers"
        :items="locationsMock"
        hide-actions
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.index + 1 }}</td>
          <td>{{ props.item.kode }}</td>
          <td class="text-xs-left">{{ props.item.nama_lokasi }}</td>
          <td class="text-xs-left">{{ props.item.site }}</td>
          <td class="text-xs-left">{{ props.item.tipe_inventori }}</td>
          <td class="text-xs-left">{{ props.item.tipe_lokasi }}</td>
          <td class="text-xs-left">
            <v-btn icon class="mx-0" small><v-icon small>edit</v-icon></v-btn>
            <v-btn icon class="mx-0" small><v-icon small>delete</v-icon></v-btn>
            <v-btn icon class="mx-0" small><v-icon small>calendar_today</v-icon></v-btn>
            <v-btn icon class="mx-0" small><v-icon small>image</v-icon></v-btn>
            <v-btn icon class="mx-0" small><v-icon small>$vuetify.icons.qrcode</v-icon></v-btn>
          </td>
        </template>
      </v-data-table>
      <!-- This is a workaround for the css selector of the vuetify, please do not remove this empty div -->
      <div />
    </v-card>

    <!-- Modals goes here -->
    <NewLocationModal v-model='newLocationModalShow'/>
    <UploadFromExcelModal v-model='uploadFromExcelModalShow' />
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import NewLocationModal from './NewLocationModal'
import UploadFromExcelModal from '@/components/UploadFromExcelModal'

export default {
  name: 'LocationData',
  components: {
    SearchBox,
    NewLocationModal,
    UploadFromExcelModal
  },
  data () {
    return {
      headers: [
        {
          text: 'No',
          align: 'left',
          sortable: false,
          value: 'no'
        },
        {
          text: 'Kode',
          value: 'kode',
          align: 'left',
          sortable: false
        },
        {
          text: 'Nama Lokasi',
          value: 'nama_lokasi',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Site',
          value: 'site',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Tipe Inventory',
          value: 'tipe_inventory',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Tipe Lokasi',
          value: 'tipe_lokasi',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Action',
          sortable: false,
          align: 'left'
        }
      ],
      locations: [
        {
          kode: 'GS003',
          nama_lokasi: 'Cipondoh',
          site: 'Tangerang',
          tipe_inventori: 'Normal',
          tipe_lokasi: 'Toko'
        }
      ],
      searchItems: [
        {
          label: 'Kategori',
          model: '',
          items: ['a', 'b', 'c', 'd']
        },
        {
          label: 'Kata kunci',
          model: ''
        },
        {
          label: 'Site',
          model: '',
          items: ['a', 'b', 'c', 'd']
        },
        {
          label: 'Tipe Lokasi',
          model: '',
          items: ['a', 'b', 'c', 'd']
        }
      ],
      displaySearchMenu: false,
      newLocationModalShow: false,
      uploadFromExcelModalShow: false
    }
  },
  computed: {
    locationsMock () {
      const res = []

      for (let index = 0; index < 20; index++) {
        res.push(this.locations[0])
      }

      return res
    }
  }
}
</script>

<style lang="scss" scoped>
.data-table {
  border: 1px solid rgba($color: #000000, $alpha: 0.24)
}
</style>
