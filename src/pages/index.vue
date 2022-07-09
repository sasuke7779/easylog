<template>
  <div class="l-contents">
    <section class="c-section-top">
      <div class="c-section-top__container">
        <h2 class="c-ttl-top">Easy Log</h2>

        <div class="c-block-top-lead">
          <!-- <p class="c-txt-lead">
            GameFiでの収支をweb上に記録でき<br />管理台帳代わりに利用できます。<br />PDFへの出力も可能
          </p> -->
          <p class="c-txt-lead">
            GameFiでの収支をweb上に記録でき<br />管理台帳代わりに利用できます。
          </p>
        </div>

        <!-- [/c-block-top-lead] -->
      </div>
    </section>

    <div class="c-block-form">
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
  </div>
</template>

<script>
export default {
  name: "TopPage",
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
