<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-sm-8">Selamat datang</div>
      <div class="col-12 col-sm-4">
        <q-form @submit="onLogin">
          <q-card>
            <q-card-section class="bg-secondary"> Login </q-card-section>
            <q-card-section>
              <IbInput
                v-model="loginModel.userName"
                label="Username"
                class="q-ma-md"
              />
              <IbInput
                v-model="loginModel.password"
                label="Pasword"
                type="Password"
              />
            </q-card-section>
            <q-card-actions>
              <q-space />
              <q-btn icon="login" label="login" type="submit" />
            </q-card-actions>
          </q-card>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import IbInput from "components/form/IbInput";
import securitySvc from "src/services/security";

export default {
  name: "Login",
  components: { IbInput },
  setup() {
    const { doLogin } = securitySvc();
    const loginModel = ref({
      userName: "",
      password: "",
    });
    const onLogin = () => {
      doLogin(loginModel.value);
    };
    return { loginModel, onLogin };
  },
};
</script>
