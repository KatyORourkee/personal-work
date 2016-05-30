$(function () {

    function viewModel() {
        var self = this;
        self.sentence = ko.observable("Enter a sentence, and you will learn how to 'Yoda'.");
        self.yoda = ko.observable();

        self.teach = function () {
            $.ajax({
                url: "https://yoda.p.mashape.com/yoda?sentence=" + self.sentence(),
                type: "GET",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('X-Mashape-Key', 'o5CVpJ6fr9mshXVRzDciilOn6ndnp1yD6PYjsnuR1reXLhRrAT');
                },
                success: function (data) {
                    self.yoda(data);
                }
            });
        }
    };

    ko.applyBindings(new viewModel());
});