<template>
  <n-layout-sider
    class="sider"
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
    :value="value"
    :inverted="inverted"
    :collapsed="appStore.collaps"
    :on-update:collapsed="appStore.setCollaps"
  >
    <n-affix :trigger-top="0" position="absolute">
      <div class="sider_logo">
        <div
          class="sider_logo_box"
          :style="{
            width: appStore.collaps ? '64px' : '240px',
          }"
        >
          <img
            v-show="appStore.collaps"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAArlBMVEUAAAAAaP8AZ/8AZ/8AaP8AZ/8AZ/8AZ/8AZ/8AZv8AW/8AYP8AZ/8AZ//////////8/P8AaP/////7/f9iov8HbP/x9/9/s//t9P+ny/8lff8ad//9/v+jyP+Tv/+OvP9tqP/2+v/T5P8Lb//f7P/Y6P/C2v+21P+dxP+Wwf9Jk/87i//p8f/F3P9mpP9Olv9Dj/8yhv/I3v+w0P9yrP9YnP8Sc/+y0f94r/9npf/OsEnHAAAAEXRSTlMA++qc9dCLWSUjDgjLL+vLm3sQtKUAAAIjSURBVFjDpdfZdtsgEAZgtEey3HbQvkteEq+xna3t+79YT52cCDAIWfy3mE8CxjoM6uM5hq9rIImm+4bjods8GCaMjmk8MNNntgZ3RbNn5HzXgrtjuf38uQ4Tos+/n6/DpOju1/otmBjrcx9smBz7en7adED7f5oGKMRAyDNVANNDDijFGVjBPnldp0GQrl+T/cAafOAmbw6YyKHJgRsfcYuo2ASYSbApuMWEeIcYxpiTOOQdJIKbRBUWpIrgJrfA8hEL87iUAxE9nxUiKZDhwWQy4BlL8ncYKGIZEBeDQIWlqYaAnK6fLmtPpzbr6IrKB4Ca+mXzAdd8NJRbi4EoJRe76wd25NakkRA44z7lDoAQSmLoLAQS3GcLVLbEUCIEnogNKJjzJbbhSQismR8J8LUQiJnXFCwvFgLEaz6DuMaDMUDLAu2dQMMCDVEIY4AFCyyoMTmA90Blz3wT5MBLRBX5CzHUjgJwLfyX5eMAvIm+n7/BRBYwEsCrcHn9TIcrTKYdAph0xyw7dphKuhwE5HkDNWARqQHdBZSAMgQloPwDSkD5BkpAegIOoI0GfhfcC4bOBw6YyfEM/CuOzwfCS70iirq+gOiSZQgAAMjfk21VbZP3fOiq6giA0RdNz1QBTA8hQwUw+uu+CJBf95E9HbD7lmcSYM36pmsKoLt92zcF0Odk43k/YLls68sC8taXbb45gLz5ptr/Xz9/lDQgb///AVxdDy+0jqcwAAAAAElFTkSuQmCC"
            alt=""
          />
          <img
            v-show="!appStore.collaps"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAAuCAMAAAAoVMSFAAABLFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////85wjQ5wzRAyDf///////////////////////////85wzX///////////////////////////////////////////////////////////////////////////84wjR71niw56/+/v696rz1/PV913o+xDr6/vrR8dB/2H1Ryk7o+OfC7MFVy1Lw+vCL24mu5q131XRExkC66bhx029o0WViz19BxT7s+evh9uDX89aV3pKB2H87wzc5wjXd9NyZ4Jdt0mrk9+PN8My/672q5amh4p/J7sim5KXx+vHG7sW16LRdzVpNyEpJx0ba89m7hz1NAAAAMnRSTlMA2EI3mlTzMCG/gT/sxwzmgPvqDffmphzT0MONOxQE7eLatZczn4d6XSkCua5xGBbNSbTpPcgAAAUsSURBVGje7ZprV9pAEIYjFBDQWhEvtdram1p7n4EY7gEEEREEFKx37f//D90k7C4Ydk8bwFrL+2nInDmT5+zO7s4GZQBBR3Jvt/kINIYeQ4+hx9D/vEYHvbgwjyPS/MLiw4RefIUj1KvFBwm9gCPVwoOEnseRap5n8gX8E17vhD/gU/ro3frHGW94zf95sg/Wh8CbJVuoFFqeDUcsmsczAUwTHuWONpe49znzsie2UBm0PZsMOr7fMYoNFKroCHpyGno0TcfT8vp7vZ++9GDZQsXQomwi6FgyoR6kEOvnB+rFZRkxAgBa8rDLwPRJDlrRfcRtAKjoWSTag8QNYgksxcFUrBc6OAV3NBVUmNyhu17vihiahIqhpdm4GLOqVnVNLTd2QdObcHFNWDN6FeCQGzcZaBHsdpxAJ/UM5NKIuAtwinitk99VXa9DYpuo3AMdnAWbZtl7BMN9wHxiaBIqhJZls0PvJxIlxOwhxuDgFrEGPwlrFMnPNjd02EGMJ+GIQB8jnkAe8TaRrFTqSLRjji/kbNN7cqrvgE125mKon3dmUgxNQkXQsmx26GM4sYwoRJAooxZN1jS0kBqNi0ScuMpwZkHXjCE+gtQpxLqgtUgkUuqBnoa+mlZMLQu8W5zF7hRBy7LZoWtwZBlVMCtVh+MI7KbLJ3CFhrFHjDQ0kSgOFwQ6lS60oISNjBbPQrIL2lCzG9oDApFVVeLdlECDRwAty2aHLsGuZVxBAYlacBsBQwdppEZDSxjz+BraBNpQtI4FaNZqObjuGulSqbTXDc13jyfup0/dT/heYuTn3rfuudXge5X+/EZZBKECaHE2O3RR1cib3hTwEKr7iHloEtbmeRtqaBg/TgtFxEtjPtcvzZrePq8ksohnYOGLa/odK1OXldE1Q5+Q1cpH7dB3w/eSb7CzWwpIQgXQsmw2aMyribPdnFqu61C5Sqpa2SzlYkXLmoapbAWqVy1I7ps1XYBkIws/0+l0VtOKDDoRJSpw6ABN6qIpXfRJQFHWO2bYeKXVjTVgek1YJKECaFk2OzSmjH360NynQbP26SiaZAwas3oOMtY+fWxsVvlzyFvlnGfQpo44tJ/ONp6Tzjm/onykc5uM8oswcKkewiIJFUDLsjk/kd3in4kVmZvndPMye829L6BLy0HKIggVQMuy3ePZ2wuWnvKcc/TgpShh7uX7dfi9VX8gCRVAy7LdH7T0zTnpHDfXNlYVS96hQoNoejMNH1o+vV10ei97XipUE0Od3iBuOKxV6wekkPYS5qNtc/vOQNwBtGxp8XcvZKGQMa+5/ENdyEDccHBoq5dg0BdpZ9DyfWeDLtYr1PuVj3RgqFsWiBsOBk17CQoN1bgjaPkJw828HWpfKPSCDrfvTw8n0hAQNxwRSObz+TakaC9BoXOw4xBaejBcYiewJ665ueBbsy98/nmVFvXAx1AuccMRAUsp2ktQ6FQOYs6gnTQcs+btiWcIDQeXuOGIQDsWi51BivcSFvTesappQ4HmzZ6kFXxDnYO2llzChoPXNOslKDQeATiEdnCJsGo5pwa+ROASNxwMmvcSFBovhwjNL3BcYbs3TBff4Oyg10Vc4oaDQfNegkEXnde07KpuxTY2a++YMzg18MXg3zuRSa+Al3u9y1+7ndODXQFz3d8XDumNfd/L+debWzbnAJf9PPE9fsuSf5vp/QwTnvGvrwicttBnHXWZtpClN4EP7A3u76vlw/xgPtrv04/rXwK/p0f214gx9Bh6DD2G/m/0CzNyrO8TKCntAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
      </div>
    </n-affix>
    <n-menu
      class="menu"
      :inverted="inverted"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="siderMenus"
      :value="value"
      :on-update:value="setValue"
    />
  </n-layout-sider>
</template>
<script lang="ts" setup>
import { ref, reactive, watch } from "vue";
import { useAppStore } from "@/store/app";
import { useRouterStore } from "@/store/router";
import router from "@/router";
let appStore = useAppStore();
let inverted = ref(false);
const routerStore = useRouterStore();
let siderMenus = reactive(routerStore.siderMenus);
let value = ref(router.currentRoute.value.name);
function setValue(val: string): void {
  value.value = val;
}

watch(router.currentRoute, () => {
  setValue(router.currentRoute.value.name);
});
</script>
