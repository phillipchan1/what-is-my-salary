(function() {
	angular.module("salary")
		// our factory holding all our data
        .factory("salaryData", function() {

        	// defaults
        	var data = {
        		hourlyRate : 13,
        		hoursPerWeek : 40
        	};

        	// function to update our data factory
            data.addData = function(field, property) {
                this[field] = Number(property);
            };

            data.getWeeklyPay = function() {
            	return this.hourlyRate * this.hoursPerWeek;
            }

            data.getMonthlyPay = function() {
            	return this.hourlyRate * this.hoursPerWeek * 4;
            }

            data.getYearlyPay = function() {
            	return this.hourlyRate * this.hoursPerWeek * 52;
            }

        	return data;
       	});
})();