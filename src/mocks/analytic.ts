import { ApexOptions } from 'apexcharts';

import { AnalyticCardProps } from '@/components/AnalyticCard/AnalyticCard';

export type VisitorData = {
  date: number;
  visitors: number;
};

export const visitorData: VisitorData[] = [
  { date: 1, visitors: 150 },
  { date: 2, visitors: 350 },
  { date: 3, visitors: 220 },
  { date: 4, visitors: 300 },
  { date: 5, visitors: 160 },
  { date: 6, visitors: 180 },
  { date: 7, visitors: 290 },
  { date: 8, visitors: 110 },
  { date: 9, visitors: 220 },
  { date: 10, visitors: 340 },
  { date: 11, visitors: 210 },
  { date: 12, visitors: 120 },
  { date: 13, visitors: 280 },
  { date: 14, visitors: 180 },
  { date: 15, visitors: 210 },
  { date: 16, visitors: 160 },
  { date: 17, visitors: 250 },
  { date: 18, visitors: 200 },
  { date: 19, visitors: 160 },
  { date: 20, visitors: 230 },
  { date: 21, visitors: 120 },
  { date: 22, visitors: 200 },
  { date: 23, visitors: 180 },
  { date: 24, visitors: 220 },
  { date: 25, visitors: 220 },
  { date: 26, visitors: 160 },
  { date: 27, visitors: 130 },
  { date: 28, visitors: 140 },
  { date: 29, visitors: 320 },
  { date: 30, visitors: 270 },
];
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
    categories: visitorData.map((data) => data.date),
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
