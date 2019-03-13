<template>
  <v-dialog :value="value" persistent @input="$emit('input', false)" max-width="400">
    <v-card>
      <v-card-title class="title text-xs-center" justify-center>
          Upload dari Excel
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-4">
        <v-layout align-end>
          <v-flex>
            <TextField
              value= ''
              label='Nama file'
            />
          </v-flex>
          <v-btn
            dark
            class="mb-3 mr-0"
            outline
            :style="{'height':'42px'}"
            color="primary"
            @click="$refs.uploadExcelInput.click()"
          >
            <v-icon size="12">$vuetify.icons.upload</v-icon>
            &nbsp;Pilih file
          </v-btn>
        </v-layout>
      </v-card-text>
      <input
        type="file"
        class="d-none"
        ref="uploadExcelInput"
        @change="onChooseFile"
      >
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="$emit('input',false)" outline>Cancel</v-btn>
        <v-btn depressed dark color="tertiary">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TextField from '@/components/TextField'

export default {
  name: 'UploadFromExcelModal',
  components: {
    TextField
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
    },
    onChooseFile () {

    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  justify-content: center;
}
</style>
