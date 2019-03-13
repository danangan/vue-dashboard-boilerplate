<template>
  <div>
    <v-layout wrap>
      <v-flex xs6>
        <TextField
          outline
          class="mr-3"
          v-model="phone1"
          hide-details
          label="Telepon 1"
        ></TextField>
      </v-flex>
      <v-flex xs6>
        <TextField
          outline
          class="ml-3"
          v-model="phone2"
          hide-details
          label="Telepon 2"
        ></TextField>
      </v-flex>
      <v-flex xs6>
        <TextField
          outline
          class="mr-3"
          v-model="fax"
          hide-details
          label="Fax"
        ></TextField>
      </v-flex>
      <v-flex xs6>
        <TextField
          outline
          class="ml-3"
          v-model="email"
          hide-details
          label="Email"
        ></TextField>
      </v-flex>
      <v-flex xs6>
        <TextField
          outline
          class="mr-3"
          v-model="website"
          hide-details
          label="Situs Web"
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
  components: {
    TextField,
    SaveButtonSection
  },
  data () {
    return {
      phone1: '',
      phone2: '',
      email: '',
      fax: '',
      website: ''
    }
  }
}
</script>
