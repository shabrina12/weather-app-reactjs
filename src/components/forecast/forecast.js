import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import './forecast.css'

const DAY_IN_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({dataForecast}) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = DAY_IN_WEEK.slice(dayInAWeek, DAY_IN_WEEK.length).concat(DAY_IN_WEEK.slice(0, dayInAWeek));

  return (
    <div className='forecast-container'>
        <label className='title'>Daily</label>
        <Accordion allowZeroExpanded>
            {dataForecast.list.splice(0, 7).map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className='daily-item'>
                                <div className='left'>
                                    <img src={`icons/${item.weather[0].icon}.png`} alt='icon-weather' />
                                    <label>{forecastDays[index]}</label>
                                </div>
                                <div className='right'>
                                    <label>{item.weather[0].description}</label>
                                    <label className='item-temp'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className='daily-details-grid'>
                            <div className='daily-details-item'>
                                <span>Feels like</span>
                                <span>{Math.round(item.main.feels_like)}°C</span>
                            </div>
                            <div className='daily-details-item'>
                                <span>Wind</span>
                                <span>{item.wind.speed} m/s</span>
                            </div>
                            <div className='daily-details-item'>
                                <span>Humidity</span>
                                <span>{item.main.humidity}%</span>
                            </div>
                            <div className='daily-details-item'>
                                <span>Pressure</span>
                                <span>{item.main.pressure}hPa</span>
                            </div>
                            <div className='daily-details-item'>
                                <span>Clouds</span>
                                <span>{item.clouds.all}%</span>
                            </div>
                            <div className='daily-details-item'>
                                <span>Clouds</span>
                                <span>{item.clouds.all}%</span>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  )
}

export default Forecast