$(function () {
    echart_1();
    jiangxiMap();
    echart_3();
    data={
        "南昌市": {load: 2, value: null},
        "景德镇市": {load: 2, value:null},
        "萍乡市": {load: 2, value:null},
        "九江市": {load: 2, value: null},
        "新余市": {load: 2, value: null},
        "鹰潭市": {load: 2, value: null},
        "赣州市": {load: 2, value:null},
        "吉安市": {load: 2, value: null},
        "宜春市": {load: 2, value: null},
        "抚州市": {load: 2, value: null},
        "上饶市": {load: 2, value: null}
    }
    function echart_1() {
        var myChart = echarts.init(document.getElementById('chart_1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}万元"
            },
            legend: {
                x: 'center',
                y: '15%',
                data: ['测试1', '测试2', '测试3', '测试4', '测试5', '测试6'],
                icon: 'circle',
                textStyle: {
                    color: '#fff',
                }
            },
            calculable: true,
            series: [{
                name: '',
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [41, 100.75],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '40%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {

                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                    value: 900.58,
                    name: '测试1',
                    itemStyle: {
                        normal: {
                            color: '#f845f1'
                        }
                    }
                },
                    {
                        value: 1100.58,
                        name: '测试2',
                        itemStyle: {
                            normal: {
                                color: '#ad46f3'
                            }
                        }
                    },
                    {
                        value: 56,
                        name: '测试3',
                        itemStyle: {
                            normal: {
                                color: '#5045f6'
                            }
                        }
                    },
                    {
                        value: 89,
                        name: '测试4',
                        itemStyle: {
                            normal: {
                                color: '#4777f5'
                            }
                        }
                    },
                    {
                        value: 6,
                        name: '测试5',
                        itemStyle: {
                            normal: {
                                color: '#44aff0'
                            }
                        }
                    },
                    {
                        value: 16930,
                        name: '测试6',
                        itemStyle: {
                            normal: {
                                color: '#45dbf7'
                            }
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_2江西省地图
    function jiangxiMap() {

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('cst-map-graph'));
        var mapName = 'jiangxi'
        var data = []
        var toolTipData = [];
        var geoCoordMap = {
            "南昌市": [115.892151, 28.676493],
            "景德镇市": [117.214664, 29.29256],
            "萍乡市": [113.852186, 27.622946],
            "九江市": [115.992811, 29.712034],
            "新余市": [114.930835, 27.810834],
            "鹰潭市": [117.033838, 28.238638],
            "赣州市": [114.940278, 25.85097],
            "吉安市": [114.986373, 27.111699],
            "宜春市": [114.391136, 27.8043],
            "抚州市": [116.358351, 27.98385],
            "上饶市": [117.971185, 28.44442]
        };


        // 将坐标与值对应并反映在地图上
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        function showProvince() {
            myChart.setOption(option = {
                title: {
                    show: false
                },
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove',
                    hideDelay: 300,
                    enterable: true,
                    borderWidth: 2,
                    borderColor: '#3784f0',
                    backgroundColor: 'rgba(0, 13, 32, 0.9)',
                    // formatter: '{b}',//标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行。
                    formatter: function (params, ticket, callback) {
                        return getAreaToolTip(params, ticket, callback);
                    }
                },
                series: [{
                    type: 'map',
                     mapType: 'jiangxi',// 自定义扩展图表类型
                    roam: true,
                    data:convertData([
                    {name: "南昌市", value: 123},
                    {name: "景德镇市", value: 456},
                    {name: "萍乡市", value: 789},
                    {name: "九江市", value: 8585},
                    {name: "新余市", value: 1235},
                    {name: "鹰潭市", value: 4587},
                    {name: "赣州市", value: 6698},
                    {name: "吉安市", value: 85474},
                    {name: "宜春市", value: 2155},
                    {name: "抚州市", value: 12258},
                    {name: "上饶市", value: 36955}
                    ]),
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            textStyle: {
                                color: '#fff',
                                fontSize: 11
                            },
                            show: true
                        },
                        emphasis: { //地图区城市字体的颜色
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: { //地图模块的颜色
                        normal: {
                            areaColor: '#064676',
                            borderColor: '#32c8fa',
                            borderWidth: 1,
                            shadowColor: '#32c8fa',
                            shadowOffsetX: 3,
                            shadowOffsetY: 3,
                            shadowBlur: 30
                        },
                        emphasis: {
                            areaColor: '#033b6c'
                        }
                    },
                    animation: false //设置ECharts是否开启动画
                }]
            });
        }
        var currentIdx = 0;
        showProvince();
        // 使用刚指定的配置项和数据显示图表。
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_3IDC资源情况
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['在读', '走读'],
                textStyle: {
                    color: '#fff'
                },
                top: '8%'
            },
            grid: {
                top: '40%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2月', '3月', '4月', '5月', '6月'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                scale:true,
                name: '发展量',
                splitNumber : 10,
                max : 26000,
                min : 0,
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name: '在读',
                    type: 'line',
                    data: [16901,16930,16983,17200,26000,25368]
                },
                {
                    name: '走读',
                    type: 'line',
                    data: [19134,19233,19346,19483,19579,25546]
                }
            ]
        };
        myChart.setOption(option);
    }

    function getAreaToolTip(params, ticket, callback) {
        var name = params.name;
        var that = this;
        var data = that.data[name];
        var code2Name = {
            "city": {name: "城市", value: ["city"]},
            "nmrkzs": {name: "年末总数", value: ["nmrkzs"]},
            "ptgz": {name: "普通高中", value: ["ptgz"]},
            "ptcz": {name: "普通初中", value: ["ptcz"]},
            "zygz": {name: "职业高中", value: ["zygz"]},
            "xx": {name: "小学", value: ["xx"]},
            "yey": {name: "幼儿园", value: ["yey"]}
        };
        return data2Html(data.value, code2Name, name);
    }


    function data2Html(res, code2Name, title) {
        var tip = '<div class="map-tool-tip">' + '<header><span class="iconfont icon-location"></span>' + title + '</header><div>';

        if(res){
            $.each(code2Name, function (index,item) {
                tip += ('<p><span>' + item.name + '</span><span>:</span><span>');
                $.each(item.value,function (k,v) {
                    tip += res[v];
                });
                tip += '</span></p>';
            });
        }else {
            tip += '<p><span>暂无数据</span></p>';
        }

        tip += '</div></div>';

        return tip;
    }

});
