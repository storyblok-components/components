<template>
  <div class="container">
    <div class="button-group">
      <button
        v-for="breakpoint in breakpoints"
        :class="{ active: currBreakpoint === breakpoint.size }"
        v-on:click="setBreakpoint(breakpoint.size)"
        v-bind:key="breakpoint.size"
      >
        {{ breakpoint.name }}
      </button>
    </div>

    <div
      v-for="breakpoint in breakpoints"
      v-if="currBreakpoint === breakpoint.size"
      :class="['box-model', breakpoint.size]"
      v-bind:key="breakpoint.size"
    >
      <div class="box-model__margin relative">
        <span class="box-model__title">margin</span>
        <div class="box-model__margin-top">
          <select
            class="select-breakpoint"
            v-if="model[breakpoint.size]"
            v-model="model[breakpoint.size].mt"
          >
            <option :key="option" v-for="option in options" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="box-model__margin-bottom">
          <select
            class="select-breakpoint"
            v-if="model[breakpoint.size]"
            v-model="model[breakpoint.size].mb"
          >
            <option :key="option" v-for="option in options" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="box-model__margin-left">
          <select
            class="select-breakpoint"
            v-if="model[breakpoint.size]"
            v-model="model[breakpoint.size].ml"
          >
            <option :key="option" v-for="option in options" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="box-model__margin-right">
          <select
            class="select-breakpoint"
            v-if="model[breakpoint.size]"
            v-model="model[breakpoint.size].mr"
          >
            <option :key="option" v-for="option in options" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="box-model__padding relative">
          <span class="box-model__title">padding</span>
          <div class="box-model__padding-top">
            <select
              class="select-breakpoint"
              v-if="model[breakpoint.size]"
              v-model="model[breakpoint.size].pt"
            >
              <option :key="option" v-for="option in options" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="box-model__padding-bottom">
            <select
              class="select-breakpoint"
              v-if="model[breakpoint.size]"
              v-model="model[breakpoint.size].pb"
            >
              <option :key="option" v-for="option in options" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="box-model__padding-left">
            <select
              class="select-breakpoint"
              v-if="model[breakpoint.size]"
              v-model="model[breakpoint.size].pl"
            >
              <option :key="option" v-for="option in options" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="box-model__padding-right">
            <select
              class="select-breakpoint"
              v-if="model[breakpoint.size]"
              v-model="model[breakpoint.size].pr"
            >
              <option :key="option" v-for="option in options" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="box-model__dimensions relative">content</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { breakpoints } from "./datasource";

export default {
  mixins: [window.Storyblok.plugin],
  data: function () {
    return {
      breakpoints,
      options: ["-", "0", "xs", "s", "m", "l", "xl", "xxl"],
      currBreakpoint: "s",
    };
  },
  methods: {
    initWith() {
      return {
        // needs to be equal to your storyblok plugin name
        plugin: "sbp-spacing-plugin",
        ...breakpoints.reduce((acc, curr) => {
          return {
            ...acc,
            [curr.size]: {
              pt: "-",
              pb: "-",
              pl: "-",
              pr: "-",
              mt: "-",
              mb: "-",
              ml: "-",
              mr: "-",
            },
          };
        }, {}),
      };
    },
    setBreakpoint(bp) {
      this.currBreakpoint = bp;
    },
  },
  watch: {
    model: {
      handler: function (value) {
        this.$emit("changed-model", value);
      },
      deep: true,
    },
  },
};
</script>

<style>
select {
  text-align: center;
  text-align-last: center;
}
option {
  text-align: left;
}

.active {
  background-color: #efefef;
}

.container {
  display: flex;
  flex-direction: column;
}

.button-group {
  margin: 8px 0;
  display: flex;
  align-self: flex-end;
}

.input-number {
  text-align: center;
  width: 24px !important;
  height: 20px !important;
  font-size: 10px !important;
  padding: 0 !important;
}

.select-breakpoint {
  text-align: center !important;
  width: 24px !important;
  height: 20px !important;
  font-size: 10px !important;
  padding: 0 !important;
  background-image: none !important;
}

.box-model {
  background-color: #efefef;
  text-align: center;
  font-size: 12px;
  margin-bottom: 8px;
}

.box-model .relative {
  position: relative;
  padding: 24px 32px;
}

.box-model__margin {
  background-color: #efefef;
}

.box-model__border {
  background-color: #dfdfdf;
}

.box-model__padding {
  background-color: #cfcfcf;
}

.box-model .box-model__dimensions {
  background-color: #efefef;
  padding: 8px 0px;
}

.box-model__title {
  position: absolute;
  line-height: 8px;
  font-size: 8px;
  top: 2px;
  left: 2px;
}

/* margin */
.box-model__margin-top {
  position: absolute;
  z-index: 1;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
}

.box-model__margin-bottom {
  position: absolute;
  z-index: 1;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
}

.box-model__margin-left {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
}

.box-model__margin-right {
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
}

/* border */
.box-model__border-top {
  position: absolute;
  z-index: 1;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
}

.box-model__border-bottom {
  position: absolute;
  z-index: 1;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
}

.box-model__border-left {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
}

.box-model__border-right {
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
}

/* padding */
.box-model__padding-top {
  position: absolute;
  z-index: 1;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
}

.box-model__padding-bottom {
  position: absolute;
  z-index: 1;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
}

.box-model__padding-left {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
}

.box-model__padding-right {
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
}
</style>
