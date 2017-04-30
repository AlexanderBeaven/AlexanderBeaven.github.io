var running = false;
var ship1Left = 0;
var ship2Left = 0;
var finish = 97;

function GameStarted()
{
    if (!running)
    {
        ship1Left = 0;
        ship2Left = 0;
        running = true;
        document.getElementById("ship1").style.left = "0%";
        document.getElementById("ship2").style.left = "0%";
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("startButton").style.backgroundImage = "url(srimages/GreenLight.png)";
        loop();
    }
}

function loop() {
    if (running) {
        var rand = Math.round(Math.random() * (200 - 100)) + 100;
        setTimeout(function () {
            MoveShips();
            loop();
        }, rand)
    };
};

function MoveShips()
{      
    if (ship1Left < finish && ship2Left < finish)
    {
            var amt = Math.round(Math.random() * 2) + 1;
            if (ship1Left + amt <= 95) {
                ship1Left += amt;
            }
            else
            {
                ship1Left = finish;
            }
            document.getElementById("ship1").style.left = ship1Left.toString() + "%";         
   
            var amt = Math.round(Math.random() * 2) + 1
            if (ship2Left + amt <= 98) {
                ship2Left += amt;
            }
            else {
                ship2Left = finish;
            }           
            document.getElementById("ship2").style.left = ship2Left.toString() + "%";          

    } else {

        running = false;
        document.getElementById("startButton").style.backgroundImage = "url(srimages/RedLight.png)";
        document.getElementById("message").style.visibility = "visible";

        if (ship1Left == finish)
        {
            document.getElementById("message").innerText = "Ship 1 wins!";
            //ship 1 wins
        } else {
            document.getElementById("message").innerText = "Ship 2 wins!";
            //ship 2 wins
        }

        
    }
   
}
