"use client";

import FormContainer from "./FormContainer";
import AdvisesContainer from "./AdvisesContainer";
import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import SelectBar from './SelectBar';

export default function Containers() {
  const [code, setCode] = useState("");
  
  const codeHandler = (submitCode : string) => {
    setCode(submitCode);
    answerResponse(submitCode);
  };

  //OpenAI API 선언 및 호출 부분
  const configuration = new Configuration({
    organization: "org-kPK4gvboaN3yb7QIlW7s8Dd9",
    apiKey: "",
  });
  const openai = new OpenAIApi(configuration);

  const answerResponse = async (code : string) => {
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: code+`대답할 양식은 다음과 같아. "코드:" 다음에 이 코드를 보완 및 수정한 코드를 전체적으로 한 번만 보여줘.  그리고 "피드백 및 리뷰:" 다음에 피드백과 리뷰를 말해줘.` }],
      });
  
      console.log(completion.data.choices[0].message);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container">
      <SelectBar />
      <FormContainer codeHandler={codeHandler} />
      <AdvisesContainer code={code} />
    </div>
  );
}
