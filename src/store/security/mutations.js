export function loginSuccess (state, loginModel) {
    console.log("loginSuccess ", loginModel)
    state.session.id = loginModel.userName
    state.session.userName = loginModel.userName
}  


