import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Area = dynamic(() => import('react-apexcharts'), { ssr: false })
const Line = dynamic(() => import('react-apexcharts'), { ssr: false })
const Column = dynamic(() => import('react-apexcharts'), { ssr: false })
const Bar = dynamic(() => import('react-apexcharts'), { ssr: false })
const Pie = dynamic(() => import('react-apexcharts'), { ssr: false })
const Polar = dynamic(() => import('react-apexcharts'), { ssr: false })

const apexChart = () => {

  const area = {
     
    series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      title: {
        text: 'Page Statistics',
        align: 'left'
      },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
          '10 Jan', '11 Jan', '12 Jan'
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
    
        borderColor: '#f1f1f1',
        }        
    },          
  
};

const line = {
     
  series: [{
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    title: {
      text: 'Page Statistics',
      align: 'left'
    },
    legend: {
      tooltipHoverFormatter: function(val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
        '10 Jan', '11 Jan', '12 Jan'
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val;
            }
          }
        }
      ]
    },
    grid: {
  
      borderColor: '#f1f1f1',
      }        
  },          

};

const column = {
     
  series: [{
    name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]  
  }
  ],
  options: {
    chart: {
      height: 350,
      type: 'bar',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }        
  },          

};

const bar = {
     
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }
  ],
  options: {
    chart: {
      height: 350,
      type: 'bar',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
  },          

};

const pie = {

  series: [44, 55, 13, 43, 22],
  chart: {
    width: 380,
    type: 'pie',
  },

  options: {
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
      }]
  }
};

const polar = {
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  chart: {
    type: 'polarArea',
  },
  options: {
    stroke: {
      colors: ['#fff']
    },
    fill: {
      opacity: 0.8
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
};

	return (
        <AppLayout
            header={
                
                <>
                    <h2 className='font-semibold text-xl text-gray'>React Apex Chart</h2>
                </>
            }>

            <Head>
                <title>React Apex Chart</title>
            </Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Area
                            options={area.options}
                            series={area.series}
                            type="area"
                            height={350}
                           // width={500}
                        />
                        <Line
                            options={line.options}
                            series={line.series}
                            type="line"
                            height={350}
                           // width={500}
                        />
                        <Column
                            options={column.options}
                            series={column.series}
                            type="bar"
                            height={350}
                           // width={500}
                        />
                        <Bar
                            options={bar.options}
                            series={bar.series}
                            type="bar"
                            height={350}
                           // width={500}
                        />
                         <Pie
                            options={pie.options}
                            series={pie.series}
                            type="pie"
                            height={350}
                           // width={500}
                        />
                        <Polar
                            options={polar.options}
                            series={polar.series}
                            type="polarArea"
                            height={350}
                           // width={500}
                        />
		                </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default apexChart