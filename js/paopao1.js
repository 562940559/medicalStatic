var paopao1Echarts = echarts.init($('.survey .chart .bar')[0])

//字符串截取
var wordLength = (value) => {
  var ret = ""; //拼接加\n返回的类目项
  var maxLength = 5; //每项显示文字个数
  var valLength = value.length; //X轴类目项的文字个数
  var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
  if (rowN > 1) //如果类目项的文字大于3,
  {
    for (var i = 0; i < rowN; i++) {
      var temp = ""; //每次截取的字符串
      var start = i * maxLength; //开始截取的位置
      var end = start + maxLength; //结束截取的位置
      //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
      temp = value.substring(start, end) + "\n";
      ret += temp; //凭借最终的字符串
    }
    return ret;
  } else {
    return value;
  }
}
//
var data = [{
  name: "患者主索引",
  value: "12355"
},
{
  name: "注册机构数",
  value: "12093"
},
{
  name: "注册科室数",
  value: "8874"
},

];
//偏移量
var offsetData = [
  [80, 53],
  [35, 73],
  [10, 33],
];
//symbolSize 散点气泡大小
var symbolSizeData = [100, 80, 80];
//
//循环定义series的data值
var datas = [];
for (var i = 0; i < data.length; i++) {
  var item = data[i];
  //var itemToStyle = datalist[i];
  datas.push({
    name: wordLength(item.name) + "\n" + item.value ,
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

var paopao1Option = {
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

paopao1Echarts.setOption(paopao1Option)