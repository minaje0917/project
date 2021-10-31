const Discord = require('discord.js');
const client = new Discord.Client();
const quiz = require("./quiz.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('!기능 소개를 입력해줘', { type: 'WATCHING' })
});

const Emoji = (who) =>
{
  if(who==="!앞면"){
    return"📀";
  }
  else if(who==="!뒷면"){
    return"💿";
  }
}
const convertEmoji = (who) =>
{
  if(who==="!가위"){
    return "✌";
  }
  else if(who==="!바위"){
    return "✊";
  }
  else if(who ==="!보"){
    return "✋";
  }
}

client.on('message', msg => {
  if (msg.content === '!야') {
    msg.reply('뭐!');
  }
  if (msg.content === '!안녕') {
    msg.reply('안눙~!');
  }
  if(msg.content ==='!기능 소개')
  {
    const embed =  new Discord.MessageEmbed()
    .setAuthor("민재가 심심해서 만든 것","https://upload.wikimedia.org/wikipedia/ko/c/cd/Doraemon.PNG")
    .setTitle("기능소개(클릭 시 인스타로 이동)")
    .setURL("https://www.instagram.com/min._.jae__05/")
    .setColor(0xFFB2F5)
    .setDescription("안녕?? 민재가 심심해서 만든 것이야. 내 기능들을 소개 해줄게")
    .setThumbnail("https://upload.wikimedia.org/wikipedia/ko/c/cd/Doraemon.PNG")
    .addField("기능1-1", "!야 라고 말 해보세요!", true)
    .addField("기능1-2", "!안녕 이라고 말해보세요!!", true)
    .addField("기능2","!가위, !바위, !보 중 하나를 입력해보세요!!(가위바위보 기능)")
    .addField("기능3","!퀴즈를 입력해보세요!! (퀴즈 맞추기 게임)")
    .addField("기능4","!앞면, !뒷면 중 하나를 입력해보세요!!(동전 던지기 게임)")
    .setImage("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20111221_280%2Fkkdrb_1324440668836JYkQd_JPEG%2Ftumblr_com_20111221_120339.jpg&type=sc960_832")
    .setTimestamp(new Date())
    .setFooter("여기까지~")
    msg.channel.send(embed);
  }
  if(msg.author.bot) return;
  if(msg.author.id===client.user.id) return;


  if(msg.content==="!퀴즈")
  {  

    const item = quiz[Math.floor(Math.random()*quiz.length)];
    const limit = 5;

    const filter = (response)=>{
      return item.answer.some((answer)=> answer ===  response.content);
    }

    msg.channel.send(`${item.question}(제한 시간:${limit}초)`)
    .then(()=>{
      msg.channel.awaitMessages(filter,{max: 1,time: limit*1000})
      .then((collected)=>{
        msg.channel.send(`${collected.first().author}👈 정답입니다!`);
      })
      .catch((err)=>{
        msg.channel.send("제한 시간이 지났어요.😭")
      })

    })
  }
  if(msg.content.substring(0,3) === "!투표")
  {
    const description = msg.content.substring(3);

    const embed = new Discord.MessageEmbed()
    .setTitle("👇 투표 해주세요! 👇")
    .setDescription(description)
    .setColor("RED");

    msg.channel.send(embed)
    .then((msg)=>{
      msg.react("👍")
      msg.react("👎")
    });
  }
  if (msg.content ==='!앞면'|| msg.content === '!뒷면')
  {
    const human = msg.content;
    const list = ['!앞면','!뒷면','!낙'];
    const random = Math.floor(Math.random() * 3);
    const bot = list[random];
    let winner="";

    if (human==bot)
    {
      msg.reply(`
사람 : ${Emoji(human)} vs 봇 : ${Emoji(bot)}   
오!!  맞췄어🥳  한판 더 하자!`)
    }
    else if (bot=="!낙")
    {
      msg.reply("아.... 미안.. 동전을 못 잡았어....ㅠㅠ😭😭");
    }
    else
    {
      msg.reply(`
사람 : ${Emoji(human)} vs 봇 : ${Emoji(bot)}
아쉽다...ㅠㅠ🥺  못 맞췄어`)
    }
  }
  if (msg.content ==='!가위'|| msg.content ==='!바위'|| msg.content==='!보')
  {
    const human = msg.content;
    const list = ["!가위", "!바위", "!보"];
    const random = Math.floor(Math.random() * 3);
    const bot =list[random];
    let winner="";

    if (human===bot)
    {
      winner="비김";
    }
    else {
      human ==="!가위" ? (winner=bot==="!바위" ? "봇" : "인간" ):"";
      human ==="!바위" ? (winner=bot==="!보" ? "봇" : "인간" ):"";
      human ==="!보" ? (winner=bot==="!가위" ? "봇" : "인간" ):"";
    }
    const result = 
`
사람 : ${convertEmoji(human)} vs 봇 : ${convertEmoji(bot)}
${winner==="비김" ? "비겼네? 한판 더 하자." : winner + "의 승리야"}
`

    msg.reply(result);
  }

});

client.login('ODYxOTI1MjYzNTUwMTg1NTMz.YOQ4dA.KI08iDdQ_ZqsyIUTvtD09WQlZHg');
