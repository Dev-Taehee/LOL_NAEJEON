const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("랜덤라인챔프")
        .setDescription("라인별 랜덤 챔피언을 반환합니다.")
        .addStringOption((option)=>option.setName("라인")
                                        .setDescription("라인을 고르세요.")
                                        .setRequired(true)
                                        .addChoices(
                                            {name: "탑", value: "top"},
                                            {name: "정글", value: "jungle"},
                                            {name: "미드", value: "mid"},
                                            {name: "원딜", value: "ad"},
                                            {name: "서폿", value: "support"}
                                        )),
    async execute(interaction){
        const line = interaction.options.getString("라인");
        if(line === "top") {
            interaction.reply(top_champ[Math.floor(Math.random()*top_champ.length)]);
        } else if (line === "jungle") {
            interaction.reply(jungle_champ[Math.floor(Math.random()*jungle_champ.length)]);
        } else if (line === "mid") {
            interaction.reply(mid_champ[Math.floor(Math.random()*mid_champ.length)]);
        } else if (line === "ad") {
            interaction.reply(ad_champ[Math.floor(Math.random()*ad_champ.length)]);
        } else if (line === "support") {
            interaction.reply(support_champ[Math.floor(Math.random()*support_champ.length)]);
        } else {
            interaction.reply("옵션 중 하나를 선택해주세요");
        }
    }
}

const top_champ = ["나피리", "레넥톤", "뽀삐", "다리우스", "럼블",
                    "일라오이", "카밀", "마오카이", "피오라", "말파이트",
                    "아트록스", "올라프", "카시오페아", "세트", "렝가",
                    "신지드", "케일", "잭스", "갱플랭크", "제이스",
                    "나서스", "클레드", "자크", "퀸", "요네",
                    "볼리베어", "오른", "이렐리아", "리븐", "우르곳",
                    "가렌", "판테온", "하이머딩거", "그웬", "나르", 
                    "아크샨", "요릭", "제드", "워윅", "사이온",
                    "쉔", "크산테", "야스오", "문도 박사", "케넨",
                    "블라디미르", "모데카이저", "트런들", "베인", "탐 켄치",
                    "트린다미어", "라이즈", "티모", "쉬바나", "초가스",
                    "그라가스", "사일러스", "오공", "아칼리"];

const jungle_champ = ["렉사이", "니달리", "카직스", "샤코", "그레이브즈",
                        "이블린", "카서스", "피들스틱", "뽀삐", "리 신",
                        "자르반 4세", "탈리야", "킨드레드", "엘리스", "마오카이",
                        "비에고", "케인", "누누와 윌럼프", "사일러스", "아이번",
                        "녹턴", "자크", "그라가스", "릴리아", "벨베스",
                        "에코", "다이애나", "마스터 이", "람머스", "쉬바나",
                        "워윅", "세주아니", "탈론", "신 짜오", "렝가",
                        "헤카림", "우디르", "트런들", "아무무", "나피리",
                        "럼블", "바이", "오공"];

const mid_champ = ["나피리", "제드", "니코", "르블랑", "키아나",
                    "아크샨", "탈론", "제라스", "럼블", "요네",
                    "카시오페아", "리산드라", "스웨인", "레넥톤", "애니비아",
                    "아리", "아우렐리온 솔", "말파이트", "조이", "피즈",
                    "카타리나", "빅토르", "야스오", "오리아나", "갱플랭크",
                    "신드라", "트리스타나", "사일러스", "제이스", "탈리야",
                    "트위스티드 페이트", "신지드", "이렐리아", "아칼리", "아지르", 
                    "다이애나", "판테온", "벡스", "럭스", "말자하",
                    "갈리오", "에코", "카사딘", "애니", "블라디미르", 
                    "베이가", "세트", "초가스", "라이즈", "케넨", 
                    "그라가스", "누누와 윌럼프", "직스", "크산테", "코르키"];

const ad_champ = ["이즈리얼", "스웨인", "애쉬", "카이사", "자야", 
                    "닐라", "시비르", "사미라", "미스 포츈", "베인",
                    "직스", "진", "바루스", "드레이븐", "트리스타나",
                    "루시안", "트위치", "제리", "코그모", "아펠리오스", 
                    "케이틀린", "징크스", "칼리스타"];

const support_champ = ["라칸", "렐", "블리츠크랭크", "제라스", "알리스타",
                        "노틸러스", "자이라", "파이크", "쓰레쉬", "샤코", 
                        "레오나", "니코", "브라움", "하이머딩거", "바드",
                        "소라카", "질리언", "럭스", "마오카이", "세나", 
                        "자크", "카르마", "피들스틱", "뽀삐", "잔나",
                        "아무무", "타릭", "스웨인", "세라핀", "벨코즈",
                        "모르가나", "트위치", "유미", "벨베스", "브랜드", 
                        "소나", "룰루", "판테온", "나미", "레나타 글라스크", 
                        "밀리오", "그라가스", "세트", "미스 포츈"];