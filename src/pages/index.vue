<template>
  <div class="l-contents">
    <section class="c-section-top">
      <div class="c-section-top__container">
        <h2 class="c-ttl-top">Easy Log</h2>

        <div class="c-block-top-lead">
          <p class="c-txt-lead">
            GameFiでの収支をweb上に記録でき<br />管理台帳代わりに利用できます。<br />PDFへの出力も可能
          </p>
        </div>

        <!-- [/c-block-top-lead] -->
      </div>
    </section>

    <div class="c-block-links">
      <div class="c-block-links__container">
        <NuxtLink to="/signin" class="c-link-btn">ログイン</NuxtLink>
        <NuxtLink to="/signup" class="c-link-btn">新規登録</NuxtLink>
      </div>
    </div>
    <!-- [/c-block-links] -->
  </div>
</template>

<script>
export default {
  name: "TopPage",
};
</script>
