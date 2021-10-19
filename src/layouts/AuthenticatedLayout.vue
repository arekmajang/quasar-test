<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Title </q-toolbar-title>
        <div class="text-white">{{ userName }}</div>
        <q-btn icon="logout" :to="{ name: 'login' }" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item clickable tag="a" :to="{ name: 'balanceInquiry' }">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Balance Inquiry</q-item-label>
            <q-item-label caption> Cek Saldo </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" :to="{ name: 'purchase' }">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Purchase</q-item-label>
            <q-item-label caption> Cek Saldo </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" :to="{ name: 'payment' }">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            <q-item-label>payment</q-item-label>
            <q-item-label caption> Cek Saldo </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const userName = computed(() => store.state.security.session.userName);
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      userName,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
