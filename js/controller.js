(function() {
	angular.module("salary")
		// our factory holding all our data
        .controller("basicResults", function($scope, salaryData) {

        	this.salaryData = salaryData;
        	$scope.commaFormat = true;

        	// function to update our data factory
            this.updateFactory = function(field, property) {
                salaryData.addData(field, property);
            };

        	// default values
        	$scope.hourlyRate = salaryData.hourlyRate;
        	$scope.hoursPerWeek = salaryData.hoursPerWeek;


        	$scope.getHourly = function() {
        		return "something";
        	}




       	});
})();