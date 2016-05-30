$(function () {

    function viewModel() {
        var self = this;
        self.numKnockoutA = ko.observable(0);
        self.numKnockoutB = ko.observable(0);
        self.sumKnockout = ko.computed(function () { return +self.numKnockoutA() + +self.numKnockoutB(); });
    };

    ko.applyBindings(new viewModel());
});

function addJs() {
    var numA = +document.getElementById("addJsNumA").value;
    var numB = +document.getElementById("addJsNumB").value;
    var sum = numA + numB;
    document.getElementById("sumJs").innerHTML = sum;
}