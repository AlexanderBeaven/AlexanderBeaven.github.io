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
var back1left = 0;
var back2left = 0;
var back3left = 0
var back1wid = 0;
var back2wid = 0;
var back3wid = 0;
var back1mult = 30;
var back2mult = 42;
var back3mult = 54;
var interval = 0;
var speed = window.innerWidth / 40;
var finish = window.innerWidth - 100;
var accel = 10; //speed range increase
var buffer = 0; //least amt of speed
var ships = document.getElementsByClassName("ship");
var shipImgs = document.getElementsByClassName("shipImg");
var backgrounds = document.getElementsByClassName("overlay");

function DynamicSizes() //resize and respace ships depending on screen size
{   
    loop();

    back1wid = window.innerWidth + 100;
    back2wid = window.innerWidth + 100;
    back3wid = window.innerWidth + 100;

    var shipDim = window.innerHeight * .13;
    for (i = 0; i < ships.length; i++)
    {
        ships[i].style.width = shipDim.toString() + "px";
        ships[i].style.height = shipDim.toString() + "px";
        shipImgs[i].style.width = shipDim.toString() + "px";
        shipImgs[i].style.height = shipDim.toString() + "px";
    }   
}

function GameStarted() //user has clicked red circle
{
    if (!running && reset)
    {      
        speed = window.innerWidth / 50;
        finish = window.innerWidth - 100;

        ship1Left = 0;
        ship2Left = 0;
        ship3Left = 0;
        ship4Left = 0;

        ship1Amt = 0;
        ship2Amt = 0;
        ship3Amt = 0;
        ship4Amt = 0;

        back1wid = window.innerWidth + 100;
        back2wid = window.innerWidth + 100;
        back3wid = window.innerWidth + 100;
        
        reset = false;
        running = true;

        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("startButton").style.backgroundImage = "url(srimages/GreenLight.png)";
        document.getElementById("ship1img").src = "srimages/Ship1speed.png";
        document.getElementById("ship2img").src = "srimages/Ship2speed.png";
        document.getElementById("ship3img").src = "srimages/Ship3speed.png";
        document.getElementById("ship4img").src = "srimages/Ship4speed.png";
    }
}

function Reset() //reset for new race
{
    if (!reset)
    {
        reset = true;

        for (i = 0; i < ships.length; i++)
        {
            ships[i].style.left = "0%";           
        }

        document.getElementById("ship1").classList.remove("transition");
        document.getElementById("ship2").classList.remove("transition");
        document.getElementById("ship3").classList.remove("transition");
        document.getElementById("ship4").classList.remove("transition");
        document.getElementById("background1").classList.remove("transition");
        document.getElementById("background2").classList.remove("transition");
        document.getElementById("background3").classList.remove("transition");
       
        back1left = 0;
        back2left = 0;
        back3left = 0;

        back1mult = 30;
        back2mult = 42;
        back3mult = 54;
        
        interval = 0;

        for (i = 0; i < backgrounds.length; i++)
        {
            backgrounds[i].style.left = "0px";
        }

        document.getElementById("message").style.visibility = "hidden"; 
    }
}

function BackgroundScroll() //move backgrounds with parallax to give illusion of movement and depth
{
    if (!document.getElementById("ship1").classList.contains("transition"))
    {
        document.getElementById("ship1").classList.add("transition");
        document.getElementById("ship2").classList.add("transition");
        document.getElementById("ship3").classList.add("transition");
        document.getElementById("ship4").classList.add("transition");
        document.getElementById("background1").classList.add("transition");
        document.getElementById("background2").classList.add("transition");
        document.getElementById("background3").classList.add("transition");
    }
         
    for (i = 0; i < backgrounds.length; i++) {
        if (i == 0)
        {
            if (running)
            {
                back1mult *= 1.2;
                back1left -= back1mult;
                back1wid += back1mult; 
            }
            else
            {
                back1left -= 5;
                back1wid += 5;
            }
            backgrounds[i].style.left = back1left.toString() + "px";
            backgrounds[i].style.width = back1wid.toString() + "px";
        }

        else if (i == 1)
        {
            if (running)
            {
                back2mult *= 1.2;
                back2left -= back2mult;
                back2wid += back2mult;             
            }
            else
            {
               back2left -= 7;
               back2wid += 7;       
            }
            backgrounds[i].style.left = back2left.toString() + "px";
            backgrounds[i].style.width = back2wid.toString() + "px";          
        }

        else if (i == 2)
        {
            if (running)
            {
                back3mult *= 1.2;
                back3left -= back3mult;
                back3wid += back3mult;
            }
            else
            {
                back3left -= 9;
                back3wid += 9;              
            }
            backgrounds[i].style.left = back3left.toString() + "px";
            backgrounds[i].style.width = back3wid.toString() + "px";           
        }
    }
}

function loop() //loop runs every half second
{    
        setTimeout(function ()
        {
            if (running)
            { 
                MoveShips();
            }
            BackgroundScroll();
            speed += accel;
            interval = 500;
            loop();          
        }, interval);               
}

function MoveShips()
{   
    //see if any ships have crossed finish line
    if (ship1Left < finish && ship2Left < finish && ship3Left < finish && ship4Left < finish) {
        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < ship1Amt) //ship can only gain speed
        {
            amt = ship1Amt + 1;
        }
        ship1Left += amt;
        ship1Amt = amt;
        document.getElementById("ship1").style.left = ship1Left.toString() + "px";    

        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < ship2Amt) //ship can only gain speed
        {
            amt = ship2Amt + 1;
        }
        ship2Left += amt;
        ship2Amt = amt;
        document.getElementById("ship2").style.left = ship2Left.toString() + "px";

        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < ship3Amt) //ship can only gain speed
        {
            amt = ship3Amt + 1;
        }
        ship3Left += amt;
        ship3Amt = amt;
        document.getElementById("ship3").style.left = ship3Left.toString() + "px";

        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < ship4Amt) //ship can only gain speed
        {
            amt = ship4Amt + 1;
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
        document.getElementById("message").style.border = "solid 2px #7AE7C7";
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
