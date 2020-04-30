var statisticsEcharts = echarts.init($('.statistics .inner .bar')[0])
var analysisEcharts = echarts.init($('.analysis .inner .bar')[0])
var crowdEcharts = echarts.init($('.crowd .inner .bar')[0])
var serviceEcharts = echarts.init($('.service .inner .bar')[0])


var myechartsOne = echarts.init($('.hygiene .wrap')[0])
var myechartsTwo = echarts.init($('.hygiene .wrap')[1])
var myechartsThree = echarts.init($('.hygiene .wrap')[2])
var myechartsFour = echarts.init($('.hygiene .wrap')[3])


var optionStatistics = {
  // 应用访问趋势
  grid: {
    left: '0%',
    right: '10%',
    bottom: '5%',
    top: '5%',
    containLabel: true
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    data: ['居民主动签约人数', '重点人群签约人数', '签约居民数', '常住人口数'],
    axisLabel: {
      show: true,
      textStyle: {
        color: '#a8c8f6'
      }
    },
    axisLine:{ //y轴
      show:false
    },
  },
  series: [
    {
      name: 'TOP',
      label: {
        show: true,
        position: 'right',
        formatter: function (num) {
          if (num.value > 0) {
            return num.value;
          } else {
            return '';
          }
        }
      },
      barWidth : 20,
      type: 'bar',
      data: [751, 321, 275, 210],
      itemStyle: {
        normal: {
          color: function (params) {
            var colorList = ['#57d3b4', '#c49dfd', '#d9b65a', '#438fe0',];
            return colorList[params.dataIndex]
          }
        }
      },
    },
  ]
}
var optionAnalysis = {
  // 签约质量分析
  xAxis: {
    type: 'category',
    data: ['2020.4', '2020.3', '2020.2', '2020.1', '2019.12', '2019.11', '2019.10'],
    axisLabel: {
      textStyle: {
        color: '#a8c8f6'
      },
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      textStyle: {
        color: '#a8c8f6'
      },
      formatter: function (num) {
        return num + '%';
      },
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    }
  },
  series: [{
    name: '签约率',
    data: [100, 100, 100, 100, 100, 100, 100,],
    type: 'line',
    symbol: 'none',
    itemStyle: {
      normal: {
        lineStyle: {
          color: '#ffa222' //折线颜色
        }
      }
    },
  }, {
    name: '重点人群签约率',
    data: [78, 78, 78, 78, 78, 78, 78,],
    type: 'line',
    symbol: 'none',
    itemStyle: {
      normal: {
        lineStyle: {
          color: '#edafee' //折线颜色
        }
      }
    },
  }, {
    name: '续签率',
    data: [40, 40, 40, 40, 40, 40, 40,],
    type: 'line',
    symbol: 'none',
    itemStyle: {
      normal: {
        lineStyle: {
          color: '#5496d4' //折线颜色
        }
      }
    },
  }]
}
var optionCrowd = {
  // 工具提示
  tooltip: {
    // 触发类型  经过轴触发axis  经过轴触发item
    trigger: 'item',
    // 轴触发提示才有效
    axisPointer: {
      // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
      type: 'shadow'
    }
  },
  // 图表边界控制
  grid: {
    // 距离 上右下左 的距离
    left: '0',
    right: '3%',
    bottom: '3%',
    top: '5%',
    // 大小是否包含文本【类似于boxsizing】
    containLabel: true,
    //显示边框
    show: true,
    //边框颜色
    borderColor: 'rgba(0, 240, 255, 0.3)'
  },
  // 控制x轴
  xAxis: [
    {
      // 使用类目，必须有data属性
      type: 'category',
      // 使用 data 中的数据设为刻度文字
      data: ['65岁以上老年人', '0-6岁儿童', '孕产妇', '高血压患者', '糖尿病患者', '精神病患者', '肺结核患者', '残疾人', '计生特殊家庭', '特扶人群'],
      // 刻度设置
      axisTick: {
        // true意思：图形在刻度中间
        // false意思：图形在刻度之间
        alignWithLabel: false,
        show: false
      },
      //文字
      axisLabel: {
        color: '#4c9bfd',
        interval: 0,
        rotate: 50,
      }
    }
  ],
  // 控制y轴
  yAxis: [
    {
      // 使用数据的值设为刻度文字
      type: 'value',
      axisTick: {
        // true意思：图形在刻度中间
        // false意思：图形在刻度之间
        alignWithLabel: false,
        show: false
      },
      //文字
      axisLabel: {
        color: '#4c9bfd'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0, 240, 255, 0.3)'
        }
      },
    }
  ],
  // 控制x轴
  series: [
    {
      // series配置
      // 颜色
      itemStyle: {
        // 提供的工具函数生成渐变颜色
        color: new echarts.graphic.LinearGradient(
          // (x1,y2) 点到点 (x2,y2) 之间进行渐变
          0, 0, 0, 1,
          [
            { offset: 0, color: '#00fffb' }, // 0 起始颜色
            { offset: 1, color: '#0061ce' }  // 1 结束颜色
          ]
        )
      },
      // 图表数据名称
      name: '用户统计',
      // 图表类型
      type: 'bar',
      // 柱子宽度
      barWidth: '60%',
      // 数据
      data: [2100, 1900, 1700, 1560, 1400, 900, 750, 600, 480, 240]
    }
  ]
}
var optionService = {
  // 基本医疗服务
  tooltip: {
    trigger: 'item',
    axisPointer: {     
      type: 'shadow'
    },
    formatter: '{a}<br/>{b}: {c}'+'万人'
  },
  xAxis: {
    type: 'category',
    data: ['2020.4', '2020.3', '2020.2', '2020.1', '2019.12', '2019.11', '2019.10'],
    axisLabel: {
      textStyle: {
        color: '#a8c8f6'
      },
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      textStyle: {
        color: '#a8c8f6'
      },
      formatter: function (num) {
        return num + '万人';
      },
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    }
  },
  series: [{
    name: '就诊人次',
    data: [1.5, 2, 2.1, 1.5, 2.5, 3, 4.2],
    type: 'bar',
    symbol: 'none',
    itemStyle: {
      normal: {
        color: '#57d3b4' // 颜色
      }
    },
  }, {
    name: '转诊人次',
    data: [1.5, 2, 2.1, 1.5, 2.5, 3, 4.2].reverse(),
    type: 'bar',
    symbol: 'none',
    itemStyle: {
      normal: {
        color: '#d9b65a' // 颜色
      }
    },
  }]
}



var optionOne = {
  title: {
    text: '个人档案建\r\n\r\n' + '档占比',
    left: 'left',
    textStyle: {
      color: '#a8c8f6',
    },
  },
  series: [
    {
      hoverAnimation: false,
      type: 'pie',
      radius: ['80%', '90%'],
      center: ['70%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '95.8%';
            return html;
          },
          textStyle: {
            fontSize: 16,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 4.2, name: '1' },
        { value: 95.8, name: '2' },
      ],
      color: ['#1869ad', '#fdf090']
    }
  ]
};
var optionTwo = {
  title: {
    text: '合格档案率',
    left: 'left',
    textStyle: {
      color: '#a8c8f6',
    },
  },
  series: [
    {
      hoverAnimation: false,
      type: 'pie',
      radius: ['80%', '90%'],
      center: ['70%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '96.9%';
            return html;
          },
          textStyle: {
            fontSize: 16,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 3.1, name: '1' },
        { value: 96.9, name: '2' },
      ],
      color: ['#1869ad', '#239ff9']
    }
  ]
};
var optionThree = {
  title: {
    text: '家庭建档率',
    left: 'left',
    textStyle: {
      color: '#a8c8f6',
    },
  },
  series: [
    {
      hoverAnimation: false,
      type: 'pie',
      radius: ['80%', '90%'],
      center: ['70%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '78.4%';
            return html;
          },
          textStyle: {
            fontSize: 16,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 21.6, name: '1' },
        { value: 78.4, name: '2' },
      ],
      color: ['#1869ad', '#37c4ad']
    }
  ]
};
var optionFour = {
  title: {
    text: '规范档案率',
    left: 'left',
    textStyle: {
      color: '#a8c8f6',
    },
  },
  series: [
    {
      hoverAnimation: false,
      type: 'pie',
      radius: ['80%', '90%'],
      center: ['70%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '57.4%';
            return html;
          },
          textStyle: {
            fontSize: 16,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 43.6, name: '1' },
        { value: 57.4, name: '2' },
      ],
      color: ['#1869ad', '#9c8be5']
    }
  ]
};




statisticsEcharts.setOption(optionStatistics)
analysisEcharts.setOption(optionAnalysis)
crowdEcharts.setOption(optionCrowd)
serviceEcharts.setOption(optionService)

myechartsOne.setOption(optionOne)
myechartsTwo.setOption(optionTwo)
myechartsThree.setOption(optionThree)
myechartsFour.setOption(optionFour)