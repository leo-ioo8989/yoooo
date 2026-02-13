/* Typing intro animation */
const lines = [
"From the moment I met you...",
"My life changed forever ❤️",
"Happy Valentine’s Day my love 🌹"
];

let l = 0, c = 0;
const typing = document.getElementById("typing");

function type(){
  if(c < lines[l].length){
    typing.innerHTML += lines[l][c++];
    setTimeout(type, 80);
  } else {
    setTimeout(() => {
      typing.innerHTML = "";
      c = 0;
      l = (l + 1) % lines.length;
      type();
    }, 1200);
  }
}
type();

/* Handwritten love letter text */
const message = `Esha ji dekho me kya keh raha ki I love you yawr i really love you so much ❤️
dekh pehle chutiyap kiye the maine uske liye sorry from bottom of my heart 
dekh ab jo pehle ho gya usko change toh me kar nahi sakta par uske liye 
jitna ho sake utna mafi mang sakta sorry and i wanna say ki ab aage aisa 
kuch nahi hoga sacchi aaage se aisi chutiyo jaisi harkatein na karunga na 
hi karne ki koshish karunga aisi harkatein so sorry na and 
i wanna ask ki will you be my valentine for this year and also for upcoming year 🌹`;

let i = 0;

function openLetter(){
  document.getElementById("letterBox").style.display = "block";
  handText.innerHTML = "";
  i = 0;
  writeLetter();
}

function writeLetter(){
  if(i < message.length){
    handText.innerHTML += message[i++];
    pulse();
    setTimeout(writeLetter, 70);
  }
}

function pulse(){
  const heart = document.getElementById("heart");
  heart.classList.remove("beat");
  void heart.offsetWidth;
  heart.classList.add("beat");
}

/* Proposal YES moment */
function sayYes(){
  document.getElementById("yesText").innerHTML = "She Said YES! 💍❤️";
}

/* OUR STORY TEXT */
const story = `On 14 Oct we met first time in Baba ki GC.

Hum ek dusre ko nahi jaante the — complete strangers.
GC call me pehli baar baat hui thi.
DM me baat bhi teri mindset ke liye ki thi, jo genuinely recommend hui thi.
Main stalk nahi kiya tha, bas normal baat hui thi.

Phir DM me baatein band ho gayi.

Uske baad humne Ludo khelna shuru kiya,
aur shart lagi ki jo haarega woh first text karega.
Dono ko first text karne me maut aati thi 😂

Phir Ludo se Roblox,
phir DM daily baatein,
DM se call,
call se WhatsApp,
WhatsApp se Insta.

Birthday wali raat bhi baat hui.

Pata hi nahi chala kab hum itne close ho gaye.
Kab baat karte karte tu pasand aane lagi.
Mid November bolta rehta tha,
par sach me pata nahi kab se tu dil me aa gayi.

Teri baatein,
teri voice,
sab kuch mujhe pasand hai.

December me propose karna tha,
website bhi banayi,
par mobile toot gaya aur source code delete ho gaya 💔

Bahut baar normally propose karna chaha,
par tujhe kho dene ka dar tha.

January me ladayi hui,
uske liye dil se sorry.
Aaj bhi regret hota hai.

22 January sab theek hua —
woh din ab tak ka best day hai ❤️

Is Valentine pe gift ke naam pe bas ye website de raha hoon,
par dil se banayi hai.

Aage kabhi chutiyap harkatein nahi karunga — promise.

Aur last me:
I love you dher saara — khatarnak wala 💋

Bas ek request:
jab bhi mujhse mann bhare,
cutoff se pehle bata dena.
Main overthinker hoon.

I love you always ❤️`;

let s = 0;

function openStory(){
  document.getElementById("storyBox").style.display = "block";
  storyText.innerHTML = "";
  s = 0;
  writeStory();
}

function writeStory(){
  if(s < story.length){
    storyText.innerHTML += story[s++];
    setTimeout(writeStory, 40);
  }
}