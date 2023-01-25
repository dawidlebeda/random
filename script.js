const audio = document.querySelector("#audio");
const audioButton = document.querySelector("#audioButton");

const audioUrls = [
  "audio/charlie_andilci.mp3",
  "audio/charlie_chlastat.mp3",
  "audio/charlie_rozumim.mp3",
  "audio/alan_pe.mp3",
  "audio/alan_proktolog.mp3",
  "audio/alan_tekutiny.mp3",
  "audio/berta_opera.mp3",
  "audio/berta_vysavac.mp3",
  "audio/berta_kondom.mp3",
  "audio/jake_ukol.mp3",
  "audio/evelyn_cigaretka.mp3",
  "audio/herb.mp3",
];

const randomAudio = () => {
  const index = Math.floor(Math.random() * audioUrls.length); // expected output: all items from an array ???
  const audioUrl = audioUrls[index]; 

  return audioUrl;
};

audioButton.addEventListener("click", () => {   //addeventlistener - zachytavani interakce, tzn. "click" = kliknuti
  audio.addEventListener("ended", () => { //tahle funkce (randomAudio) se spusti po kliknuti 
    const audioUrl = randomAudio(); 

    const temp = new Audio();

    temp.addEventListener("loadeddata", () => {   // 
      audio.src = audioUrl;
    });

    temp.src = audioUrl;
  });

  const audioUrl = randomAudio();

  audio.addEventListener("loadeddata", () => {
    audio.play();
  });

  audio.src = audioUrl;
});
