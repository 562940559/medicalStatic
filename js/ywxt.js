var myChartTwoWay = echarts.init($('.twoWay .inner .chart .bar')[0])
var myChartService = echarts.init($('.service .inner .bar')[0])
var myChartSupplyChart = echarts.init($('.supplyChart .chart .bar')[0])
var myChartCoordination = echarts.init($('.coordination .chart .bar')[0])
var myChartOA = echarts.init($('.OA .chart .bar')[0])

var myChartBar1 = echarts.init($('.register .chart .bar1')[0])
var myChartBar2 = echarts.init($('.register .chart .bar2')[0])


var twoWayOption = {
  // 双向就诊
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: '双向就诊',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 685, name: '培训占比' },
        { value: 482, name: '转诊占比' },
        { value: 524, name: '会诊占比' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      itemStyle: {
        normal: {
          color: function (params) {
            //自定义颜色
            var colorList = [
              '#1869ad', '#9c8be5', '#37c4ad',
            ];
            return colorList[params.dataIndex]
          }
        }
      }
    }
  ]
}
var serviceOption = {
  // 医疗服务能力
  grid: {
    left: '0%',
    right: '0%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{a}<br/>{b}: {c}'
  },
  xAxis: {
    type: 'category',
    data: ['基层医院', '三级医院'],
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
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    }
  },
  series: [{
    name: '床位',
    data: [100, 200,],
    type: 'bar',
    barWidth: 20,
    symbol: 'none',
    itemStyle: {
      normal: {
        color: '#57d3b4' // 颜色
      }
    },
  }, {
    name: '医务人员',
    data: [20, 100,].reverse(),
    type: 'bar',
    barWidth: 20,
    symbol: 'none',
    itemStyle: {
      normal: {
        color: '#d9b65a' // 颜色
      }
    },
  }, {
    name: '医疗项目',
    data: [30, 150,].reverse(),
    type: 'bar',
    barWidth: 20,
    symbol: 'none',
    itemStyle: {
      normal: {
        color: '#c49dfd' // 颜色
      }
    },
  }]
}
var supplyChartOption = {
  // 药品供应
  title: {
    text: '药品供应情况',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '0%',
    right: '15%',
    bottom: '5%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    data: ['下化乡', '樊村镇', '僧楼镇', '清涧街道', '赵家庄乡', '城区街道', '阳村乡', '柴家乡', '小梁乡'].reverse(),
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
            return num.value + '例';
          } else {
            return '';
          }
        }
      },
      barWidth: '20',
      type: 'bar',
      data: [751, 321, 275, 210, 198, 152, 149, 131, 125].reverse(),
      itemStyle: {
        normal: {
          color: function (params) {
            var colorList = ['#57d3b4',];
            return colorList[params.dataIndex]
          }
        }
      },
    },
  ]
}
var coordinationOption = {
  // 业务协同
  grid: {
    left: '0%',
    right: '0%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{a}<br/>{b}: {c}'
  },
  xAxis: {
    type: 'category',
    data: ['2019', '2020'],
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
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    }
  },
  series: [{
    name: '远程医疗',
    data: [100, 200,],
    type: 'bar',
    barWidth: 20,
    symbol: 'none',
    itemStyle: {
      normal: {
        color: '#57d3b4' // 颜色
      }
    },
  }, {
    name: '医疗服务',
    data: [20, 100,].reverse(),
    type: 'bar',
    barWidth: 20,
    symbol: 'none',
    itemStyle: {
      normal: {
        color: '#d9b65a' // 颜色
      }
    },
  }, {
    name: '资源调度',
    data: [30, 150,].reverse(),
    type: 'bar',
    barWidth: 20,
    symbol: 'none',
    itemStyle: {
      normal: {
        color: '#c49dfd' // 颜色
      }
    },
  }]
}
var OAOption = {
  // OA办公
  grid: {
    left: '0%',
    right: '0%',
    bottom: '15%',
    top: '20%',
    containLabel: true
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
var bar1Option = {
  // 挂号资源1
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: '挂号资源',
      type: 'pie',
      radius: '80%',
      center: ['50%', '50%'],
      label: {
        normal: {
          position: "inside"
        }
      },
      data: [
        { value: 335, name: '三级医院' },
        { value: 310, name: '基层医院' },
      ],
      color: ['#1869ad', '#9c8be5'],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
var bar2Option = {
  // 挂号资源2
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: '挂号资源',
      type: 'pie',
      radius: '80%',
      center: ['50%', '50%'],
      label: {
        normal: {
          position: "inside"
        }
      },
      data: [
        { value: 335, name: '互联网渠道' },
        { value: 310, name: '实体医疗机构' },
      ],
      color: ['#1869ad', '#9c8be5'],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}


myChartTwoWay.setOption(twoWayOption)
myChartService.setOption(serviceOption)
myChartSupplyChart.setOption(supplyChartOption)
myChartCoordination.setOption(coordinationOption)
myChartOA.setOption(OAOption)
myChartBar1.setOption(bar1Option)
myChartBar2.setOption(bar2Option)
