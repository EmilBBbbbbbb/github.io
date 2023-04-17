let coordinates = [];
let box =128;

while (coordinates.length < 15) {
  let randomNumber = [(Math.floor(Math.random() * 4) + 1), (Math.floor(Math.random() * 4) + 1)];
  let pair = [randomNumber[0]*box+8, randomNumber[1]*box+8];
  if (!coordinates.some(coord => coord[0] === pair[0] && coord[1] === pair[1])) {
    coordinates.push(pair);
  }
}

function coord(n,el,top,left){
  let count1=0;
  let count2=0;
  let count3=0;
  let count4=0;
  for(let i=0;i<15;i++){
    if ((coordinates[i][1]== coordinates[n][1]+128)&&coordinates[i][0]== coordinates[n][0]||coordinates[n][1]+128>=648) {
      count1++;
    }
  }
  for(let i=0;i<15;i++){
    if ((coordinates[i][1]== coordinates[n][1]-128)&&coordinates[i][0]== coordinates[n][0]||coordinates[n][1]-128<=8){
      count2++;
    }
  }
  for(let i=0;i<15;i++){
    if ((coordinates[i][0]== coordinates[n][0]+128)&&coordinates[i][1]== coordinates[n][1]||coordinates[n][0]+128>=648) {
      count3++;
    }
  }
  for(let i=0;i<15;i++){
    if ((coordinates[i][0]== coordinates[n][0]-128)&&coordinates[i][1]== coordinates[n][1]||coordinates[n][0]-128<=8) {
      count4++;
    }
  }
  if(count1==0){
    el.style.setProperty(top,coordinates[n][1]+128+"px");
    coordinates[n][1]=coordinates[n][1]+128;
  }
  if(count2==0){
    el.style.setProperty(top,coordinates[n][1]-128+"px");
    coordinates[n][1]=coordinates[n][1]-128;
  }
  if(count3==0){
    el.style.setProperty(left,coordinates[n][0]+128+"px");
    coordinates[n][0]=coordinates[n][0]+128;
  }
  if(count4==0){
    el.style.setProperty(left,coordinates[n][0]-128+"px");
    coordinates[n][0]=coordinates[n][0]-128;
  }

}

const el1 = document.querySelector('.element1');

el1.style.setProperty("--left1", coordinates[0][0]+"px");
el1.style.setProperty("--top1", coordinates[0][1]+"px");

el1.addEventListener('click', () => {
  coord(0,el1,"--top1","--left1");
})

const el2 = document.querySelector('.element2')

el2.style.setProperty("--left2", coordinates[1][0]+"px");
el2.style.setProperty("--top2", coordinates[1][1]+"px");

el2.addEventListener('click', () => {
  coord(1,el2,"--top2","--left2");
})

const el3 = document.querySelector('.element3')

el3.style.setProperty("--left3", coordinates[2][0]+"px");
el3.style.setProperty("--top3", coordinates[2][1]+"px");

el3.addEventListener('click', () => {
  coord(2,el3,"--top3","--left3");
})

const el4 = document.querySelector('.element4')

el4.style.setProperty("--left4", coordinates[3][0]+"px");
el4.style.setProperty("--top4", coordinates[3][1]+"px");

el4.addEventListener('click', () => {
  coord(3,el4,"--top4","--left4");
})

const el5 = document.querySelector('.element5')

el5.style.setProperty("--left5", coordinates[4][0]+"px");
el5.style.setProperty("--top5", coordinates[4][1]+"px");

el5.addEventListener('click', () => {
  coord(4,el5,"--top5","--left5");
})

const el6 = document.querySelector('.element6')

el6.style.setProperty("--left6", coordinates[5][0]+"px");
el6.style.setProperty("--top6", coordinates[5][1]+"px");

el6.addEventListener('click', () => {
  coord(5,el6,"--top6","--left6");
})

const el7 = document.querySelector('.element7')

el7.style.setProperty("--left7", coordinates[6][0]+"px");
el7.style.setProperty("--top7", coordinates[6][1]+"px");

el7.addEventListener('click', () => {
  coord(6,el7,"--top7","--left7");
})

const el8 = document.querySelector('.element8')

el8.style.setProperty("--left8", coordinates[7][0]+"px");
el8.style.setProperty("--top8", coordinates[7][1]+"px");

el8.addEventListener('click', () => {
  coord(7,el8,"--top8","--left8");
})

const el9 = document.querySelector('.element9')

el9.style.setProperty("--left9", coordinates[8][0]+"px");
el9.style.setProperty("--top9", coordinates[8][1]+"px");

el9.addEventListener('click', () => {
  coord(8,el9,"--top9","--left9");
})

const el10 = document.querySelector('.element10')

el10.style.setProperty("--left10", coordinates[9][0]+"px");
el10.style.setProperty("--top10", coordinates[9][1]+"px");

el10.addEventListener('click', () => {
  coord(9,el10,"--top10","--left10");
})

const el11 = document.querySelector('.element11')

el11.style.setProperty("--left11", coordinates[10][0]+"px");
el11.style.setProperty("--top11", coordinates[10][1]+"px");

el11.addEventListener('click', () => {
  coord(10,el11,"--top11","--left11");
})

const el12 = document.querySelector('.element12')

el12.style.setProperty("--left12", coordinates[11][0]+"px");
el12.style.setProperty("--top12", coordinates[11][1]+"px");

el12.addEventListener('click', () => {
  coord(11,el12,"--top12","--left12");
})

const el13 = document.querySelector('.element13')

el13.style.setProperty("--left13", coordinates[12][0]+"px");
el13.style.setProperty("--top13", coordinates[12][1]+"px");

el13.addEventListener('click', () => {
  coord(12,el13,"--top13","--left13");
})

const el14 = document.querySelector('.element14')

el14.style.setProperty("--left14", coordinates[13][0]+"px");
el14.style.setProperty("--top14", coordinates[13][1]+"px");

el14.addEventListener('click', () => {
  coord(13,el14,"--top14","--left14");
})

const el15 = document.querySelector('.element15')

el15.style.setProperty("--left15", coordinates[14][0]+"px");
el15.style.setProperty("--top15", coordinates[14][1]+"px");

el15.addEventListener('click', () => {
  coord(14,el15,"--top15","--left15");
})

const canvas=document.getElementById("game");
const ctx =canvas.getContext("2d");
const ground = new Image();
ground.src="img/ground.png";

function drawGame(){
  ctx.drawImage(ground,0,0);
}

let game = setInterval(drawGame, 100);
