"use client";

import FormContainer from "./FormContainer";
import AdvisesContainer from "./AdvisesContainer";
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

  const reviewCodeHandler = (reviewCode: string) => {

  }

  //OpenAI API 선언 및 호출 부분

  const answerResponse = async (code: string) => {

    const configuration = new Configuration({
      organization: "org-kPK4gvboaN3yb7QIlW7s8Dd9",
      apiKey: "",
    });
    const openai = new OpenAIApi(configuration);

    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: code + `대답할 양식은 다음과 같아. "코드:[수정 및 보완한 코드]" 가운데에 코드랑 피드백을 구분해줄 "!!!!!" 문자 넣어주고, "피드백:[피드백 및 리뷰]"` }],
    }).then(response => {
      const reviewCode = response.data.choices[0].message?.content.split("!!!!!")[0];
      const reviewAndFeedBack = response.data.choices[0].message?.content.split("!!!!!")[1];

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
    </div>
  );
}
