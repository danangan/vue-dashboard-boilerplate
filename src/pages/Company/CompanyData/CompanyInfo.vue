<template>
  <div>
    <v-layout wrap>
      <v-flex xs6>
        <TextField
          class="mr-4"
          v-model="companyCode"
          label="Kode Perusahaan"
          autofocus
        />
      </v-flex>
      <v-flex xs6/>
      <v-flex xs6>
        <TextField
          class="mr-4"
          v-model="companyName"
          label="Nama Perusahaan"
          autofocus
        />
      </v-flex>
      <v-flex xs6>
        <TextField
          outline
          class="ml-4"
          v-model="businessField"
          hide-details
          label="Bidang Usaha"
        ></TextField>
      </v-flex>
      <v-flex xs6>
        <TextField
          outline
          class="mr-4"
          v-model="npwp"
          hide-details
          label="Nomor NPWP"
        ></TextField>
      </v-flex>
      <v-flex xs6>
        <TextField
          outline
          class="ml-4"
          v-model="dateOfPKP"
          hide-details
          label="Tanggal PKP"
        ></TextField>
      </v-flex>
    </v-layout>
    <SaveButtonSection />
  </div>
</template>

<script>
import TextField from '@/components/TextField'
import SaveButtonSection from '@/components/SaveButtonSection'

export default {
  name: 'CompanyInfo',
  components: {
    TextField,
    SaveButtonSection
  },
  data () {
    return {
      companyCode: '',
      companyName: '',
      businessField: '',
      npwp: '',
      dateOfPKP: ''
    }
  }
}
</script>
