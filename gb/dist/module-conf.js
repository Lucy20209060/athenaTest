'use strict';

module.exports = {
  creator: 'test2',
  app: 'test101002',
  common: 'gb',
  module: 'gb',
  moduleId: 'a65b89c1-adcc-11e7-976a-457a819e0341',
  description: '公共模块',
  support : {
    csslint: {
      enable: true
    },
    jslint: {
      enable: true
    },
    imagemin: { // 图片压缩的配置
      exclude: [] // 图片压缩排除的图片
    },
    autoprefixer: { // 自动前缀的配置
      pc: [
      	'last 3 versions',
      	'Explorer >= 8',
      	'Chrome >= 21',
        'Firefox >= 1',
        'Edge 13'
      ],
      mobile: [
      	'Android >= 4',
      	'iOS >= 6'
      ]
    },
    px2rem: {
      enable: false,
      root_value: 40,
      unit_precision: 5,
      prop_white_list: [],
      selector_black_list: [],
      replace: true,
      media_query: false
    },
    compress: {
      css: {
        mergeRules: false,
        mergeIdents: false,
        reduceIdents: false,
        discardUnused: false,
        minifySelectors: false
      },
      js: {
        mangle:{except : ['require', 'exports', 'seajs', 'module']}
      }
    },
    fontcompress : {
      enable: false
    },
    csssprite: {
      enable: true,
      retina: false,
      rootvalue: 0
    }
  }
};
