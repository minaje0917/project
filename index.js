const axios = require("axios");

exports.handler = async (event) => {
    // TODO implement

    try{

        const dogResult = await axios.get("https://dog.ceo/api/breeds/image/random");

        dogResult.data.message


        const result = await axios.post("https://discord.com/api/webhooks/903869306264236063/doVFs8sl32NNWHVuDilpT1qScbVsNIVVXVC9bIuAqytOjGDOsvR6sEkyNY-rXVPsinNI",{
            "content":"여기 강아지 사진이야!!",
            "embeds": [{
                "image": {
                  "url": dogResult.data.message
                }
              }]
        });
        console.info("디스코드 웹훅 성공");
    }

    catch(err){
        console.err("웹훅 실패",err);
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};