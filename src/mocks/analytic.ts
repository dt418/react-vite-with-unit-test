import { ApexOptions } from 'apexcharts';

import { AnalyticCardProps } from '@/components/AnalyticCard/AnalyticCard';

export const analyticOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
    fontFamily: 'Montserrat, sans-serif',
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      distributed: true,
      borderRadius: 2,
      borderRadiusApplication: 'around',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    categories: Array.from({ length: 30 }, (_, i) => i + 1),
    labels: {
      style: {
        colors: '#ffffff',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#ffffff',
      },
    },
  },
  tooltip: {
    theme: 'dark',
  },
  colors: ['#3b82f6'],
  legend: {
    show: false,
  },
};

export const analyticSeries: ApexAxisChartSeries = [
  {
    name: 'Visitors',
    data: [
      150, 380, 220, 310, 160, 190, 300, 110, 220, 340, 210, 112, 290, 180, 210,
      170, 270, 200, 160, 240, 120, 200, 180, 230, 220, 160, 130, 140, 330, 280,
    ],
  },
];

export const analyticList: AnalyticCardProps[] = [
  {
    title: 'Unique Visitors',
    value: 4350,
    changeRate: 18,
    changeDirection: 'up',
    unit: 'currency',
  },
  {
    title: 'Total Pageviews',
    value: 55899,
    changeRate: 25,
    changeDirection: 'up',
    unit: 'number',
  },
  {
    title: 'Visit Duration',
    value: 54,
    changeRate: 5,
    changeDirection: 'down',
    unit: 'percent',
  },
  {
    title: 'Bounce Rate',
    value: 176,
    changeRate: 12,
    changeDirection: 'up',
    unit: 'time',
  },
];
