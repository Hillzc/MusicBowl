var songs = ["For the Damaged Coda.mp3","You're Gonna Go Far, Kid.mp3","Handlebars.mp3","Hero.mp3","Nightcall.mp3"];
var randSong = Math.floor(Math.random()*songs.length);
console.log(songs[randSong]);
var audio = new Audio(songs[randSong]);
var numCorrect = 0;
var consCorrect = 0;
var activeSong = false;

function playSong() 
{
	if(activeSong==false)
	{
		audio.currentTime = Math.floor(Math.random()*90);
		audio.play();
		activeSong = true;
	}
	else
	{
		audio.play();
	}
}
function stopSong() 
{
	audio.pause();
}
function newSong()
{
	audio.pause();
	activeSong = false;
	randSong = Math.floor(Math.random()*5);
	console.log(songs[randSong]);
	audio = new Audio(songs[randSong]);
	playSong();
}
function checkGuess()
{
	var guess = document.getElementById("guess").value
	console.log(guess);
	if(guess.toLowerCase==songs[randSong].substring(0,songs[randSong].search(".mp3")).toLowerCase)
	{
		numCorrect++;
		consCorrect++;
		newSong();
	}
	else
	{
		consCorrect = 0;
	}
	console.log("Score:",numCorrect);
	console.log("Streak:",consCorrect);
	console.log(songs[randSong]);
	
	document.getElementById("tc").innerHTML = numCorrect;
	document.getElementById("cc").innerHTML = consCorrect;
}
function resetScore()
{
	numCorrect = 0;
	consCorrect = 0;
	document.getElementById("tc").innerHTML = numCorrect;
	document.getElementById("cc").innerHTML = consCorrect;
}
function revealName()
{
	document.getElementById("giveUp").innerHTML = songs[randSong].substring(0,songs[randSong].search(".mp3"));
	consCorrect = 0;
	document.getElementById("tc").innerHTML = numCorrect;
	document.getElementById("cc").innerHTML = consCorrect;
}
