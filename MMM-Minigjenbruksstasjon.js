Module.register("MMM-Minigjenbruksstasjon", {
    defaults: {
		dayOfWeek: "tuesday",
		timeFrom: "16:00",
		timeTo: "17:30",
		updateSpeed: 1000,
	},

	dayOfWeekMap: {
		monday: 1,
		tuesday: 2,
		wednesday: 3,
		thursday: 4,
		friday: 5,
		saturday: 6,
		sunday: 7
	},

    getScripts: function() {
        return [ "moment.js" ];
	},

	getStyles: function () {
		return [this.file("style.css")];
	  },
	
    getTranslations: function() {
        return {
            nb: "translations/nb.json",
            en: "translations/en.json"
        };
    },

    start: function() {
		var self = this;
		moment.locale(config.language);

        this.checkMessageInterval();
        setInterval( function(){
            self.checkMessageInterval();
        }, 60*1000);
	},

	checkMessageInterval: function() {
		let interval = this.getInterval();
		let inInterval = moment().isBetween(interval.from, interval.to);
		this.showMessage = inInterval ? true : false;

		this.updateDom(this.config.updateSpeed);
		
	},

	getInterval: function() {
		let dowNum = this.dayOfWeekMap[this.config.dayOfWeek];
		let intervalDate = moment().isoWeekday(dowNum).format("YYYY-MM-DD");

		return {
			from: moment(`${intervalDate} ${this.config.timeFrom}:00`),
			to: moment(`${intervalDate} ${this.config.timeTo}:00`)
		}
	},

    getDom: function(){
        let wrapper = document.createElement("div");
        if (this.showMessage){
			let messageBox = document.createElement("div");
			messageBox.className = "message";
			messageBox.innerHTML = `<i class="fas fa-recycle"></i> ` + this.translate("message");
			wrapper.appendChild(messageBox)
		} 

		return wrapper;
    }
});