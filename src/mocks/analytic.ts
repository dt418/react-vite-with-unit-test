import { ApexOptions } from 'apexcharts';

export const analyticOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
    background: '#1e293b',
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: Array.from({ length: 30 }, (_, i) => i + 1),
    labels: {
      style: {
        colors: '#ffffff',
      },
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
  title: {
    text: 'Visitors Analytics',
    align: 'left',
    style: {
      fontSize: '16px',
      color: '#ffffff',
    },
  },
  colors: ['#3b82f6'],
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
