"use client";

import FormContainer from "./FormContainer";
import AdvisesContainer from "./AdvisesContainer";
import FeedBack from "./FeedBack";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

export default function Containers() {
  const [code, setCode] = useState("");
  const [gptCode, setGPTCode] = useState("");
  const [feedBack, setFeedBack] = useState("");

  const codeHandler = (submitCode: string) => {
    setCode(submitCode);
    console.log("submitted your code : " + submitCode);
    answerResponse(submitCode);
  };

  //OpenAI API 선언 및 호출 부분

  const answerResponse = async (code: string) => {

    const configuration = new Configuration({
      organization: "org-kPK4gvboaN3yb7QIlW7s8Dd9",
      apiKey: process.env.NEXT_PUBLIC_APIKEY,
    });
    const openai = new OpenAIApi(configuration);

    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: code + `대답할 양식과 주의사항은 다음과 같아. 
      1. "수정한 코드:[수정 및 보완한 코드]" "피드백:[피드백]" 형식으로 작성해주고, 코드를 감싸는 백틱을 없애줘. `}],
    }).then(response => {
      const reviewCode = response.data.choices[0].message?.content.split("피드백:")[0];
      const reviewAndFeedBack = response.data.choices[0].message?.content.split("피드백:")[1];

      console.log(response.data.choices[0].message?.content);
      setGPTCode(reviewCode);
      setFeedBack(reviewAndFeedBack);

      console.log(reviewCode);
      console.log(reviewAndFeedBack);
    }).catch(error => {
      console.log("error occured while processing api data.");
    })

  }

  return (
    <div className="container">
      <FormContainer codeHandler={codeHandler} />
      <AdvisesContainer code={gptCode}/>
      <FeedBack feedBack={feedBack}/>
    </div>
  );
}
