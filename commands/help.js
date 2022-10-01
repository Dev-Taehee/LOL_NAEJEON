const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("도움말")
        .setDescription("롤내전 봇 기능을 설명드립니다."),
    async execute(interaction){
        const helpEmbed = new EmbedBuilder()
            .setTitle('롤내전 봇 도움말')
            .setDescription('롤내전 봇은 디스코드에서 롤 내전을 진행하시는 분들 위한 봇입니다.\n롤내전 봇에 대해 아래 기능들을 제공하고 있으며 /를 통해 기능을 이용하실 수 있습니다.')
            .addFields({name: '랜덤나누기', 
                        value: '랜덤나누기 기능은 음성채널에 참가하고 있는 멤버들을 랜덤하게 나누어 서로 다른 음성채널에 자동으로 들어가게 합니다.'})
            .addFields({name: '칼바람내전', value: '미구현 상태인 명령어입니다.'});
        return interaction.reply({embeds: [helpEmbed]});
    }
}
