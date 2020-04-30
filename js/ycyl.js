var diseaseTopEcharts = echarts.init($('.diseaseTop .inner .bar')[0])
var longrangeBusinessEcharts = echarts.init($('.longrangeBusiness .inner .bar')[0])
var centerBusinessEcharts = echarts.init($('.centerBusiness .inner .bar')[0])
var hosTopEcharts = echarts.init($('.hosTop .inner .bar')[0])
var trendEcharts = echarts.init($('.trend .inner .bar')[0])


var optionDiseaseTop = {
	// 业务疾病前十
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
		data: ['脑梗死', '心绞痛', '2型糖尿病', '腹痛', '肺部感染', '输尿管结石', '急性支气管炎', '脑血管病', '头部损伤', '急性上呼吸道感染'].reverse(),
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
						return num.value + '人次';
					} else {
						return '';
					}
				}
			},
			type: 'bar',
			barWidth : 20,
			data: [751, 321, 275, 210, 198, 152, 149, 131, 125, 89].reverse(),
			itemStyle: {
				normal: {
					color: function (params) {
						var colorList = ['#57d3b4', '#c49dfd', '#d9b65a', '#438fe0', '#7e9beb', '#21ccc2', '#ce90ac', '#fb8787', '#ef8df2', '#7074fb'];
						return colorList[params.dataIndex]
					}
				}
			},
		},
	]
};
var optionLongrangeBusiness = {
	// 远程医疗业务占比
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b}: {c}%'
	},
	series: [
		{
			name: '患者构成',
			type: 'pie',
			radius: '55%',
			data: [
				{ value: 39.24, name: '远程会诊' },
				{ value: 14.24, name: '远程影像' },
				{ value: 12.38, name: '远程心电' },
				{ value: 11.69, name: '远程病理' },
				{ value: 11.4, name: '远程门诊' },
				{ value: 3.78, name: '双向转诊' },
				{ value: 3.02, name: '远程预约' },
				{ value: 1.41, name: '远程查房' },
				{ value: 1.1, name: '远程重诊监护' },
				{ value: 0.93, name: '远程手术示教' },
				{ value: 0.81, name: '远程医学教育' }
			],
			color: ['#1869ad', '#4cc4e3', '#ff9a6e', '#9c8be5', '#37c4ad', '#438fe0', '#7e9beb', '#21ccc2', '#ce90ac', '#fb8787']
		}
	]
}
var optionCenterBusiness = {
	// 区域诊断中心业务占比
	visualMap: {
		show: false,
		min: 0,
		max: 100,
		inRange: {
			colorLightness: [0, 1]
		}
	},
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b}: {c}%'
	},
	series: [
		{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			data: [
				{ value: 40, name: '区域影像' },
				{ value: 30, name: '区域心电' },
				{ value: 17, name: '区域病理' },
				{ value: 13, name: '视频广告' },
			].sort(function (a, b) { return a.value - b.value; }),
			roseType: 'radius',
			label: {
				color: '#a8c8f6'
			},
			labelLine: {
				lineStyle: {
					color: '#a8c8f6'
				},
				smooth: 0.2,
				length: 10,
				length2: 20
			},
			itemStyle: {
				normal: {
					color: function (params) {
						var colorList = ['#57d3b4', '#c49dfd', '#d9b65a', '#438fe0'];
						return colorList[params.dataIndex]
					},
				}
			},
			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
				return Math.random() * 100;
			}
		}
	]
}
var optionHosTop = {
	// 远程医疗业务医院排名
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
		data: ['脑梗死', '心绞痛', '2型糖尿病', '腹痛', '肺部感染', '输尿管结石', '急性支气管炎', '脑血管病', '头部损伤', '急性上呼吸道感染'].reverse(),
		axisLabel: {
			show: true,
			textStyle: {
				color: '#a8c8f6'
			}
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
						return num.value + '人次';
					} else {
						return '';
					}
				}
			},
			type: 'bar',
			data: [751, 321, 275, 210, 198, 152, 149, 131, 125, 89].reverse(),
			itemStyle: {
				normal: {
					color: function (params) {
						var colorList = ['#57d3b4', '#c49dfd', '#d9b65a', '#438fe0', '#7e9beb', '#21ccc2', '#ce90ac', '#fb8787', '#ef8df2', '#7074fb'];
						return colorList[params.dataIndex]
					}
				}
			},
		},
	]
};
var optionTrend = {
	// 远程医疗趋势分析
	xAxis: {
		type: 'category',
		data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月',],
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
		data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320],
		type: 'line',
		symbol: 'none',
		itemStyle: {
			normal: {
				lineStyle: {
					color: '#ffa222' //折线颜色
				}
			}
		},
	}]
}


diseaseTopEcharts.setOption(optionDiseaseTop)
longrangeBusinessEcharts.setOption(optionLongrangeBusiness)
centerBusinessEcharts.setOption(optionCenterBusiness)
hosTopEcharts.setOption(optionHosTop)
trendEcharts.setOption(optionTrend)