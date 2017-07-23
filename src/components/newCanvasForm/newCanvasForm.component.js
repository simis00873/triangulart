
Vue.component('new-canvas-form', {
  data: function () {
    return {
      width: 30,
      height: 20,
      isLandscape: true
    }
  },
  methods: {
  },
  template: '\
    <div class="row">\
      <label>\
        <div class="field">\
          <input class="field-input" type="number" v-model="width" min="1"/>\
          <span class="field-icon">↔</span>\
        </div>\
        <span>Map width</span>\
      </label>\
      <label>\
        <div class="field">\
          <input class="field-input" type="number" v-model="height" min="1"/>\
          <span class="field-icon">↕</span>\
        </div>\
        <span>Map height</span>\
      </label>\
      <grid-orientation-picker @update:isLandscape="val => isLandscape = val"></grid-orientation-picker>\
    </div>'
})