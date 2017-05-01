var running = false;
var reset = true;
var ship1Left = 0;
var ship2Left = 0;
var ship3Left = 0;
var ship4Left = 0;
var ship5Left = 0;

var finish = screen.width - 70;
var speed = screen.width / 50;

function GameStarted()
{
    if (!running && reset)
    {
        finish = screen.width - 50;
        speed = screen.width / 50;
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
    ship5Left = 0;
    document.getElementById("ship1").style.left = "0%";
    document.getElementById("ship2").style.left = "0%";
    document.getElementById("ship3").style.left = "0%";
    document.getElementById("ship4").style.left = "0%";
    document.getElementById("ship5").style.left = "0%";
    document.getElementById("message").style.visibility = "hidden";
    }
}


function loop()
{
    if (running)
    {
        var rand = 100;
        setTimeout(function ()
        {
            MoveShips();
            loop();
        }, rand)
    };
};

function MoveShips()
{      
    if (ship1Left < finish && ship2Left < finish && ship3Left < finish && ship4Left < finish && ship5Left < finish)
    {
        var amt = Math.round(Math.random() * speed + 1);
            if (ship1Left + amt <= finish) {
                ship1Left += amt;
            }
            else
            {
                ship1Left = finish;
            }
            document.getElementById("ship1").style.left = ship1Left.toString() + "px";         
   
            var amt = Math.round(Math.random() * speed + 1);
            if (ship2Left + amt <= finish) {
                ship2Left += amt;
            }
            else {
                ship2Left = finish;
            }           
            document.getElementById("ship2").style.left = ship2Left.toString() + "px";

            var amt = Math.round(Math.random() * speed + 1);
            if (ship3Left + amt <= finish) {
                ship3Left += amt;
            }
            else {
                ship3Left = finish;
            }
            document.getElementById("ship3").style.left = ship3Left.toString() + "px";

            var amt = Math.round(Math.random() * speed + 1);
            if (ship4Left + amt <= finish) {
                ship4Left += amt;
            }
            else {
                ship4Left = finish;
            }
            document.getElementById("ship4").style.left = ship4Left.toString() + "px";

            var amt = Math.round(Math.random() * speed + 1);
            if (ship5Left + amt <= finish) {
                ship5Left += amt;
            }
            else {
                ship5Left = finish;
            }
            document.getElementById("ship5").style.left = ship5Left.toString() + "px";

    } else {

        running = false;
        document.getElementById("startButton").style.backgroundImage = "url(srimages/RedLight.png)";
        document.getElementById("message").style.visibility = "visible";

        if (ship1Left == finish)
        {
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
        } else if (ship5Left == finish) {
            document.getElementById("message").innerText = "Ship 5 wins! Press here to reset.";
            //ship 5 wins
        }

        
    }
   
}
