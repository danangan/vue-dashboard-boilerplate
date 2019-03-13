<template>
  <div>
    <v-layout wrap>
      <v-flex xs6>
        <TextArea
          outline
          :rows="2"
          class="mr-3"
          v-model="address"
          hide-details
          label="Alamat"
        />
      </v-flex>
      <v-flex xs6/>
      <v-flex xs6>
        <TextField
          outline
          class="mr-3"
          v-model="city"
          hide-details
          label="Kota"
        ></TextField>
      </v-flex>
      <v-flex xs6>
        <TextField
          outline
          class="ml-3"
          v-model="country"
          hide-details
          label="Negara"
        ></TextField>
      </v-flex>
    </v-layout>
    <SaveButtonSection />
  </div>
</template>

<script>
import TextField from '@/components/TextField'
import TextArea from '@/components/TextArea'

import SaveButtonSection from '@/components/SaveButtonSection'

export default {
  components: {
    TextField,
    TextArea,
    SaveButtonSection
  },
  data () {
    return {
      address: '',
      city: '',
      country: ''
    }
  }
}
</script>
