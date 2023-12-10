let tdisplay=document.querySelector('.tdisplay');
let startbtn= document.getElementById('startbtn');
let stopbtn= document.getElementById('stopbtn');
let resetbtn= document.getElementById('resetbtn');

let msec= 00; 
let secs= 00;
let mins= 00;
let hrs=00;

let timerid=null;
startbtn.addEventListener('click',function()
{
    if(timerid!==null){
        clearInterval(timerid);
    }
    timerid= setInterval(startTimer,10);
});
stopbtn.addEventListener('click',function()
{
        clearInterval(timerid);

});
resetbtn.addEventListener('click',function()
{
        clearInterval(timerid);
        tdisplay.innerHTML = '00 : 00 : 00 : 00';
        hrs = msec= secs = mins = 00;
});

document.getElementById("lapbtn").addEventListener("click", lap());

function lap()
{

    if (timerid!=null)
    {
        var Li = document.createElement("li");
        Li.innerHTML = setInterval();
        lapbtn.appendChild(Li.innerHTML);
    }
}
function startTimer()
{
    msec++;
    if(msec==50)
    {
        msec=0;
        secs++;
        if(secs==60)
        {
            secs=0;
            mins++;
            if(mins==60)
            {
                mins=0;
                hrs++;

            }
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hrsString = hrs < 10 ? `0${hrs}` : hrs;
    

    tdisplay.innerHTML = `${hrsString} : ${minsString} : ${secsString} : ${msecString}`;

}

