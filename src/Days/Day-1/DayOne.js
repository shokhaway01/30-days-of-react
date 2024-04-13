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
        <br/>
        <h3>Arrays - Массивы</h3>

        <p style={{width:'850px', padding:'25px', border:'2px solid black', borderRadius: '15px', marginLeft: '25px'}}>
        В отличие от переменных, массив может хранить несколько значений. Каждое значение в массиве имеет индекс, а каждый индекс имеет ссылку в адресе памяти. Доступ к каждому значению можно получить, используя их индексы. Индекс массива начинается с нуля, а индекс последнего элемента на единицу меньше длины массива.
        </p>

        <p>
            <h2>И так давайте поговорим о массивах!</h2>
            <ol>
                <li>
                <h3>Создание массивов!</h3>
                <p>Чтобы вам создать пустой массив нужны простые действия:</p>
                <ol>
                    <li>С перва создаете переменную через зарезервированное слово let nameOfVariable</li>
        
                    <li>После вы должны вписать туда пустой массив с помошью ключевого слова new как это показано ниже <br/> <b>let newArr = new Array();</b> </li>
                </ol>

                <h3>Типы данных внутри массивов:</h3>
                <p>
                    <b>Внутри массивов вы с легкостью можете помещать массив внутри массивов и также комбинировать различного рода типы данных</b>
                </p>
                <p>
                    <img src='../../images/day-1.jpg' alt='unknown'/>
                </p>

                </li>

            </ol>
        </p>

    </div>
  )
}

export default DayOne