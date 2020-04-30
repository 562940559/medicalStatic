var statisticsChartEcharts = echarts.init($('.statisticsChart .chart .bar')[0])
var waterChartEcharts = echarts.init($('.monitor .chart1 .bar')[0])
var utilizeChartEcharts = echarts.init($('.monitor .chart2 .bar')[0])

var interactive1tEcharts = echarts.init($('.interactive .chart1 .bar')[0])
var interactive2tEcharts = echarts.init($('.interactive .chart2 .bar')[0])
var interactive3tEcharts = echarts.init($('.interactive .chart3 .bar')[0])

var statisticsChartOption = {
  // 医疗费用业务域接收量统计
  title: {
    text: '医疗费用业务域接收量统计',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '0%',
    right: '15%',
    bottom: '0%',
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
            return num.value + '万条';
          } else {
            return '';
          }
        }
      },
      type: 'bar',
      barWidth: '20',
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
var waterOption = {
  series: [
    {
      name: "储存容量",
      type: 'liquidFill',
      data: [0.47, {
        name: "数据名称",
        value: "0.47",
        direction: 'left',
        itemStyle: {
          normal: {
            color: "#18a0d9"
          }
        }
      }],
      radius: '80%',
      center: ['50%', '50%'],//所在位置
      label: {
        normal: {
          formatter: function (val) {
            return "储存容量" + '\n' + val.data * 100 + '%';
          },  //显示在水球图中间的文字，可以是字符串，可以是占位符，也可以是一个函数。
          //如果使用{a}\n{b}\nValue: {c} ，a代表系列名称，b代表数据名称，c代表数据值。
          textStyle: {
            color: '#fff',  //默认背景下的文字颜色
            insideColor: 'blue', //水波背景下的文字颜色
            fontSize: '20'  //字体大小
          }
        }
      }
    }
  ]
}
var utilizeOption = {
  // 使用率
  grid: {
    left: '0%',
    right: '0%',
    bottom: '15%',
    top: '20%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['03:55:48', '03:55:48', '03:55:48', '03:55:48', '03:55:48'],
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
      formatter(val) {
        return val+'%'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    },
  },
  series: [{
    name: 'CPU使用情况',
    smooth:true,  //这个是把线变成曲线
    data: [20, 30, 25, 40, 45],
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
    name: '内存使用情况',
    smooth:true,  //这个是把线变成曲线
    data: [20, 30, 25, 40, 45].reverse(),
    type: 'line',
    symbol: 'none',
    itemStyle: {
      normal: {
        lineStyle: {
          color: '#5496d4' //折线颜色
        }
      }
    },
  },]
}
var interactive1Option = {
  grid: {
    left: '0%',
    right: '0%',
    bottom: '15%',
    top: '20%',
    containLabel: true
  },
  title: {
    text: '电子病历',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    type: 'category',
    data: ['2020.4', '2020.3', '2020.2',],
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
    name: '接收消息',
    data: [100, 100, 100,],
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
    name: '发送消息',
    data: [78, 78, 78,],
    type: 'line',
    symbol: 'none',
    itemStyle: {
      normal: {
        lineStyle: {
          color: '#edafee' //折线颜色
        }
      }
    },
  }]
}
var interactive2Option = {
  grid: {
    left: '0%',
    right: '0%',
    bottom: '15%',
    top: '20%',
    containLabel: true
  },
  title: {
    text: '公共卫生',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    type: 'category',
    data: ['2020.4', '2020.3', '2020.2',],
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
    name: '接收消息',
    data: [100, 100, 100,],
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
    name: '发送消息',
    data: [78, 78, 78,],
    type: 'line',
    symbol: 'none',
    itemStyle: {
      normal: {
        lineStyle: {
          color: '#edafee' //折线颜色
        }
      }
    },
  }]
}
var interactive3Option = {
  grid: {
    left: '0%',
    right: '0%',
    bottom: '15%',
    top: '20%',
    containLabel: true
  },
  title: {
    text: '人口信息',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    type: 'category',
    data: ['2020.4', '2020.3', '2020.2',],
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
    name: '接收消息',
    data: [100, 100, 100,],
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
    name: '发送消息',
    data: [78, 78, 78,],
    type: 'line',
    symbol: 'none',
    itemStyle: {
      normal: {
        lineStyle: {
          color: '#edafee' //折线颜色
        }
      }
    },
  }]
}


statisticsChartEcharts.setOption(statisticsChartOption)
waterChartEcharts.setOption(waterOption)
utilizeChartEcharts.setOption(utilizeOption)

interactive1tEcharts.setOption(interactive1Option)
interactive2tEcharts.setOption(interactive2Option)
interactive3tEcharts.setOption(interactive3Option)