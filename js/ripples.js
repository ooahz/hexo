/**
 * 顶部点击波纹效果
 */
$(document).ready(function () {
    try {
      $("#page-header").ripples({
        resolution: 512,
        dropRadius: 10, //px
        perturbance: 0.04,
      });
    } catch (e) {
      $(".error").show().text(e);
    }
  });
