<template>
  <div>
    <v-layout align-center>
      <v-flex xs6>
        <TextField
          outline
          class="text-field"
          v-model="companyLogo"
          hide-details
          label="Logo Perusahaan"
        ></TextField>
      </v-flex>
      <v-flex xs2 class="btn-container">
        <v-btn
          outline
          color='primary'
          @click="$refs.companyLogoInput.click()"
        >
          <v-icon size="12">$vuetify.icons.upload</v-icon>
          &nbsp;Upload
        </v-btn>
        <input
          type="file"
          ref="companyLogoInput"
          @change="onChooseCompanyLogo"
          accept="image/*"
          class="d-none"
        >
      </v-flex>
    </v-layout>
    <v-layout align-center>
      <v-flex xs6>
        <TextField
          class="text-field"
          v-model="mainPageLogo"
          label="Main Page Logo"
        ></TextField>
      </v-flex>
      <v-flex xs2 class="btn-container pt-1">
        <v-btn
          outline
          color='primary'
          @click="$refs.mainPageLogoInput.click()"
        >
          <v-icon size="12">$vuetify.icons.upload</v-icon>
          &nbsp;Upload
        </v-btn>
        <input
          type="file"
          ref="mainPageLogoInput"
          @change="onChooseCompanyLogo"
          accept="image/*" class="d-none"
        >
      </v-flex>
    </v-layout>
    <v-layout align-center>
      <v-flex xs6>
        <TextField
          class="text-field"
          v-model="posPageLogo"
          label="POS Page Logo"
        ></TextField>
      </v-flex>
      <v-flex xs2 class="btn-container">
        <v-btn
          outline
          color='primary'
          @click="$refs.posPageLogoInput.click()"
        >
          <v-icon size="12">$vuetify.icons.upload</v-icon>
          &nbsp;Upload
        </v-btn>
        <input
          type="file"
          ref="posPageLogoInput"
          @change="onChooseCompanyLogo"
          accept="image/*" class="d-none"
        >
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
      companyLogo: '',
      mainPageLogo: '',
      posPageLogo: ''
    }
  },
  methods: {
    onChooseCompanyLogo () {

    }
  }
}
</script>

<style lang="scss" scoped>
.btn-container {
  padding-top: 7px;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
