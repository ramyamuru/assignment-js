var songs=[
    {
        id:1,
        imageSrc:"./thumbnail/aa.jpg",
        audioSrc:"./music/Mudhal-Nee-Mudivum-Nee-Title-Track-MassTamilan.io.mp3",
        title:"Mudhal Nee Mudivum Nee"
    },
    {
        id:2,
        imageSrc:"./thumbnail/aaaaaaa.jpg",
        audioSrc:"./music/Kaana-kuyile-Ovamusic.com_.mp3",
        title:"Kanna Kuyile"
    },
    {
        id:3,
        imageSrc:"./thumbnail/aaaaab.jpg",
        audioSrc:"./music/Onakka-Munthiri-MassTamilan.fm.mp3",
        title:"Onakka Munthiri"
    },
    {
        id:4,
        imageSrc:"./thumbnail/bbbbc.jpg",
        audioSrc:"./music/BTS-Butter-(TrendyBeatz.com).mp3",
        title:"Butter"
    },
    {
        id:5,
        imageSrc:"./thumbnail/nan.jpg",
        audioSrc:"./music/Naan-Pizhai-MassTamilan.fm.mp3",
        title:" Nan Pizhai"
    },
        
    {
        id:6,
        imageSrc:"./thumbnail/Beast-First-Singless.jpg",
        audioSrc:"./music/Arabic-Kuthu-MassTamilan.fm.mp3",
        title:"Arabic Kuthu"
    },
    {
        id:7,
        imageSrc:"./thumbnail/artworks-5d9aHQSopXbD2OXz-ojY3eA-t500x500.jpg",
        audioSrc:"./music/Raatan Lambiyan.mp3",
        title:"Raataan Lambiyan"
    },
    {
        id:8,
        imageSrc:"./thumbnail/Srivalli-Lyrics-Pushpa.jpg",
        audioSrc:"./music/Srivalli-MassTamilan.fm.mp3",
        title:"Srivalli"
    },
    {
        id:9,
        imageSrc:"./thumbnail/ab67616d0000b273661a0719df4a6e13b08cfa7f.jpg",
        audioSrc:"./music/Tum-Tum-MassTamilan.fm.mp3",
        title:"Tum Tum"
    }

]


function playAudio(songid)
{
   var song=songs.find(function(song,index){return song.id===songid});
     
   document.getElementById("thumbnail").src=song.imageSrc;
   document.getElementById("audio_player").src=song.audioSrc;
   document.getElementById("audio_player_title").innerText=song.title;
   document.getElementById("audio_player").play();
}

