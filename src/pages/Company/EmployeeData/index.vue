<template>
  <div>
    <h2 class="mb-3">Data Pegawai</h2>
    <v-card class="card-container">

      <!-- Action buttons goes here -->
      <v-layout class="mb-1">
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
          @click="newEmployeeModalShow = true"
        >
          <v-icon small>add</v-icon>
          &nbsp;tambah pegawai
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
          <v-icon size="12">$vuetify.icons.employee</v-icon>
          &nbsp;daftar pengguna
        </v-btn>
        <v-btn
          small
          outline
          class="ml-0 my-0"
          color='primary'
        >
          <v-icon size="12">$vuetify.icons.setting</v-icon>
          &nbsp;peran
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
        :headers="headers"
        :items="employees"
        hide-actions
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.index + 1 }}</td>
          <td>{{ props.item.kode }}</td>
          <td class="text-xs-left">{{ props.item.nama_pegawai }}</td>
          <td class="text-xs-left">{{ props.item.username }}</td>
          <td class="text-xs-left">{{ props.item.peran }}</td>
          <td class="text-xs-left">{{ props.item.jabatan }}</td>
          <td class="text-xs-left">{{ props.item.telepon }}</td>
          <td class="text-xs-left">{{ props.item.lokasi }}</td>
          <td class="text-xs-left">
            <v-btn icon class="mx-0" small><v-icon small>edit</v-icon></v-btn>
            <v-btn icon class="mx-0" small><v-icon small>delete</v-icon></v-btn>
          </td>
        </template>
      </v-data-table>
    </v-card>

    <!-- Modals goes here -->
    <NewEmployeeModal v-model='newEmployeeModalShow'/>
    <UploadFromExcelModal v-model='uploadFromExcelModalShow' />
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import NewEmployeeModal from './NewEmployeeModal'
import UploadFromExcelModal from '@/components/UploadFromExcelModal'

export default {
  name: 'LocationData',
  components: {
    SearchBox,
    NewEmployeeModal,
    UploadFromExcelModal
  },
  data () {
    return {
      headers: [
        {
          text: 'No',
          align: 'left',
          sortable: false
        },
        {
          text: 'Kode',
          align: 'left',
          sortable: false
        },
        {
          text: 'Nama Pegawai',
          sortable: false,
          align: 'left'
        },
        {
          text: 'User Name',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Peran',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Jabatan',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Telepon/Handphone',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Lokasi',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Action',
          sortable: false,
          align: 'left'
        }
      ],
      employees: [
        {
          kode: '2016011',
          nama_pegawai: 'Aang Abdul Basir',
          username: '2016011',
          peran: 'Store Manager',
          jabatan: 'Store manager',
          telepon: '08122449907',
          lokasi: 'Jati Asih'
        }
      ],
      searchItems: [
        {
          label: 'Lokasi',
          model: '',
          items: ['a', 'b', 'c', 'd']
        },
        {
          label: 'Active Status',
          model: '',
          items: ['Active', 'Inactive']
        },
        {
          label: 'Criteria',
          model: '',
          items: ['a', 'b', 'c', 'd']
        },
        {
          label: 'Kata kunci',
          model: ''
        }
      ],
      displaySearchMenu: false,
      newEmployeeModalShow: false,
      uploadFromExcelModalShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.data-table {
  border: 1px solid rgba($color: #000000, $alpha: 0.24);
  border-radius: 0px!important;
}
</style>
