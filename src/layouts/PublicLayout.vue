<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Internet Banking
        </q-toolbar-title>
        <div class="gt-xs">
          <q-btn
            dense
            flat
            label="Landing"
            icon="home"
            class="q-ma-none q-pa-sm"
            :to="{ name: 'landing' }"
          />
          <q-btn
            dense
            flat
            label="Faq"
            icon="list"
            class="q-ma-none q-pa-sm"
            :to="{ name: 'faq' }"
          />
          <q-btn
            dense
            flat
            label="Login"
            icon="login"
            :to="{ name: 'login' }"
            class="q-ma-none q-pa-sm"
          />
        </div>
        <div class="lt-sm">
          <q-btn dense flat icon="menu" class="q-ma-none q-pa-sm">
            <q-menu transition-show="flip-right" transition-hide="flip-left">
              <q-list style="min-width: 100px">
                <q-item clickable :to="{ name: 'login' }">
                  <q-item-section
                    ><q-icon name="mdi-account-arrow-right-outline"
                  /></q-item-section>
                  <q-item-section>Login</q-item-section>
                </q-item>
                <q-item clickable :to="{ name: 'landing' }">
                  <q-item-section>Landing</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section
                    ><q-icon name="help_outline"
                  /></q-item-section>
                  <q-item-section>Faq</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>&copy; 2021</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
