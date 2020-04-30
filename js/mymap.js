//series里定义的mymap,地图js文件里定义的heJin
echarts.registerMap('mymap', heJin);

var myecharts = echarts.init($('.map .inner .chart .geo')[0])

var option = {
	xAxis: { show: false,min: 0,max: 100 },
	yAxis: { show: false,min: 0,max: 100 },
	backgroundColor: '', //设置无背景色
	geo: {
		show: true,
		map: 'mymap',
		zoom: 1.2,
		label: {
			normal: { show: false },
			emphasis: { show: false }
		},
		roam: false,
		itemStyle: {
			normal: {
				areaColor: '#142957',
				borderColor: '#0692a4',
			},
			emphasis: {
				areaColor: '#142957',
			}
		},
	},
	series: [{
		type: 'effectScatter',
		symbolSize: 25,
		itemStyle: {
			color: '#80F1BE'
		},
			label: {
				show: true,
				formatter: function (param) {
					return param.data[2];
				},
				position: 'right'
			},
		data: [
			[30,10,'下化乡'],
			[50.7,90.2,'樊村镇'],
			[70.4,20.2,'僧楼镇'],
			[50.4,30.2,'清涧街道'],
			[75.4,50.2,'赵家庄乡'],
			[35.4,70.2,'城区街道'],
			[35.4,40.2,'阳村乡'],
			[70.4,80.2,'柴家乡'],
			[50.4,50.2,'小梁乡'],
		]
	}]
};


myecharts.setOption(option)

var domList= {
	'樊村镇': ['2个','9个','10个','7个','12个','8个'],
	'柴家乡': ['2个','9个','10个','7个','12个','8个'],
	'城区街道': ['2个','9个','10个','7个','12个','8个'],
	'小梁乡': ['2个','9个','10个','7个','12个','8个'],
	'赵家庄乡': ['2个','9个','10个','7个','12个','8个'],
	'阳村乡': ['2个','9个','10个','7个','12个','8个'],
	'清涧街道': ['2个','9个','10个','7个','12个','8个'],
	'僧楼镇': ['2个','9个','10个','7个','12个','8个'],
	'下化乡': ['2个','9个','10个','7个','12个','8个'],
}
myecharts.on('click', function (params) {
  if (params.value) {
		let domConfig = domList[params.value[2]]
		let dom = '<p style="text-align: center;">'
			+	params.value[2]	+
			'</p>' + '<p>市属医院机构：' 
			+ domConfig[0] + 
			'</p>' + '<p>乡镇卫生院：' 
			+ domConfig[0] + 
			'</p>' + '<p>社区服务中心：' 
			+ domConfig[0] + 
			'</p>' + '<p>村卫生室：' 
			+ domConfig[0] + 
			'</p>' + '<p>社区服务站：' 
			+ domConfig[0] + 
			'</p>' + '<p>编制床位：' 
			+ domConfig[0] + 
			'</p>' + '<P>全科医生：' 
			+ domConfig[0] + 
			'</p>' + '<p>护士人员：' 
			+ domConfig[0] + 
			'</p>'
		document.getElementsByClassName('info')[0].innerHTML = dom
  }
})