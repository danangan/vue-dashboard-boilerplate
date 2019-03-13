<template>
  <v-dialog :value="value" persistent @input="$emit('input', false)" max-width="800">
    <v-card>
      <v-card-title class="headline">Tambah Pegawai Baru</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="card-content">
        <h3 class="mb-3">Data pegawai</h3>
        <v-layout wrap>
          <v-flex xs6>
            <TextField
              label="NIK"
            />
          </v-flex>
          <v-flex xs6/>
          <v-flex xs6>
            <TextField
              label="Nama Pegawai"
            />
          </v-flex>
          <v-flex xs6 class="pl-2">
            <TextField
              label="Jabatan"
            />
          </v-flex>
          <v-flex xs6>
            <TextField
              label="Tempat Lahir"
            />
          </v-flex>
          <v-flex xs6 class="pl-2">
            <TextField
              label="Tanggal Lahir"
            />
          </v-flex>
          <v-flex xs6>
            <TextField
              label="Jenis Kelamin"
            />
          </v-flex>
          <v-flex xs6/>
          <v-flex xs6>
            <Select
              label="Lokasi Bekerja"
            />
          </v-flex>
          <v-flex xs6 class="pl-2">
            <Select
              label="Departemen"
            />
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" @click="$emit('input',false)" outline>Batal</v-btn>
        <v-btn color="primary">Tambah pegawai</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TextField from '@/components/TextField'
import Select from '@/components/Select'

export default {
  name: 'NewLocationModal',
  components: {
    TextField,
    Select
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onInput (e) {
      console.log(e)
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-content {
  overflow-y: scroll;
  max-height: 400px;
}
</style>
