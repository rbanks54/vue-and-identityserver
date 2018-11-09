import Oidc from 'oidc-client';

var mgr = new Oidc.UserManager({
    authority: 'https://localhost:5443',
    client_id: 'js',
    redirect_uri: 'https://localhost:5000/callback',
    response_type: 'id_token token',
    scope: 'openid profile api1',
    post_logout_redirect_uri: 'https://localhost:5000/',
    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),


    // automaticSilentRenew: true,
    // silent_redirect_uri: 'https://localhost:5000/static/silent-renew.html',
    //   accessTokenExpiringNotificationTime: 10,
    //   filterProtocolClaims: true,
    //   loadUserInfo: true
})

// Oidc.Log.logger = console;
// Oidc.Log.level = Oidc.Log.INFO;

// mgr.events.addUserLoaded(async function (user) {
//   await store.dispatch('refreshUserInfo');
//   await store.dispatch('ensureUserIsKnown');
// });

// mgr.events.addAccessTokenExpiring(function () {
//   // console.log('AccessToken Expiring：', arguments);
// });

// mgr.events.addAccessTokenExpired(function () {
//   mgr.signoutRedirect().then(function (resp) {
//     store.commit('set_user', null); //clear user details in vuex
//   }).catch(function (err) {
//     console.log(err)
//   })
// });

// mgr.events.addSilentRenewError(function () {
//   console.error('Silent Renew Error：', arguments);
// });

// mgr.events.addUserSignedOut(function () {
//   mgr.signoutRedirect().then(function (resp) {
//     store.commit('set_user', null); //clear user details in vuex
//   }).catch(function (err) {
//     console.log(err)
//   })
// });

// class SecurityService {  

//   constructor(){
//     // console.log('Creating SecurityService instance')   
//   }

//   async getUser () {
//     let self = this;
//     return new Promise((resolve, reject) => {
//       mgr.getUser().then(function (user) {
//         if (user == null) {
//           return resolve(null)
//         } else {
//           return resolve(user)
//         }
//       }).catch(function (err) {
//         console.log(err)
//         return reject(err)
//       });
//     })
//   }

//   signIn (returnToUrl) {
//     returnToUrl ? mgr.signinRedirect({ state: returnToUrl })
//         : mgr.signinRedirect();
//   }

//   signOut () {
//     var self = this;
//     mgr.signoutRedirect().then(function (resp) {      
//       // console.log('signed out', resp);
//     }).catch(function (err) {
//       console.log(err)
//     })
//   }
// }

// let service = new SecurityService(); 

// export {service as default, mgr};

export default mgr;