"use client";

import FormContainer from "./FormContainer";
import AdvisesContainer from "./AdvisesContainer";
import FeedBack from "./FeedBack";
import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import SelectBar from './SelectBar';

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
      apiKey: "",
    });
    const openai = new OpenAIApi(configuration);

    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: code + `대답할 양식은 다음과 같아. 
      "수정한 코드:[수정 및 보완한 코드]"+!!!!!(구분자)+"피드백:[피드백]" 형식으로 작성해줘. 수정한 코드와 피드백 사이에 구분자로 사용할 "!!!!!"를 넣어줘서 API를 받은 서버가 split하여 구분할 수 있도록 해줘`}],
    }).then(response => {
      const reviewCode = response.data.choices[0].message?.content.split("!!!!!")[0];
      const reviewAndFeedBack = response.data.choices[0].message?.content.split("!!!!!")[1];

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
      <SelectBar />
      <FormContainer codeHandler={codeHandler} />
      <AdvisesContainer code={gptCode} feedBack={feedBack}/>
      <FeedBack feedBack={feedBack}/>
    </div>
  );
}
