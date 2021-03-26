import React from 'react'
import ChartJsColumnStyled from './ChartJsColumnStyled'
import Chart, { Bar } from 'react-chartjs-2'
import { DefaultTheme, ThemeContext } from 'styled-components'
import { convertPercentToNumber } from '../../../utils/math'

interface IProps {}
interface IChartJsColumnElementProps {
  theme: DefaultTheme
}

const ChartJsColumnElement = (props: IChartJsColumnElementProps) => {
  const theme = props.theme

  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'dwaawd',
        data: [5, 10, 10, 5, 10, 10, 5, 10, 10, 5, 10],
        backgroundColor: theme.colors.primaryColor,
      },
      {
        label: 'dwaawd2',
        data: [10, 13, 16, 5, 10, 10, 10, 13, 16, 5, 10],
        backgroundColor: theme.colors.accentColor,
      },
    ],
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
      text: '',
    },
    layout: {
      padding: {
        left: -5,
        right: 0,
        top: 0,
        bottom: -7,
      },
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
          },
          barPercentage: 0.3,
          ticks: {
            fontFamily: 'Gilroy Medium',
            fontSize: theme.sizes.tnFontSize,
            fontWeight: theme.sizes.semiBoldFontWeight,
            fontStyle: 'normal',
            lineHeight: `${theme.sizes.tnLineHeight}px`,
            fontColor: theme.colors.greyColor,
            padding: theme.sizes.stepSize * 1.5,
            letterSpacing: `${convertPercentToNumber(
              theme.sizes.tnFontSize,
              1,
              2,
            )}px`,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
          },
          ticks: {
            fontFamily: 'Gilroy Medium',
            fontSize: theme.sizes.tnFontSize,
            fontWeight: theme.sizes.semiBoldFontWeight,
            fontStyle: 'normal',
            lineHeight: `${theme.sizes.tnLineHeight}px`,
            fontColor: theme.colors.greyColor,
            padding: theme.sizes.stepSize * 1.6,
            letterSpacing: `${convertPercentToNumber(
              theme.sizes.tnFontSize,
              1,
              2,
            )}px`,
          },
          gridLines: {
            display: true,
            lineWidth: 1,
            borderDash: [4, 4],
            color: theme.colors.lightGreyColor,
            zeroLineWidth: 1,
            zeroLineColor: theme.colors.lightGreyColor,
            zeroLineBorderDash: [4, 4],
            drawBorder: false,
            drawTicks: false,
          },
        },
      ],
    },
  }

  return <Bar data={data} options={options} />
}

const ChartJsColumn = (props: IProps) => {
  return (
    <ChartJsColumnStyled>
      <ThemeContext.Consumer>
        {(theme) => <ChartJsColumnElement theme={theme} />}
      </ThemeContext.Consumer>
    </ChartJsColumnStyled>
  )
}

export default ChartJsColumn