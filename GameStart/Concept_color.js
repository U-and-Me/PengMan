"use strict"

let Color_Lev1 = {
    아주색 : 'azure',
    베이지색 : 'beige',
    검정색 : 'black',
    갈색 : 'brown',
    코발트색 : 'cobalt',
    적갈색 : 'cooper',
    산호색 : 'coral',
    크림색 : 'cream',
    청록색 : 'cyan',
    금색 : 'gold',
    초록색 : 'green',
    인디고색 : 'indigo',
    상아색 : 'ivory',
    카키색 : 'khaki',
    레몬색 : 'lemon',
    라일락색 : 'lilac',
    모브색 : 'mauve',
    남색 : 'navy',
    황토색 : 'ocher',
    올리브색 : 'olive',
    주황색 : 'orange',
    핑크색 : 'pink',
    보라색 : 'purple',
    스칼렛색 : 'scarlet',
    은색 : 'sliver',
    아이보리색 : 'tan',
    버밀색 : 'vermeil',
    바이올렛색 : 'violet',
    흰색 : 'white',
    노란색 : 'yellow'
};

let Color_Lev2 = {
    살구색 : 'apricot',
    애쉬색 : 'ashcolor',
    브레시색 : 'brassytone',
    차콜색 : 'charcoal',
    코랄색 : 'coral',
    진홍색 : 'crimson',
    칙칙한회색 : 'dimgray',
    에메랄드색 : 'emerald',
    자홍색 : 'fuchsia',
    연한초록색 : 'grassygreen',
    그리즐색 : 'grizzle',
    핫핑크색 : 'hotpink',
    라벤더색 : 'lavender',
    진한주황색 : 'luteous',
    매더색 : 'madder',
    짙은분홍색 : 'magenta',
    고동색 : 'maroon',
    옅은자주색 : 'mauve',
    겨자색 : 'mustard',
    오크우드색 : 'oakwood',
    연보라색 : 'orchid',
    연두색 : 'peagreen',
    핑크빛 : 'pinkish',
    황실의파랑색 : 'royalblue',
    주황색 : 'salmon',
    바다조가비색 : 'seashell',
    하늘색 : 'skyblue',
    철강빛파랑색 : 'steelblue',
    엉겅퀴색 : 'thistle',
    윔톤 : 'warmcolour'
};

let Color_Lev3 = {
    버블껌색 : 'bubblegum',
    버건디색 : 'burgundy',
    나무색 : 'burlybrown',
    카네이션색 : 'carnation',
    연초록색 : 'chartreuse',
    체리페퍼색 : 'cherrypepper',
    민들레색 : 'dandelion',
    어두운누른빛에엷은다색 : 'darkkhaki',
    어두운바다녹색 : 'darkseagreen',
    탁한분홍색 : 'duskypink',
    가지색 : 'eggplant',
    에그셀색 : 'eggshellcolor',
    내화색 : 'firebrick',
    국화과의다년초색 : 'goldenrod',
    힐리오트롭색 : 'heliotrope',
    밝은초록색 : 'honeydew',
    라임녹색 : 'limegreen',
    마스브라운색 : 'marsbrown',
    짙은남색 : 'mazarine',
    박하크림색 : 'mintcream',
    밝은오렌지색 : 'peachpuff',
    파스텔보라색 : 'periwinkle',
    시안색 : 'seamfoam',
    어두운푸른빛회색 : 'slategray',
    밝은시안색 : 'spindrift',
    붉은색도는금색 : 'strawberry',
    귤색 : 'tengerine',
    푸른빛녹색 : 'turquoise',
    주홍색 : 'vermilion',
    옐로우쉬그린색 : 'yellowishgreen'
};

let cur_level = 1; // 현재 레벨
let list = ["", "", "", "", ""]; // 단어 배열
let wordCount = 0;

playGame();

function playGame(){
    // 레벨에 맞는 단어 5개 가져오기
    switch(cur_level){
        case 1 : bringWords(Color_Lev1); break;
        case 2 : bringWords(Color_Lev2); break;
        case 3 : bringWords(Color_Lev3); break;
    }
    // 5번 반복
   /* while(wordCount < list.length){
        // 첫번째 단어 잘라서 배열에 넣기
        let Arr_word = [];
        Arr_word = list[wordCount].toLowerCase().split('');
        // 단어 순서대로 화면에 밑줄 긋기

        
        // 그림이 완성되기 전에 맞추면 다음 단어 / 완성되면 게임 종료
        // 기회 : 1 - 3번 2 - 5번 3 - 6번
    }*/

}

function bringWords(wordLists){
    let mapL = new Map(Object.entries(wordLists)); //  맵 변환
    let CName = new Array();
    let wordLength = 0;

    for(let key of mapL.keys()){
        CName.push(key); // 키 값 배열에 넣기
        wordLength++;
    }

    for(let i = 0; i < 5; i++){
        let index = Math.floor(Math.random() * wordLength);
        let name = CName[index];
        for(let j = 0; j < i; j++){ // 중복 제거
            if(list[j] === name) i--;
            break;
        }
        list[i] = mapL.get(name);
    }
}

// 입력받아서 맞으면 알파벳 추가 / 틀리면 그림 추가
function checkAlpha(clicked_id){
    let alpha = document.getElementById(clicked_id);
    //alert(alpha);
}