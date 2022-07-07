import { getAuth, onAuthStateChanged } from 'firebase/auth';
export default async ({ store, route, redirect }) => {
  if (!store.getters.getUserUid) {
    const auth = getAuth();
    console.log('1');
    let hoge = await onAuthStateChanged(auth, (user) => {
      return new Promise((resolve) => {
        user = user ? user : {};
        store.dispatch('onAuth', { user: user });
        console.log('2');
      });
    });
  }

  if (!store.getters.getUserUid && route.name !== 'index') {
    // store.dispatch('onAuth');
    // redirect('/');
  }
};
