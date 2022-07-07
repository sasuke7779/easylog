import { getAuth, onAuthStateChanged } from 'firebase/auth';
export default async ({ store, route, redirect }) => {
  if (!store.getters.getUserUid) {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      user = user ? user : {};
      const loginStatus = user.uid ? true : false;

      store.dispatch('onAuth', { user: user });

      if (!loginStatus && route.name !== 'index') {
        redirect('/');
      }
    });
  }
};
