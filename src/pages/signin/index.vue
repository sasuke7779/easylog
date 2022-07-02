<template>
  <div class="l-contents">
    <section class="c-section-top">
      <div class="c-section-top__container">
        <h2 class="c-ttl-top">ログイン</h2>
      </div>
    </section>

    <div class="c-block-form">
      <div class="c-block-form__container">
        <form action="" class="c-form-sign">
          <div class="c-form-sign__item">
            <label for="email">メールアドレス</label>
            <input
              type="email"
              name="email"
              id="email"
              class="c-form-input-email"
            />
          </div>
          <div class="c-form-sign__item">
            <label for="password">パスワード</label>
            <input
              type="password"
              name="password"
              id="password"
              class="c-form-input-pw"
            />
          </div>
          <NuxtLink to="/signup" class="c-form-sign__switch-link"
            >新規登録はこちら</NuxtLink
          >
          <button type="button" class="c-form-submit">ログイン</button>
        </form>
        <!-- [/c-form-sign] -->
      </div>
    </div>
    <!-- [/c-block-form] -->
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>
