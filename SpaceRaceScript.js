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
var ship1Rem = 0;
var ship2Rem = 0;
var ship3Rem = 0;
var ship4Rem = 0;
var numToFinish = 0;

var finish = screen.width - 70;
var speed = screen.width / 5;

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
        var rand = 990;
        setTimeout(function ()
        {
            MoveShips();
            loop();
        }, rand)
    };
};

function MoveShips()
{      
    if (ship1Left < finish && ship2Left < finish && ship3Left < finish && ship4Left < finish) {
        var amt = Math.round(Math.random() * speed + 5);
        if (amt < ship1Amt) //ship can only gain speed
        {
            amt = ship1Amt;
        }
        if (ship1Left + amt <= finish) {
            ship1Left += amt;
        }
        else {
            ship1Rem = (ship1Left + amt) - finish;
            numToFinish++;
            ship1Left = finish;
        }
        ship1Amt = amt;
        document.getElementById("ship1").style.left = ship1Left.toString() + "px";

        var amt = Math.round(Math.random() * speed + 5);
        if (amt < ship2Amt) //ship can only gain speed
        {
            amt = ship2Amt;
        }
        if (ship2Left + amt <= finish) {
            ship2Left += amt;
        }
        else {
            ship2Rem = (ship2Left + amt) - finish;
            numToFinish++;
            ship2Left = finish;
        }
        ship2Amt = amt;
        document.getElementById("ship2").style.left = ship2Left.toString() + "px";

        var amt = Math.round(Math.random() * speed + 5);
        if (amt < ship3Amt) //ship can only gain speed
        {
            amt = ship3Amt;
        }
        if (ship3Left + amt <= finish) {
            ship3Left += amt;
        }
        else {
            ship3Rem = (ship3Left + amt) - finish;
            numToFinish++;
            ship3Left = finish;
        }
        ship3Amt = amt;
        document.getElementById("ship3").style.left = ship3Left.toString() + "px";

        var amt = Math.round(Math.random() * speed + 5);
        if (amt < ship4Amt) //ship can only gain speed
        {
            amt = ship4Amt;
        }
        if (ship4Left + amt <= finish) {
            ship4Left += amt;
        }
        else {
            ship4Rem = (ship4Left + amt) - finish;
            numToFinish++;
            ship4Left = finish;
        }
        ship4Amt = amt;
        document.getElementById("ship4").style.left = ship4Left.toString() + "px";


    } else {

        running = false;
        document.getElementById("startButton").style.backgroundImage = "url(srimages/RedLight.png)";
        document.getElementById("message").style.visibility = "visible";

        
        if (numToFinish > 1) //multiple ships reached end during last turn
        {
           var winner = Math.max(ship1Rem, ship2Rem, ship3Rem, ship4Rem); //determine which ship would have gone further had it not reached the end. that ship is winner.

           if (ship1Rem == winner) {
               document.getElementById("message").innerText = "Ship 1 wins! Press here to reset.";
               //ship 1 wins
           } else if (ship2Rem == winner) {
               document.getElementById("message").innerText = "Ship 2 wins! Press here to reset.";
               //ship 2 wins
           } else if (ship3Rem == winner) {
               document.getElementById("message").innerText = "Ship 3 wins! Press here to reset.";
               //ship 3 wins
           } else if (ship4Rem == winner) {
               document.getElementById("message").innerText = "Ship 4 wins! Press here to reset.";
               //ship 4 wins       

           }
        }
        else
        {
            if (ship1Left == finish) {
                document.getElementById("message").innerText = "Ship 1 wins! Press here to reset.";
                //ship 1 wins
            } else if (ship2Left == finish) {
                document.getElementById("message").innerText = "Ship 2 wins! Press here to reset.";
                //ship 2 wins
            } else if (ship3Left == finish) {
                document.getElementById("message").innerText = "Ship 3 wins! Press here to reset.";
                //ship 3 wins
            } else if (ship4Left == finish) {
                document.getElementById("message").innerText = "Ship 4 wins! Press here to reset.";
                //ship 4 wins       

            }
        }
    }
}
