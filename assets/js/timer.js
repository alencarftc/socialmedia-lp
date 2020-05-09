class Timer {
    constructor(countDownDate){
        let $ = document.querySelector.bind(document);

        this._days = $('#days');
        this._hours = $('#hours'); 
        this._minutes = $('#minutes');
        this._seconds = $('#seconds'); 

        this.start(countDownDate);
    }

    start(countDownDate){
        var x = setInterval(() => this._update(countDownDate) && clearInterval(x), 1000);
    }

    _update(countDownDate){
        let countDownTime = new Date(countDownDate).getTime();
        let now = new Date().getTime();

        let distance = countDownTime - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this._updateDom(days, hours, minutes, seconds);

        return distance < 0;
    }

    _updateDom(days, hours, minutes, seconds){
        this._days.innerHTML = `${days}`.padStart(2, '0'); 
        this._hours.innerHTML = `${hours}`.padStart(2, '0'); 
        this._minutes.innerHTML = `${minutes}`.padStart(2, '0');
        this._seconds.innerHTML = `${seconds}`.padStart(2, '0');
    }
}

(() => new Timer("May 23, 2020 14:45:00"))();
