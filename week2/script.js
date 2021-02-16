var gamerNames = [
    'Zany Snake',
    'Tallboy Yuppie',
    'Killer Beef',
    'Nefarious Nutcracker',
    'Prickly Pizza',
    'Living Metalhead',
    'Danny Menace',
    'Baptismal Globetrotter',
    'Peanut Galerie',
    'Angel Zombie',
    'President Avenger',
    'Life Vader',
    'Doctor Foxtrot',
    'Hispanic Raider',
    'Curd Burglar',
    'Tricky Troll',
    'Santa Slayer',
    'Brothers in Doom',
    'Dancing Snowball',
    'Societal Puppet',
    'Lance King',
    'Leader of the Park',
    'Lethal Lover',
    'Zumba Zebra',
    'Flabbergaster Felix',
    'Fallout Impersonator',
    'Mischievous Deviant',
    'Fishy Mistress',
    'Tech Foreigner',
    'Hunter Johnnyboi',
    'Mustard Pawn',
    'Stakey Marks',
    'Skyrim McDonald',
    'Halo Baller',
    'Pirate Eyeball',
    'Corona Killer',
    'Mushroom Stomper',
    'Sleeping Sister',
    'Italian Sonic',
    'Sixpack Armstrong',
    'Billy Bob Loser',
    'New Girl Sally'
]

function newName() {
    var randomNumber = Math.floor(Math.random() * (gamerNames.length));
    document.getElementById('nameDisplay').innerHTML = gamerNames[randomNumber];
}

newName()