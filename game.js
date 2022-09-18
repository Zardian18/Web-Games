var gameIFrame = [
	{
		link: '<iframe src="https://i.simmer.io/@Zardian/galaxy-shooter" style="width:960px;height:600px; border-radius:15px"></iframe>',
		name: '<h3 style="border: 2px solid white;padding: 5px;border-radius:15px">Galaxy Shooter<h3>',
		desc: "My first game using UNITY, this is a 2.5D endless scrolling game where I used concepts like:  Instantiating prefabs for obstacles and lasers, and learning about Quaternians in the process. Displaying icons for active power-ups as UI elements(they stack up  if multiple power ups are collected).  A scoring system based on distance traversed. Local Multiplayer(co-op) mode to play with your friends and having individual scoring system for each player. The game stops when both of the player die.  Difficulty settings which changes rate of spawning of enemies and power-up and the difficulty parameter is retained while restarting the game. Player prefs to store data such as highscores and difficulty state for smoother progression.  Creating different health states and changing sprite of player as well as the health bar upon taking damage and changing it back upon accordingly healing. This was my first project and I learnt many new concepts, got familiar with unity and continue developing my games.",
	},
	{
		link: '<iframe src="https://i.simmer.io/@Zardian/zombie-crasher" style="width:960px;height:600px; border-radius:15px"></iframe>',
		name: '<h3 style="border: 2px solid white;padding: 5px;border-radius:15px">Zombie Crasher<h3>',
		desc: "Zombie Crasher is an infinite runner game where you can shoot bullets or crash into an obstacle or enemy to destroy them. For infinite platform generation, I made 2 platforms and moved the first platform ahead of the 2nd when player passes it completely, this way it creates an illusion that the world is infinite. I also learnt collisions  and trigger collisions for damaging enemy and both collecting bullets. I used slider as health-bar which updates whenever player's health changes. I made a skin custamization menu where we can select our tank out of few other options. It also has a perfectly working pause menu which pauses the background music when game  is paused, resumes it when continued and restarts it if level is restarted. This is the game which encouraged me to start learning 3D modeling for my games.",
	},
	{
		link: '<iframe src="https://i.simmer.io/@Zardian/dartgame" style="width:960px;height:600px"></iframe>',
		name: '<h3 style="border: 2px solid white;padding: 5px;border-radius:15px">Darts<h3>',
		desc: "Darts is as simple as you think; you can move the dart in all possible angles and then shoot it. But here I implemented split-screen so that player can view the side  and front angle of the environment simultaneously while shooting to increases precision. Not only that, all the 3D models used here was made by myself in Blender. Whenever the dart hits the board, it adds the points corresponding to that section to the score. I used a collider prefab and assigned it score values upon collision.  This made the whole scoring and collision process a lot easier. ",
	},
	{
		link: '<iframe src="https://i.simmer.io/@Zardian/gridbox-shooter" style="width:960px;height:600px"></iframe>',
		name: '<h3 style="border: 2px solid white;padding: 5px;border-radius:15px">Gridbox Shooter<h3>',
		desc: "This game was inspired by the popular FPS game Valorant, i used Raycasting for the shooting mechanics for player, from it's camera point. There are 4 types of weapons  and each weapon has it's own animation,i.e when you shoot the weapon moves accordingly. There is a crosshair at the center of the screen at all times. You can use scroll wheel to access different weapons. There are different enemy types as well for each weapon category. They only shoot if they see player and get instantiated at random locations every few seconds. I also used particle systems to display blood and bullet effects when you shoot or hit an enemy. This makes it more visually appealing rather than just being monotonous. All the weapon deals different damage to enemy as well as the player and it can recognize where the bullet is been hit and deals damage accordingly, like more damage on headshots than body shots. Moreover every enemy has different health. The movement of enemies is governed by baking the whole  mesh and providing navigation AI to move it across the map which makes it easier for them to locate obstacles, jumps etc. I also use Pro builder and Pro grids to make the map. I used coroutines and invoke for the reload mechanism and stopping the coroutine if weapon is switched between reloading. making this was a challenge for me as  I used and learned a lot of new concepts while making this project.",
	},
	{
		link: '<iframe src="https://i.simmer.io/@Zardian/bombdropper" style="width:480px;height:800px"></iframe>',
		name: '<h3 style="border: 2px solid white;padding: 5px;border-radius:15px">Bomb Dropper<h3>',
		desc: "This game was a fun little project designed for mobiles, I learnt the touch and slide functionality on mobile inputs using this game. You can slide you fingers(or cursor) to move the player and dodge the bombs. Also I learnt parallax using this project and the main menu is an infinite parallax(the image keeps repeating).",
	},
];
const id = localStorage.getItem("id");

function setGameTitle() {
	document.getElementsByClassName("content")[0].innerHTML =
		gameIFrame[id].name;
}
function setGame() {
	document.getElementById("PlayArea").innerHTML = gameIFrame[id].link;
}
function setDesc() {
	document.getElementById("description").innerHTML = gameIFrame[id].desc;
}

setGameTitle();
setGame();
setDesc();
