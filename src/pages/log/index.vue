<template>
  <div class="l-contents">
    <div class="l-contents__inner">
      <div class="l-column">
        <div class="l-column__container">
          <div class="l-column__main">
            <CommonTotalSelector />
            <!-- [/CommonTotalSelector] -->

            <CommonTotalTable />
            <!-- [/CommonTotalTable] -->
          </div>
          <div class="l-column__side">
            <CommonTotalResult />
            <!-- [/CommonTotalResult] -->
          </div>
        </div>
      </div>
    </div>
    <NavBottomBar></NavBottomBar>
  </div>
</template>
<script>
export default {
  name: "LogTop",
  computed: {},
};
</script>
