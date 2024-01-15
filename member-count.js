module.exports = (client) => {
  const channelId1 = '825762166991880192' // all members
  const channelId2 = '825735835608809484' // members
  const channelId3 = '825791672515952650'// bots
  const channelId4 = '825793247251136573' // online
  const channelId5 = '825794099943964703' // idle
  const channelId6 = '825794146584231997' // dnd
  const comradeID = '825410341289984052'
  const guild = client.guilds.cache.get('555680346566557696')

  const updateMembers1 = (guild) => {
    const channel1 = guild.channels.cache.get(channelId1)
    channel1.setName(`All Members: ${guild.memberCount.toLocaleString()}`)
    console.log(`All Members: ${guild.memberCount.toLocaleString()}`)
  }

  client.on('guildMemberAdd', (member) => updateMembers1(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers1(member.guild))


  const updateMembers2 = (guild) => {
    const comradeCount = client.guilds.cache.get('555680346566557696').roles.cache.get('825410341289984052').members.size
    const channel2 = guild.channels.cache.get(channelId2)
    channel2.setName(`Members: ${comradeCount}`)
    console.log(`Members: ${comradeCount}`)
  }

  client.on('guildMemberAdd', (member) => updateMembers2(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers2(member.guild))

  const updateBots = (guild) => {
    const botCount = guild.members.cache.filter(member => member.user.bot).size;
    const channel3 = guild.channels.cache.get(channelId3)
    channel3.setName(`Bots: ${botCount}`)
    console.log(`Bots: ${botCount}`)
  }

  const onlineCount = (guild) => {
    const online = guild.members.cache.filter(member => member.presence.status === 'online').size;
    const channel4 = guild.channels.cache.get(channelId4)
    channel4.setName(`Online: ${online}`)
    console.log(`Online: ${online}`)
  }

  const idleCount = (guild) => {
    const idle = guild.members.cache.filter(member => member.presence.status === 'idle').size;
    const channel5 = guild.channels.cache.get(channelId5)
    channel5.setName(`Idle: ${idle}`)
    console.log(`Idle: ${idle}`)
  }

  const dndCount = (guild) => {
    const dnd = guild.members.cache.filter(member => member.presence.status === 'dnd').size;
    const channel6 = guild.channels.cache.get(channelId6)
    channel6.setName(`DnD: ${dnd}`)
    console.log(`DnD: ${dnd}`)
  }

  setInterval(function () {
    guild.members.fetch(guild)

    updateMembers1(guild)
    updateMembers2(guild)
    updateBots(guild)
    onlineCount(guild)
    idleCount(guild)
    dndCount(guild)
  }, 300000);
}
