var paopao2Echarts = echarts.init($('.business .chart .bar')[0])

var data = [{
  name: "电子病历业务域",
},
{
  name: "公共卫生业务域",
},
{
  name: "人口信息业务域",
},
{
  name: "注册服务业务域",
},
];
//偏移量
var offsetData = [
  [0, 53],
  [30, 63],
  [60, 53],
  [90, 63],
];
//symbolSize 散点气泡大小
var symbolSizeData = [80, 80, 80,80];
//
//循环定义series的data值
var datas = [];
for (var i = 0; i < data.length; i++) {
  var item = data[i];
  //var itemToStyle = datalist[i];
  datas.push({
    name: item.name,
    value: offsetData[i],
    symbolSize: symbolSizeData[i],
    label: {
      normal: {
        textStyle: {
          fontSize: 14
        }
      }
    },
    itemStyle: {
      normal: {
        color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7, [{
          offset: 0,
          color: "rgba(31,102,162,0)"
        },
        {
          offset: 1,
          color: "rgba(31,102,192,0.6)"
        }
        ]),
        opacity: 0.8,
        shadowColor: '#2e78eca8',
        shadowBlur: 10,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
      },

    }
  });
}

var paopao2Option = {
  grid: {
    show: false,
    top: 0,
    bottom: '10%'
  },
  xAxis: [{
    gridIndex: 0,
    type: "value",
    show: false,
    min: 0,
    max: 100,
    nameLocation: "middle",
    nameGap: 5
  }],
  yAxis: [{
    gridIndex: 0,
    min: 0,
    show: false,
    max: 100,
    nameLocation: "middle",
    nameGap: 30
  }],

  series: [{
    type: "scatter",
    symbol: "circle",
    symbolSize: 120,
    label: {
      normal: {
        show: true,
        formatter: "{b}",
        color: "#fff",
        textStyle: {
          fontSize: "70"
        }
      }
    },
    animationDurationUpdate: 1000,
    animationEasingUpdate: 1000,
    animationDelay: function (idx) {
      // 越往后的数据延迟越大
      return idx * 100;
    },
    itemStyle: {
      normal: {
        color: "#00acea"
      }
    },
    data: datas
  }],
}

paopao2Echarts.setOption(paopao2Option)