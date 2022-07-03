<template>
  <div class="c-block-result">
    <div class="c-block-result__container">
      <div class="c-cassette-result">
        <dl class="c-cassette-result__dl">
          <dt class="c-cassette-result__dt">利益総額&nbsp;:&nbsp;</dt>
          <dd class="c-cassette-result__dd">50000円</dd>
        </dl>
        <dl class="c-cassette-result__dl">
          <dt class="c-cassette-result__dt">損益総額&nbsp;:&nbsp;</dt>
          <dd class="c-cassette-result__dd">-20000円</dd>
        </dl>
        <div class="c-cassette-result__graph">
          <div class="c-cassette-result__graph-head">
            <p class="c-txt">収支率 : +500%</p>
          </div>
          <div class="c-cassette-result__graph-body">
            <div class="c-cassette-result__graph-item"></div>
          </div>
        </div>
      </div>
      <!-- [/c-cassette-result] -->
    </div>
  </div>
  <!-- [/c-block-result] -->
</template>
<script>
export default {
  name: "LogTop",
  computed: {},
};
</script>
