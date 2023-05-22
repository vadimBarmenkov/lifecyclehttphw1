import "./style.css"

export function Clock({timeZone}) {

    function initLocalClocks() {
        // Узнать местное время с помощью JS
        var date = new Date;
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        var hours = date.getHours() + timeZone;

        // Создать объект, хранящий все стрелки и их углы в градусах
        const hands = [
            {
                hand: 'hours',
                angle: (hours * 30) + (minutes / 2)
            },
            {
                hand: 'minutes',
                angle: (minutes * 6)
            },
            {
                hand: 'seconds',
                angle: (seconds * 6)
            }
        ];
        // С помощью цикла установить угол для каждой из стрелок
        for (var j = 0; j < hands.length; j++) {
            var elements = document.querySelectorAll('.' + hands[j].hand);
            for (var k = 0; k < elements.length; k++) {
                elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
                elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
                // Если это минутная стрелка, сохранить положение секундной стрелки (для дальнейшего расчета положения минутной стрелки)
                if (hands[j].hand === 'minutes') {
                    elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
                }
            }
        }
    }

    initLocalClocks();

    return (
        <div className="clock">
            <div className="hours-container">
                <div className="hours"></div>
            </div>
            <div className="minutes-container">
                <div className="minutes"></div>
            </div>
            <div className="seconds-container">
                <div className="seconds"></div>
            </div>
        </div>
    );
}
