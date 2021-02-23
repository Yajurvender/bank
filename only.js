function valid() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    if (a == "admin" && b == "admin") {
        window.location = "main.html";
    }
    else {
        alert("wrong username or password");
    }
}

var bal = 0;

function checkBalance() { 
    swal("Your available balance is:" +bal);
}

function deposit(){
    var money = document.getElementById("i1").value;
    if (money<100)
    {
        swal("Sorry admin!", "You can not add value less than 100!", "warning");
    }
    else
    {
        bal= +bal +  +money;
        swal("Congratulations!", "Your money is succesfully added to your account!", "success");
        document.getElementById("i1").value="";
        // checkBalance();
    }
}

function withdraw(){
    var wdraw = document.getElementById("i2").value;
    if (bal<wdraw)
    {
        swal("Sorry admin!", "You do not have enough amount!", "warning");
    }
    else
    {
        bal= +bal -  +wdraw;
        swal("Congratulations!", "Your money is succesfully withdrawn!", "success");
        document.getElementById("i2").value="";
    }
}

function transfer(){
    var trans = document.getElementById("i3").value;
    if (bal<trans)
    {
        swal("Sorry admin!", "You do not have enough amount!", "warning");
    }
    else{
        bal= +bal -  +trans;
        swal("Congratulations!", "Your money is succesfully transfered!", "success");
        document.getElementById("i3").value="";
    }
}