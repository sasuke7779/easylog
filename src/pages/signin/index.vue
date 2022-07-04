<template>
  <div class="l-contents">
    <section class="c-section-top">
      <div class="c-section-top__container">
        <h2 class="c-ttl-top">ログイン</h2>
      </div>
    </section>

    <div class="c-block-form" id="firebase-authui">
      <div class="c-block-form__container">
        <button type="button" class="c-form-submit" @click="login">
          Googleアカウントでログイン
        </button>
        <button type="button" class="c-form-submit" @click="loginGuest">
          ゲストとしてログイン
        </button>
        <!-- [/c-form-sign] -->
      </div>
    </div>
    <!-- [/c-block-form] -->
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch("login");
    },
    loginGuest() {
      this.$store.dispatch("loginGuest");
    },
  },
};
</script>
