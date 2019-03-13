<template>
  <v-dialog :value="value" persistent @input="$emit('input', false)" max-width="500">
    <!-- STEPPER -->
    <v-stepper v-model="step" class="v-card">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1"></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 2" step="2"></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 3" step="3"></v-stepper-step>
      </v-stepper-header>

      <!-- STEPPER CONTENT -->
      <v-stepper-items>

        <!-- STEP 1 -->
        <v-stepper-content step="1">
          <h3 class="mb-3 headline text-xs-center">Informasi Umum</h3>
          <TextField
            label="Kode lokasi"
            autofocus
          />
          <TextField
            label="Nama lokasi"
          />
          <TextArea
            label="Alamat lokasi"
            rows="2"
          />

          <v-divider />

          <v-layout class="mt-2" justify-end>
            <v-btn
              outline
              color="error"
              @click="$emit('input', false)"
            >
              Cancel
            </v-btn>

            <v-btn
              depressed
              dark
              color="tertiary"
              class="mr-0"
              @click="step = 2"
            >
              Continue
            </v-btn>
          </v-layout>
        </v-stepper-content>

        <!-- STEP 2 -->
        <v-stepper-content step="2">
          <h3 class="mb-3 headline text-xs-center">Informasi Kontak</h3>
          <TextField
            label="Telepon"
          />
          <TextField
            label="Email"
          />
          <TextField
            label="URL"
          />

          <v-divider />

          <v-layout justify-end class="mt-2">
            <v-btn
              outline
              color="error"
              @click="$emit('input', false)"
            >
              Cancel
            </v-btn>
            <v-btn
              dark
              outline
              color="primary"
              @click="step = 1"
            >
              Back
            </v-btn>
            <v-btn
              dark
              depressed
              color="tertiary"
              class="mr-0"
              @click="step = 3"
            >
              Continue
            </v-btn>
          </v-layout>
        </v-stepper-content>

        <!-- STEP 3 -->
        <v-stepper-content step="3" class="d-relative pa-0">
          <LoaderOverlay v-show="isLoading"/>
          <div class="px-4 py-3">
            <h3 class="mb-3 headline text-xs-center">Informasi Pelengkap</h3>

            <Select
              label="Site"
            />

            <Select
              label="Tipe Inventori"
            />
            <Select
              label="Tipe Lokasi"
            />
            <TextField
              label="Keterangan"
            />

            <v-divider />

            <v-layout justify-end class="mt-2">
              <v-btn
                outline
                color="error"
                @click="$emit('input', false)"
              >
                Cancel
              </v-btn>
              <v-btn
                dark
                outline
                color="primary"
                @click="step = 2"
              >
                Back
              </v-btn>
              <v-btn
                dark
                depressed
                color="tertiary"
                class="mr-0"
                @click="submitForm"
              >
                Simpan
              </v-btn>
            </v-layout>
          </div>
        </v-stepper-content>

        <!-- STEP 4 -> FINISHED -->
        <v-stepper-content step="4">
          <v-layout column align-center class="px-3 py-2">
            <v-icon size="90" color="info" class="mb-4">$vuetify.icons.check</v-icon>
            <h3 class="title text-xs-center mb-4">Lokasi baru telah berhasil disimpan.</h3>
            <v-btn
              dark
              depressed
              color="tertiary"
              class="mb-0"
              @click="closeModal"
            >
                Tutup
            </v-btn>
          </v-layout>
        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
  </v-dialog>
</template>

<script>
import TextField from '@/components/TextField'
import TextArea from '@/components/TextArea'
import Select from '@/components/Select'
import LoaderOverlay from '@/components/LoaderOverlay'

export default {
  name: 'NewLocationModal',
  components: {
    TextField,
    TextArea,
    Select,
    LoaderOverlay
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      step: 1,
      isLoading: false
    }
  },
  methods: {
    onInput (e) {
      console.log(e)
      this.$emit('input', e.target.value)
    },
    submitForm () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.step = 4
      }, 1000)
    },
    closeModal () {
      this.$emit('input', false)
      // reset the step asynchronously for user experience
      setTimeout(() => {
        this.step = 1
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-content {
  overflow-y: scroll;
  height: 400px;
}
</style>
