<template>
  <div class="l-contents">
    <div class="l-column">
      <div class="l-column__container">
        <div class="l-column__main">
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
              <button type="button" class="c-box-label c-box-label--icon">
                <fa :icon="faTrashCan" class="c-item-icon" />
              </button>
            </div>
          </div>
          <!-- [/c-block-selector] -->

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
          <!-- [/c-block-table] -->
        </div>
        <div class="l-column__side">
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
                <!-- <dl class="c-cassette-result__dl">
                  <dt class="c-cassette-result__dt">期間平均&nbsp;:&nbsp;</dt>
                  <dd class="c-cassette-result__dd">+30000円</dd>
                </dl> -->
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
        </div>
      </div>
    </div>
  </div>
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
