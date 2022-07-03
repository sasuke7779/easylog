<template>
  <div class="l-contents">
    <div class="l-contents__inner">
      <div class="l-column">
        <div class="l-column__container">
          <div class="l-column__main">
            <CommonSheetSelector />
            <!-- [/c-block-selector] -->

            <CommonSheetTable />
            <!-- [/CommonSheetTable] -->
          </div>
          <div class="l-column__side">
            <CommonSheetResult />
            <!-- [/CommonSheetResult] -->
          </div>
        </div>
      </div>
    </div>
    <NavBottomBar></NavBottomBar>
  </div>
</template>
<script>
export default {
  name: "LogTopId",
  computed: {},
};
</script>
