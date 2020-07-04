console.log(this);

function foo () {
    console.log(this);
};
foo();

var a = foo();
a = {
    b: function () {
        console.log(this);

        var c = function () {
            console.log(this);
        };
        c();
    }
};
console.log(a);