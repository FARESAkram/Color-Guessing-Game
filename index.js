var red , green , blue , color , start , reset ,level , boxs ,
    box , index , cells , h , score , Hscore , current_score = 0 ;
color = document.getElementById("colorgb");
start = document.getElementsByTagName("button")[0];
reset = document.getElementsByTagName("button")[1];
box = document.querySelector(".Box").children;
cells = document.getElementsByClassName("cell");
h = document.getElementsByTagName("h1")[1];
score = document.getElementById("Score");
Hscore = document.getElementById("HighScore");
Hscore.value ="0";score.value ="0";
boxs = document.getElementsByClassName("Box")[0];
function easy(r,g,b)
{
    var x = Math.floor(Math.random()*3) ;
    for ( i = 0 ; i < 3 ; i ++ )
    {
        red = Math.floor(Math.random()*256) ;
        green = Math.floor(Math.random()*256) ;
        blue = Math.floor(Math.random()*256) ;
        if ( i == x )
        {
            box[i].style.backgroundColor = "rgb("+r+", "+g+", "+b+")" ;
            index = x ;
        }
        else
            box[i].style.backgroundColor = "rgb("+red+", "+green+", "+blue+")" ;

    }
    for ( i = 3 ; i < 9 ; i ++ )
        box[i].className = "Hide";
}
function medium(r,g,b)
{
    var x = Math.floor(Math.random()*6) ;
    for ( i = 0 ; i < 6 ; i ++ )
    {
        box[i].className = "cell";
        red = Math.floor(Math.random()*256) ;
        green = Math.floor(Math.random()*256) ;
        blue = Math.floor(Math.random()*256) ;
        if ( i == x )
        {
            box[i].style.backgroundColor = "rgb("+r+", "+g+", "+b+")" ;
            index = x ;
        }
        else
            box[i].style.backgroundColor = "rgb("+red+", "+green+", "+blue+")" ;
    }
    for ( i = 6 ; i < 9 ; i ++ )
        box[i].className = "Hide";
}
function hard(r,g,b)
{
    var x = Math.floor(Math.random()*9) ;
    for ( i = 0 ; i < 9 ; i ++ )
    {
        box[i].className = "cell";
        red = Math.floor(Math.random()*256) ;
        green = Math.floor(Math.random()*256) ;
        blue = Math.floor(Math.random()*256) ;
        if ( i == x )
        {
            box[i].style.backgroundColor = "rgb("+r+", "+g+", "+b+")" ;
            index = x ;
        }
        else
            box[i].style.backgroundColor = "rgb("+red+", "+green+", "+blue+")" ;
    }
}
start.onclick = function ()
{
    boxs.style.backgroundColor = "white";
    color.className = "" ; 
    color.style.backgroundColor = "transparent" ;
    red = Math.floor(Math.random()*256) ;
    green = Math.floor(Math.random()*256) ;
    blue = Math.floor(Math.random()*256) ;
    color.innerHTML = "rgb("+red+", "+green+", "+blue+")" ; 
    h.style.display = "none";
    level = document.getElementsByTagName("select")[0].value;
    if ( level == "Easy" )
    {
        easy(red,green,blue); 
    }
    else if ( level == "Medium" )
    {
        medium(red,green,blue);
    }
    else
    {
        hard(red,green,blue);
    }
    start.style.display = "none" ;
    reset.style.display = "" ;
};
function makeAllSame(x)
{
    for ( i = 0 ; i < cells.length ; i ++ )
    {
        cells[i].style.backgroundColor = cells[x].style.backgroundColor ;
    }
    boxs.style.backgroundColor = cells[x].style.backgroundColor ;
}
reset.onclick = function ()
{
    location.reload();
}
function resetborder ()
{
    cells[index].style.border = "";
}
document.body.onclick = function play (e) 
{   
    e = e.target ;
    if ( e.className == "cell" )
    {
        if (e == cells[index] )
        {
            current_score ++ ;
            color.innerHTML = "you Guessed right";
            color.className = "right";
            score.value = current_score ;
            makeAllSame(index);
        }
        else
        {
            color.innerHTML = "unforunality no , try again!";
            color.className = "false";
            cells[index].style.border = "dashed black 7px";
        }
        if ( parseInt(score.value) > parseInt(Hscore.value) )
            Hscore.value = score.value;
        setTimeout(resetborder, 1500);
        setTimeout(start.onclick, 2000);
    }
};