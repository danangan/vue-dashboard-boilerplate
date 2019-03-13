<template>
  <div>
    <!-- APP DRAWER -->
    <v-navigation-drawer
      app
      v-model="isDrawerOpen"
      class="drawer-app"
    >
      <v-layout column align-center class="drawer-header elevation-1">
        <h1 class="title font-weight-regular white--text">Sample</h1>
      </v-layout>
      <div class="">
        <!-- <h2 class="px-3 py-2 drawer--text text--lighten-2 font-weight-bold body-1">Navigation</h2> -->
        <ul
          class="expandable-list pa-0"
          v-for="(menu, idx) in menus"
          :key="idx"
        >
          <!-- parent -->
          <li
            class="menu-item header drawer--text text--lighten-2"
            @click="menu.model = !menu.model"
          >
            <v-icon class="drawer--text text--lighten-2">
              {{ menu.model ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
            </v-icon>
            <span>
              {{ menu.title }}
            </span>
          </li>

          <!-- children -->
          <div :class="['expandable-items', menu.model ? 'active' : '']" >
            <router-link
              tag="div"
              v-for="item in menu.children"
              :key="item.title"
              :to="item.link"
              class="link"
            >
              <li class="menu-item child drawer--text text--lighten-2">
                <v-icon size="13" class="drawer--text text--lighten-2">{{ item.icon }}</v-icon>
                <span>{{ item.title }}</span>
              </li>
            </router-link>
          </div>
        </ul>
      </div>
    </v-navigation-drawer>

    <!-- APP TOOLBAR -->
    <v-toolbar app height=55 flat class="primary-gradient-bg elevation-1" dark>
      <v-btn icon @click="toggleDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-layout align-center class="toolbar-header ml-3">
        <!-- <LazyImage
          src='https://picsum.photos/500/300?image=10'
          height="30px"
          width="30px"
          class="d-inline-block mr-3"
        /> -->
        <!-- <h1 class="subheading font-weight-regular">PT Abadi Segar Jaya</h1> -->
      </v-layout>
      <v-spacer></v-spacer>
      <div class="mr-3">Administrator</div>
      <v-icon>notifications</v-icon>
      <v-toolbar-items>
        <v-menu
          left
          offset-y
        >
          <v-btn
            slot="activator"
            dark
            icon
          >
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(item, index) in settings"
              :key="index"
              @click="toggleSetting"
            >
              <v-list-tile-title>
                <v-icon size='15'>{{item.icon}}</v-icon>
                &nbsp;{{ item.title }}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>

    <!-- APP CONTAINER -->
    <v-container fluid class="main-app-container">
      <router-view></router-view>
    </v-container>

    <!-- APP FOOTER -->
    <!-- <v-footer class="pa-3" app>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer> -->
  </div>
</template>

<script>
// import LazyImage from '@/components/LazyImage'

export default {
  name: 'MainApp',
  components: {
    // LazyImage
  },
  data () {
    return {
      menus: [
        {
          title: 'Company',
          model: true,
          children: [
            {
              title: 'Company Data',
              icon: '$vuetify.icons.company',
              link: '/company-data'
            },
            {
              title: 'Location Data',
              icon: '$vuetify.icons.location',
              link: '/location-data'
            },
            {
              title: 'Employee Data',
              icon: '$vuetify.icons.employee',
              link: '/employee-data'
            }
          ]
        },
        {
          title: 'Setup',
          model: false,
          children: [
            {
              title: 'POS',
              icon: '$vuetify.icons.cash-register',
              link: '/pos'
            },
            {
              title: 'Category',
              icon: 'star',
              link: '/category'
            },
            {
              title: 'Item',
              icon: 'star',
              link: '/item'
            }
          ]
        },
        {
          title: 'Optional',
          model: false,
          children: [
            {
              title: 'Customer',
              icon: 'star',
              link: '/customer'
            },
            {
              title: 'Vendor',
              icon: 'star',
              link: '/vendor'
            },
            {
              title: 'Point Reward',
              icon: 'star',
              link: '/point-reward'
            }
          ]
        },
        {
          title: 'Transaksi',
          model: false,
          children: [
            {
              title: 'Pembelian (Lite Plus)',
              icon: 'star',
              link: '/purchase'
            },
            {
              title: 'Inventory',
              icon: 'star',
              link: '/inventory'
            }
          ]
        },
        {
          title: 'Laporan',
          model: false,
          children: [
            {
              title: 'Penjualan',
              icon: 'star',
              link: '/sales-report'
            },
            {
              title: 'Pembelian',
              icon: 'star',
              link: '/purchase-report'
            },
            {
              title: 'Inventory',
              icon: 'star',
              link: '/inventory-report'
            }
          ]
        }
      ],
      settings: [
        {
          title: 'Setting',
          icon: '$vuetify.icons.setting'
        },
        {
          title: 'Logout',
          icon: '$vuetify.icons.logout'
        }
      ],
      right: null,
      isDrawerOpen: true,
      isDropDownOpen: false
    }
  },
  methods: {
    toggleDrawer () {
      this.isDrawerOpen = !this.isDrawerOpen
    },
    toggleSetting () {
      this.isDropDownOpen = !this.isDropDownOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  width: 200px;
}

.expandable-list {
  &:first-of-type {
    border-top: 1px solid var(--v-secondary-darken3);
  }
  border-bottom: 1px solid var(--v-secondary-darken3);
}

.link {
  text-decoration: none;
  &.router-link-active {
    background-color: rgba($color: #000, $alpha: 0.2);
    box-shadow: inset 0 1px 1px rgba($color: #000, $alpha: 0.2);
  }
}

.menu-item {
  padding: 10px;
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
  & > i {
    margin-right: 10px;
  }
  &.child {
    padding-left: 30px;
    font-size: 13px;
  }
}

.expandable-items {
  max-height: 0;
  transition: max-height 0.2s!important;
  overflow: hidden;
  &.active {
    max-height: 800px;
  }
}

.toolbar-header {
  width: auto;
}

.drawer-header {
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-app-container {
  padding: 30px 50px;
  height: calc(100vh - 55px);
  overflow-y: scroll;
}

.drawer-app {
  background-color: var(--v-secondary-darken4)!important;
}

.drawer--text {
  color: var(--v-secondary-lighten1);
}
</style>
