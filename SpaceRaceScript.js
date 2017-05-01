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

var finish = screen.width - 68;
var speed = screen.width / 6;

function GameStarted()
{
    if (!running && reset)
    {
        finish = screen.width - 50;
        speed = screen.width / 8;
        reset = false;
        running = true;
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("startButton").style.backgroundImage = "url(srimages/GreenLight.png)";
        loop();
    }
}

function Reset()
{
    if (!reset)
    {
    reset = true;
    ship1Left = 0;
    ship2Left = 0;
    ship3Left = 0;
    ship4Left = 0;
    ship1amt = 0;
    ship2amt = 0;
    ship3amt = 0;
    ship4amt = 0;
    ship1Rem = 0;
    ship2Rem = 0;
    ship3Rem = 0;
    ship4Rem = 0;
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
        var rand = 490;
        setTimeout(function ()
        {
            MoveShips();
            loop();
        }, rand)
    };
};

function MoveShips()
{      
    if (ship1Left < finish && ship2Left < finish && ship3Left < finish && ship4Left < finish)
    {

        var amt = Math.round(Math.random() * speed - 10);
        if (amt < ship1Amt) //ship can only gain speed
        {
            amt = ship1Amt;
        }

        ship1Left += amt;          
        ship1Amt = amt;
        document.getElementById("ship1").style.left = ship1Left.toString() + "px";

        var amt = Math.round(Math.random() * speed - 10);
        if (amt < ship2Amt) //ship can only gain speed
        {
            amt = ship2Amt;
        }
       
        ship2Left += amt;
        ship2Amt = amt;
        document.getElementById("ship2").style.left = ship2Left.toString() + "px";

        var amt = Math.round(Math.random() * speed - 10);
        if (amt < ship3Amt) //ship can only gain speed
        {
            amt = ship3Amt;
        }
       
        ship3Left += amt;
        ship3Amt = amt;
        document.getElementById("ship3").style.left = ship3Left.toString() + "px";

        var amt = Math.round(Math.random() * speed - 10);
        if (amt < ship4Amt) //ship can only gain speed
        {
            amt = ship4Amt;
        }
       
        ship4Left += amt;
        ship4Amt = amt;
        document.getElementById("ship4").style.left = ship4Left.toString() + "px";


    }
    else
    {

        running = false;
        document.getElementById("startButton").style.backgroundImage = "url(srimages/RedLight.png)";
        document.getElementById("message").style.visibility = "visible";

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
