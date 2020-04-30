var myechartsOne = echarts.init($('.cost .wrap')[0])
var myechartsTwo = echarts.init($('.cost .wrap')[1])
var myechartsThree = echarts.init($('.cost .wrap')[2])
var myechartsFour = echarts.init($('.cost .wrap')[3])
var myechartsFive = echarts.init($('.cost .wrap')[4])
var myechartsSix = echarts.init($('.cost .wrap')[5])

var myechartsSeven = echarts.init($('.patient .inner .wrap')[0])
var myechartsEight = echarts.init($('.patient .inner .wrap')[1])

var myechartsDisease = echarts.init($('.disease .bar')[0])
var myechartsOperation = echarts.init($('.operation .bar')[0])

var optionOne = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '西药类31.5%\r\n\r\n' + '2934.75万元';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 68.5, name: '1' },
        { value: 31.5, name: '2' },
      ],
      color: ['#1869ad', '#fdf090']
    }
  ]
};
var optionTwo = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '中药类8.1%\r\n\r\n' + '754.66万元';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 91.9, name: '1' },
        { value: 8.1, name: '2' },
      ],
      color: ['#1869ad', '#239ff9']
    }
  ]
};
var optionThree = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '检查11.4%\r\n\r\n' + '870.18万元';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 88.6, name: '1' },
        { value: 11.4, name: '2' },
      ],
      color: ['#1869ad', '#37c4ad']
    }
  ]
};
var optionFour = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '化验9.34%\r\n\r\n' + '283.23万元';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 90.66, name: '1' },
        { value: 9.34, name: '2' },
      ],
      color: ['#1869ad', '#9c8be5']
    }
  ]
};
var optionFive = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '手术3.04%\r\n\r\n' + '3409万元';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 96.96, name: '1' },
        { value: 3.04, name: '2' },
      ],
      color: ['#1869ad', '#ff9a6e']
    }
  ]
};
var optionSix = {
  series: [
    {
      hoverAnimation: false,
      name: '访问来源',
      type: 'pie',
      radius: ['80%', '90%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          formatter: function (argument) {
            var html;
            html = '其他36.59%\r\n\r\n' + '2934.75万元';
            return html;
          },
          textStyle: {
            fontSize: 12,
            color: '#39CCCC'
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 63.41, name: '1' },
        { value: 36.59, name: '2' },
      ],
      color: ['#1869ad', '#4cc4e3']
    }
  ]
};
var optionSeven = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [
    {
      name: '患者构成',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'center',
        formatter: function (num) {
          var html;
          html = '门诊总人数\r\n\r\n' + '2934人';
          return html;
        },
      },
      emphasis: {
        label: {
          show: false,
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 335, name: '内科' },
        { value: 310, name: '外科' },
        { value: 234, name: '其他科室' },
        { value: 135, name: '儿科' },
        { value: 1548, name: '妇产科' }
      ],
      color: ['#1869ad', '#4cc4e3', '#ff9a6e', '#9c8be5', '#37c4ad']
    }
  ]
};
var optionEight = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [
    {
      name: '患者构成',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'center',
        formatter: function (num) {
          var html;
          html = '住院总人次\r\n\r\n' + '2934人';
          return html;
        },
      },
      emphasis: {
        label: {
          show: false,
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 35, name: '内科' },
        { value: 10, name: '外科' },
        { value: 24, name: '其他科室' },
        { value: 35, name: '儿科' },
        { value: 18, name: '妇产科' }
      ],
      color: ['#1869ad', '#4cc4e3', '#ff9a6e', '#9c8be5', '#37c4ad']
    }
  ]
};




var diseaseOption = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    data: ['传染性疾病', '慢性病', '恶性肿瘤'],
    splitLine: {
      show: false
    },
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
  label: {
    formatter: function (num) {
      if (num.value > 0) {
        return num.value + '例';
      } else {
        return '';
      }
    }
  },
  series: [
    {
      name: '直接访问',
      type: 'bar',
      stack: '总量',
      barWidth: 30,
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [20, 0, 0],
      itemStyle: {
        normal: { color: '#a5e7f0' }
      }
    },
    {
      name: '邮件营销',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [56, 0, 0],
      itemStyle: {
        normal: { color: '#2aa794' }
      }
    },
    {
      name: '联盟广告',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [56, 0, 0],
      itemStyle: {
        normal: { color: '#7771e6' }
      }
    },
    {
      name: '视频广告',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [0, 50, 0],
      itemStyle: {
        normal: { color: '#00aacc' }
      }
    },
    {
      name: '搜索引擎',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [0, 0, 35],
      itemStyle: {
        normal: { color: '#08a9f2' }
      }
    }
  ]
};

var operation = {
  left: '10%',
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '10%',
    containLabel: 'true'
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    data: ['急诊与择期麻药', '日间手术占比', '压疮占比', '手术级别'],
    splitLine: {
      show: false
    },
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
  label: {
    formatter: function (num) {
      if (num.value > 0) {
        return num.value + '%';
      } else {
        return '';
      }
    }
  },
  series: [
    {
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      barWidth: 30,
      data: [12, 27, 0, 0],
      itemStyle: {
        normal: { color: '#a5e7f0' }
      }
    },
    {
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [88, 73, 0, 35],
      itemStyle: {
        normal: { color: '#2aa794' }
      }
    },
    {
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [0, 0, 75, 35],
      itemStyle: {
        normal: { color: '#7771e6' }
      }
    },
    {
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [0, 0, 25, 18],
      itemStyle: {
        normal: { color: '#00aacc' }
      }
    },
    {
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [0, 0, 0, 12],
      itemStyle: {
        normal: { color: '#08a9f2' }
      }
    }
  ]
};

myechartsOne.setOption(optionOne)
myechartsTwo.setOption(optionTwo)
myechartsThree.setOption(optionThree)
myechartsFour.setOption(optionFour)
myechartsFive.setOption(optionFive)
myechartsSix.setOption(optionSix)
myechartsSeven.setOption(optionSeven)
myechartsEight.setOption(optionEight)
myechartsDisease.setOption(diseaseOption)
myechartsOperation.setOption(operation)
