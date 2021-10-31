const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`${client.user.tag} 가동중~!!`);
});

client.on('message', msg => {
  if (msg.content === '?월요일 시간표') {
    msg.reply
    ('``` 월요일 시간표\n 1교시: 자료구조 \n 2교시: 디지털 논리 회로 \n 3교시: 디지털 논리 회로 \n 4교시: 디지털 논리 회로 \n 5교시: 영어 \n 6교시: 체육 ```');
  }
  if(msg.content === '?화요일 시간표'){
    msg.reply
    ('``` 화요일 시간표\n 1교시: 프로그래밍 \n 2교시: 프로그래밍 \n 3교시: 과학 \n 4교시: 과학 \n 5교시: 자료구조 \n 6교시: 자료구조 \n 7교시: 창업 ```');
  }
  if(msg.content === '?수요일 시간표'){
    msg.reply
    ('``` 수요일 시간표\n 1교시: 영어 \n 2교시: 국어 \n 3교시: 음악 \n 4교시: 수학 \n 5교시: 창체 \n 6교시: 창체 \n 7교시: 창체 ```');
  }
  if(msg.content === '?목요일 시간표'){
    msg.reply
    ('``` 목요일 시간표\n 1교시: 국어 \n 2교시: 수학 \n 3교시: 체육 \n 4교시: 영어 \n 5교시: 프로그래밍 \n 6교시: 프로그래밍 \n 7교시: 진로 ```');
  }
  if(msg.content === '?금요일 시간표'){
    msg.reply
    ('``` 금요일 시간표\n 1교시: 과학 \n 2교시: 창업 \n 3교시: 수학 \n 4교시: 음악 \n 5교시: 프로그래밍 \n 6교시: 프로그래밍 \n 7교시: 국어 ```');
  }
});

client.login('OTAzMjg4NTU1NzcyNzMxMzkz.YXqzBQ.XPIaioXQGL2JbpFDFkK2WoYSXgY');