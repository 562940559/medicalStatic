var visitEcharts = echarts.init($('.visit .inner .bar')[0])
var myechartsOne = echarts.init($('.service .wrap')[0])
var myechartsTwo = echarts.init($('.service .wrap')[1])
var myechartsThree = echarts.init($('.service .wrap')[2])
var myechartsFour = echarts.init($('.service .wrap')[3])


var optionVisit = {
  // 远程医疗趋势分析
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
      }
    },
    axisLine: {
      lineStyle: {
        color: '#a8c8f6',
      }
    }
  },

  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line',
    symbol: 'none',
    itemStyle: {
      normal: {
        lineStyle: {
          color: '#ffa222' //折线颜色
        }
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#ffa222" },
        ])
      }
    }, //填充区域样式
  }]
}
var optionOne = {
  title: {
    text: '在线预约人次\r\n\r\n'+'占比',
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
      color: ['#1869ad', '#fdf090']
    }
  ]
};
var optionTwo = {
  title: {
    text: '处方外流数量\r\n\r\n'+'占比',
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
      color: ['#1869ad', '#239ff9']
    }
  ]
};
var optionThree = {
  title: {
    text: '平台转诊人次\r\n\r\n'+'占比',
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
      color: ['#1869ad', '#37c4ad']
    }
  ]
};
var optionFour = {
  title: {
    text: '患者满意度',
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




visitEcharts.setOption(optionVisit)
myechartsOne.setOption(optionOne)
myechartsTwo.setOption(optionTwo)
myechartsThree.setOption(optionThree)
myechartsFour.setOption(optionFour)