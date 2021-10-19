import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

const security = () => {

    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const doLogin = (loginModel) => {
        store.commit('security/loginSuccess', loginModel)
        console.log("loginModel", loginModel)
        router.push({name: 'balanceInquiry'})
    }

    return { doLogin}
}

export default security