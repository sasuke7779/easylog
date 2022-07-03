<template>
  <div class="c-block-selector">
    <div class="c-block-selector__row">
      <label for="tab-select" class="c-box-label c-box-label--select">
        <select name="tab-name" id="tab-select">
          <option value="total">TOP</option>
          <option value="hoge">hoge</option>
          <option value="fuga">fugaaaaaa</option>
        </select>
        <span class="c-box-label__change"
          ><fa :icon="faArrowRightArrowLeft"
        /></span>
      </label>
      <div class="c-box-label">
        <span class="c-box-label__setting"><fa :icon="faGear" /></span>
        <span class="c-box-label__txt">通貨</span>
        <span class="c-box-label__txt">GST</span>
      </div>
      <div class="c-box-label">
        <span class="c-box-label__setting"><fa :icon="faGear" /></span>
        <span class="c-box-label__txt">レート確認</span>
      </div>
      <button type="button" class="c-box-label c-box-label--icon">
        <fa :icon="faCirclePlus" class="c-item-icon" />
      </button>
      <!-- <button type="button" class="c-box-label c-box-label--icon">
        <fa :icon="faTrashCan" class="c-item-icon" />
      </button> -->
    </div>
  </div>
  <!-- [/c-block-selector] -->
</template>
<script>
import {
  faGear,
  faArrowRightArrowLeft,
  faTrashCan,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
export default {
  name: "LogTop",
  computed: {
    faGear() {
      return faGear;
    },
    faArrowRightArrowLeft() {
      return faArrowRightArrowLeft;
    },
    faTrashCan() {
      return faTrashCan;
    },
    faCirclePlus() {
      return faCirclePlus;
    },
  },
};
</script>
