<template>
  <div class="c-block-table">
    <div class="c-table">
      <dl class="c-table__dl c-table__dl--head">
        <dd class="c-table__dd">シート名</dd>
        <dd class="c-table__dd">総獲得通貨</dd>
        <dd class="c-table__dd">現在レート</dd>
        <dd class="c-table__dd">利益総額</dd>
        <dd class="c-table__dd">損益総額</dd>
        <dd class="c-table__dd">利益</dd>
      </dl>
      <dl class="c-table__dl c-table__dl--profit">
        <dd class="c-table__dd">STEPN</dd>
        <dd class="c-table__dd">300GST</dd>
        <dd class="c-table__dd">200円</dd>
        <dd class="c-table__dd">60,000円</dd>
        <dd class="c-table__dd">20,000円</dd>
        <dd class="c-table__dd">40,000円</dd>
      </dl>
      <dl class="c-table__dl c-table__dl--loss">
        <dd class="c-table__dd">STEPN</dd>
        <dd class="c-table__dd">300GST</dd>
        <dd class="c-table__dd">200円</dd>
        <dd class="c-table__dd">60,000円</dd>
        <dd class="c-table__dd">20,000円</dd>
        <dd class="c-table__dd">40,000円</dd>
      </dl>
      <dl class="c-table__dl c-table__dl--loss">
        <dd class="c-table__dd">STEPN</dd>
        <dd class="c-table__dd">300GST</dd>
        <dd class="c-table__dd">200円</dd>
        <dd class="c-table__dd">60,000円</dd>
        <dd class="c-table__dd">20,0000000円</dd>
        <dd class="c-table__dd">40,000円</dd>
      </dl>
      <dl class="c-table__dl c-table__dl--loss">
        <dd class="c-table__dd">STEPN</dd>
        <dd class="c-table__dd">300GST</dd>
        <dd class="c-table__dd">200円</dd>
        <dd class="c-table__dd">60,000円</dd>
        <dd class="c-table__dd">20,000円</dd>
        <dd class="c-table__dd">40,000円</dd>
      </dl>
      <dl class="c-table__dl c-table__dl--profit">
        <dd class="c-table__dd">STEPN</dd>
        <dd class="c-table__dd">300GST</dd>
        <dd class="c-table__dd">200円</dd>
        <dd class="c-table__dd">60,000円</dd>
        <dd class="c-table__dd">20,000円</dd>
        <dd class="c-table__dd">40,000円</dd>
      </dl>
      <dl class="c-table__dl c-table__dl--loss">
        <dd class="c-table__dd">STEPN</dd>
        <dd class="c-table__dd">300GST</dd>
        <dd class="c-table__dd">200円</dd>
        <dd class="c-table__dd">60,000円</dd>
        <dd class="c-table__dd">20,000円</dd>
        <dd class="c-table__dd">40,000円</dd>
      </dl>
    </div>
  </div>
</template>
<script>
import {
  faGear,
  faTrashCan,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
export default {
  name: "LogTop",
  computed: {
    faGear() {
      return faGear;
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
