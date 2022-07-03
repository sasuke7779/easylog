<template>
  <div class="l-bottom-bar">
    <div class="l-bottom-bar__container">
      <button type="button" class="l-bottom-bar__button">
        <fa :icon="faChartPie" />
      </button>
      <a href="#" class="l-bottom-bar__button">
        <fa :icon="faAngleUp" />
      </a>
    </div>
  </div>
</template>
<script>
import { faAngleUp, faChartPie } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "LogTop",
  computed: {
    faAngleUp() {
      return faAngleUp;
    },
    faChartPie() {
      return faChartPie;
    },
  },
};
</script>
