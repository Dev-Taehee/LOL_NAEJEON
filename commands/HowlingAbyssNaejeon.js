const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("칼바람내전")
        .setDescription("칼바람 내전에서 주사위 기능을 대신합니다.")
        .addChannelOption((option)=>option.setName("1팀채널").setDescription("1팀이 속한 채널을 선택해주세요").setRequired(true).addChannelTypes(ChannelType.GuildVoice))
        .addChannelOption((option)=>option.setName("2팀채널").setDescription("2팀이 속한 채널을 선택해주세요").setRequired(true).addChannelTypes(ChannelType.GuildVoice)),
    async execute(interaction){
        const team1_name = interaction.options.getChannel("1팀채널");
        console.log(team1_name.members.size);
        return interaction.reply(`미완성된 명령어입니다.`);
    }
}
