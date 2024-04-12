import React from 'react'

const DayOne = () => {
  return (
    <div>

        <h1>Day - 1</h1>
        
        <h3>Способы подключение JS к твоему документу</h3>

        <p>
            <ol>
                <li>
                    <b>Встроенный скрипт:</b>
                    <p style={{'backgroundColor':'yellow',}}>Это скрипт который мы вешаем на кнопки с атрибутами по типу онклик и т.д</p>
                </li>
                <li>
                    <b>Внутренний скрипт</b>
                    <p style={{'backgroundColor':'yellow',}}>Это когда мы пишем наш скрипт внутри тега script</p>
                </li>
                <li>
                    <b>
                    Внешний скрипт (множество внешних скриптов)
                    </b>
                    <p style={{'backgroundColor':'yellow',}}>А это когда вы подключаете скрипты из других источников!</p>
                </li>
            </ol>
        </p>
    </div>
  )
}

export default DayOne