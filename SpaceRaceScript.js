var running = false;
var reset = true;
var ship1Left = 0;
var ship2Left = 0;
var ship3Left = 0;
var ship4Left = 0;
var ship1Amt = 0;
var ship2Amt = 0;
var ship3Amt = 0;
var ship4Amt = 0;
var background3Scroll = 250;
var background2Scroll = 280;
var background1Scroll = 300;
var rand = 0;
var finish = screen.width - 100;
var speed = screen.width / 15;
var accel = 15;
var buffer = 2;

function DynamicSizes() //resize and respace ships depending on screen size
{
    var shipDim = screen.height * .1;
    document.getElementById("ship1img").style.width = shipDim.toString() + "px";
    document.getElementById("ship2img").style.width = shipDim.toString() + "px";
    document.getElementById("ship3img").style.width = shipDim.toString() + "px";
    document.getElementById("ship4img").style.width = shipDim.toString() + "px";
    document.getElementById("ship1img").style.height = shipDim.toString() + "px";
    document.getElementById("ship2img").style.height = shipDim.toString() + "px";
    document.getElementById("ship3img").style.height = shipDim.toString() + "px";
    document.getElementById("ship4img").style.height = shipDim.toString() + "px";
}

function GameStarted()
{
    if (!running && reset)
    {     
        speed = screen.width / 15;
        finish = screen.width - 100;
        ship1Left = 0;
        ship2Left = 0;
        ship3Left = 0;
        ship4Left = 0;
        ship1Amt = 0;
        ship2Amt = 0;
        ship3Amt = 0;
        ship4Amt = 0;
        rand = 0;
        reset = false;
        running = true;
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("startButton").style.backgroundImage = "url(srimages/GreenLight.png)";
        document.getElementById("ship1img").src = "srimages/Ship1speed.png";
        document.getElementById("ship2img").src = "srimages/Ship2speed.png";
        document.getElementById("ship3img").src = "srimages/Ship3speed.png";
        document.getElementById("ship4img").src = "srimages/Ship4speed.png";
        loop();
    }
}

function Reset()
{
    if (!reset)
    {
        reset = true;
        document.getElementById("ship1").style.left = "0%";
        document.getElementById("ship2").style.left = "0%";
        document.getElementById("ship3").style.left = "0%";
        document.getElementById("ship4").style.left = "0%";
        document.getElementById("message").style.visibility = "hidden";
    }
}


function loop()
{
    if (running)
    {
        
        setTimeout(function ()
        {
            MoveShips();
            speed += accel;
            rand = 500;
            loop();
           
        }, rand);     
        
    }
};

function MoveShips()
{
    //see if any ships have crossed finish line
    if (ship1Left < finish && ship2Left < finish && ship3Left < finish && ship4Left < finish) {
        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < ship1Amt) //ship can only gain speed
        {
            amt = ship1Amt;
        }
        ship1Left += amt;
        ship1Amt = amt;
        document.getElementById("ship1").style.left = ship1Left.toString() + "px";
        document.getElementById("ship1").style.right = (document.getElementById("ship1").style.right - amt).toString() + "px";

        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < ship2Amt) //ship can only gain speed
        {
            amt = ship2Amt;
        }
        ship2Left += amt;
        ship2Amt = amt;
        document.getElementById("ship2").style.left = ship2Left.toString() + "px";
        document.getElementById("ship2").style.right = (document.getElementById("ship2").style.right - amt).toString() + "px";

        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < ship3Amt) //ship can only gain speed
        {
            amt = ship3Amt;
        }
        ship3Left += amt;
        ship3Amt = amt;
        document.getElementById("ship3").style.left = ship3Left.toString() + "px";
        document.getElementById("ship3").style.right = (document.getElementById("ship3").style.right - amt).toString() + "px";

        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < ship4Amt) //ship can only gain speed
        {
            amt = ship4Amt;
        }
        ship4Left += amt;
        ship4Amt = amt;
        document.getElementById("ship4").style.left = ship4Left.toString() + "px";
        document.getElementById("ship4").style.right = (document.getElementById("ship4").style.right - amt).toString() + "px";

        //subtract minimum amount from scroll time of backgrounds
       
    }

    else {
        running = false;
        document.getElementById("startButton").style.backgroundImage = "url(srimages/RedLight.png)";
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("ship1img").src = "srimages/Ship1.png";
        document.getElementById("ship2img").src = "srimages/Ship2.png";
        document.getElementById("ship3img").src = "srimages/Ship3.png";
        document.getElementById("ship4img").src = "srimages/Ship4.png";

        var winner = Math.max(ship1Left, ship2Left, ship3Left, ship4Left); //determine which ship would have gone further had it not reached the end. that ship is winner.

        if (ship1Left == winner) {
            document.getElementById("message").innerText = "Ship 1 wins! Press here to reset.";
            //ship 1 wins
        } else if (ship2Left == winner) {
            document.getElementById("message").innerText = "Ship 2 wins! Press here to reset.";
            //ship 2 wins
        } else if (ship3Left == winner) {
            document.getElementById("message").innerText = "Ship 3 wins! Press here to reset.";
            //ship 3 wins
        } else if (ship4Left == winner) {
            document.getElementById("message").innerText = "Ship 4 wins! Press here to reset.";
            //ship 4 wins       
        }
    }
}
