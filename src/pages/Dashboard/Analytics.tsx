import { worldMill } from '@react-jvectormap/world';
import { Vietnamese } from 'flatpickr/dist/l10n/vn';
import ReactApexChart from 'react-apexcharts';
import Flatpickr from 'react-flatpickr';

import AnalyticCard from '@/components/AnalyticCard/AnalyticCard.lazy';
import WorldMap from '@/components/WorldMap/WorldMap.lazy';
import {
  analyticList,
  analyticOptions,
  analyticSeries,
} from '@/mocks/analytic';
import { cn } from '@/utils/cn';

export const Analytics = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 flex flex-wrap items-center justify-between gap-3">
          <div className="relative">
            <Flatpickr
              onChange={(date) => {
                console.log('date', date.toLocaleString());
              }}
              className={cn(
                'flatpickr-input w-[120%] rounded border border-stroke bg-white py-2 pl-10 pr-4 text-sm font-medium shadow-card-2 focus-visible:outline-none dark:border-strokedark dark:bg-boxdark',
              )}
              options={{
                mode: 'range',
                static: true,
                defaultDate: ['01/08/2024', '15/08/2024'],
                monthSelectorType: 'static',
                locale: Vietnamese,
                dateFormat: 'd/m/Y',
                prevArrow:
                  '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
                nextArrow:
                  '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
              }}
              placeholder="Select dates"
            />
            <div className="pointer-events-none absolute inset-0 left-4 right-auto flex items-center">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V15C3 15.4142 3.33579 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V4.5C15 4.08579 14.6642 3.75 14.25 3.75H3.75ZM1.5 4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H14.25C15.4926 2.25 16.5 3.25736 16.5 4.5V15C16.5 16.2426 15.4926 17.25 14.25 17.25H3.75C2.50736 17.25 1.5 16.2426 1.5 15V4.5Z"
                  fill="#64748B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0.75C12.4142 0.75 12.75 1.08579 12.75 1.5V4.5C12.75 4.91421 12.4142 5.25 12 5.25C11.5858 5.25 11.25 4.91421 11.25 4.5V1.5C11.25 1.08579 11.5858 0.75 12 0.75Z"
                  fill="#64748B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 0.75C6.41421 0.75 6.75 1.08579 6.75 1.5V4.5C6.75 4.91421 6.41421 5.25 6 5.25C5.58579 5.25 5.25 4.91421 5.25 4.5V1.5C5.25 1.08579 5.58579 0.75 6 0.75Z"
                  fill="#64748B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 7.5C1.5 7.08579 1.83579 6.75 2.25 6.75H15.75C16.1642 6.75 16.5 7.08579 16.5 7.5C16.5 7.91422 16.1642 8.25 15.75 8.25H2.25C1.83579 8.25 1.5 7.91422 1.5 7.5Z"
                  fill="#64748B"
                />
              </svg>
            </div>
          </div>
          <div className="relative z-20 inline-block rounded bg-white shadow-card-2 dark:bg-boxdark">
            <select
              name=""
              id=""
              className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 text-sm font-medium outline-none dark:border-strokedark"
            >
              <option value="" className="dark:bg-boxdark">
                Yearly
              </option>
              <option value="" className="dark:bg-boxdark">
                Monthly
              </option>
            </select>
            <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.96967 6.21967C4.26256 5.92678 4.73744 5.92678 5.03033 6.21967L9 10.1893L12.9697 6.21967C13.2626 5.92678 13.7374 5.92678 14.0303 6.21967C14.3232 6.51256 14.3232 6.98744 14.0303 7.28033L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803L3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967Z"
                  fill="#64748B"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Visitors Analytics
            </h3>
          </div>
          <ReactApexChart
            options={analyticOptions}
            series={analyticSeries}
            type="bar"
            height={380}
          />
        </div>
        {/* Analytics Card */}
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0 sm:[&>*:nth-child(3n)]:border-b-0">
            {analyticList.map((analytic) => (
              <AnalyticCard key={analytic.title} {...analytic} />
            ))}
          </div>
        </div>

        <div className="col-span-12 overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
          <div className="p-4 md:p-6 xl:p-7.5">
            <div className="mb-7.5 justify-between sm:flex">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-black dark:text-white">
                  Sessions by country
                </h3>
              </div>
              <div className="mb-2">
                <div className="relative z-20 inline-block rounded bg-gray-2 dark:bg-boxdark">
                  <select
                    name=""
                    id=""
                    className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark"
                  >
                    <option value="">Last 7 days</option>
                    <option value="">Last 15 days</option>
                  </select>
                  <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                        fill="#637381"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                        fill="#637381"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <WorldMap
                map={worldMill}
                backgroundColor="transparent"
                regionStyle={{
                  initial: {
                    fill: '#A9BDFF',
                  },
                  hover: {
                    fill: '#3056d3',
                  },
                  selected: {
                    fill: '#2d3436',
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
