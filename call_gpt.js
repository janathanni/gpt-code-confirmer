const reviewGPT = (code) => {
  if (code.length >= 1000) {
    return "error";
  } else if (code.length <= 2) {
    return "error";
  }
  console.log(code);
  const response = callGPT(code);
  return response;
};

const callGPT = (code) => {
  const prompt =
    code +
    "이 코드를 보완하거나 수정한 코드는 전체적으로 한 번만 보여줘.  그리고 그에 대한 피드백 및 리뷰를 해줘.";
  const xhr = new XMLHttpRequest();
  const url = "https://api.openai.com/v1/engine/davinci-codex/completions";
  const apiKey = "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"; // 여기에 본인의 API 키를 입력하세요.
  const data = JSON.stringify({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ['"""'],
  });

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", `Bearer ${apiKey}`);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response.choices[0].text);
      } else {
        console.log("Error:", xhr.statusText);
      }
    }
  };
  xhr.send(data);
  const response = JSON.parse(xhr.responseText);
  return response.choices[0].text;
};
