const { SlashCommandBuilder, ChannelType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("랜덤나누기")
        .setDescription("음성 채널에 속한 멤버들을 랜덤하게 나누어 음성채널에 입장시킵니다.")
        .addChannelOption((option)=>option.setName("본채널").setDescription("내전에 참가하고자하는 사람들이 모인 채널을 선택해주세요.").setRequired(true).addChannelTypes(ChannelType.GuildVoice))
        .addChannelOption((option)=>option.setName("1팀채널").setDescription("1팀이 들어갈 채널을 선택해주세요.").setRequired(true).addChannelTypes(ChannelType.GuildVoice))
        .addChannelOption((option)=>option.setName("2팀채널").setDescription("2팀이 들어갈 채널을 선택해주세요").setRequired(true).addChannelTypes(ChannelType.GuildVoice)),
    async execute(interaction){
        const mainVoiceChannel = interaction.options.getChannel("본채널");
        const team1VoiceChannel = interaction.options.getChannel("1팀채널");
        const team2VoiceChannel = interaction.options.getChannel("2팀채널");

        const totalNum = mainVoiceChannel.members.size;
        const hostChannel = interaction.channel;

        // await에 대해 공부하면 해답을 찾을 수도 있음 일단은 넘긴다.
        // for(var key in members){
        //    await members[key].voice.setChannel(team1VoiceChannel);
        // }

        if(totalNum>10){
            return interaction.reply("음성 채널의 인원이 10명을 초과하였습니다.\n10명 이하의 인원이 참가하여야합니다.");
        }
        if(totalNum===0 || totalNum==1){
            return interaction.reply('2명 이상의 인원이 본채널에 있어야합니다.');
        }

        const memberList = [];
        const members = mainVoiceChannel.members;

        await members.forEach((member) => {
            memberList.push(member.displayName);
        });

        const [team1MemberList, team2MemberList] = await splitMember(memberList);

        const embed = new EmbedBuilder()
            .setTitle('팀 세팅 완료')
            .addFields(
                {name:'Team1', value: team1MemberList.join("\n"), inline: true},
                {name: 'Team2', value: team2MemberList.join('\n'), inline: true}
            );

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("진행")
                    .setLabel('채널옮기기')
                    .setStyle('Success')
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("거절")
                    .setLabel('그냥할래요')
                    .setStyle('Danger')
            )

        await interaction.reply({embeds: [embed], components: [row]});

        const filter = i => i.user.id === interaction.member.id;
        const collector = interaction.channel.createMessageComponentCollector({filter, time:15000});

        collector.on('collect', async (collection) => {
            if (collection.customId === '진행'){
                await members.forEach((member) => {
                    if(team1MemberList.includes(member.displayName)){
                        member.voice.setChannel(team1VoiceChannel);
                    }else{
                        member.voice.setChannel(team2VoiceChannel);
                    }
                })
                await row.components.forEach((component) => {component.setDisabled(true)});
                collection.update({components: [row]});
                hostChannel.send('게임을 시작합니다!!')
                collector.stop();
            }else if (collection.customId === '거절'){
                await row.components.forEach((component) => {component.setDisabled(true)});
                collection.update({components: [row]});
                hostChannel.send('음성 채널 세팅을 진행하지 않습니다.\n게임을 시작합니다!!');
                collector.stop();
            }
        });

        collector.on('end', async ( collected ) => {
            if(collected.size===0){
                await row.components.forEach((component) => {component.setDisabled(true)});
                await interaction.editReply({embeds: [embed], components: [row]});
                hostChannel.send('입력시간초과');
            }else{
                console.log('잘 작동되었음')
            }
        });
    }
}

async function splitMember(memberList){
    const team1MemberList = [];

    memberList = await shuffle(memberList);
    let totalMemberNum = memberList.length;
    for(let i=0; i<parseInt(totalMemberNum/2); i++){
        team1MemberList.push(memberList.pop());
    }
    return [team1MemberList, memberList];
}


// Fisher-Yates Shuffle 이라는 방법이라고 한다.
async function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
      // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
      const randomPosition = Math.floor(Math.random() * (index + 1));
  
      // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
      const temporary = array[index];
      array[index] = array[randomPosition];
      array[randomPosition] = temporary;
    }
    return array;
}