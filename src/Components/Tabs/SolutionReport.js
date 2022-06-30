import { useState } from "react";

export default function SolutionReport() {
  const [submitted, setSubmitted] = useState(false);
  const [questionName, setQuestionName] = useState("");
  const [detailInput, setDetailInput] = useState("");

  return submitted ? (
    <div>
      <p>제보해주셔서 감사합니다.</p>
      <button
        onClick={() => {
          setSubmitted(false);
          setQuestionName("");
          setDetailInput("");
        }}
      >
        다른 정답 제보
      </button>
    </div>
  ) : (
    <div>
      <div>
        <span>문제 이름:</span>
        <input
          list="questionName"
          name="question"
          onInput={(e) => setQuestionName(e.target.value)}
          defaultValue={questionName}
        />
        <datalist id="questionName">
          <option value="1번문제" />
          <option value="2번문제" />
          <option value="3번문제" />
        </datalist>
      </div>

      {questionName === "" ? null : (
        <>
          <div className="gitHubLogin">
            <span>기여자 등록: </span>
            <button id="gitHubLoginBtn">GitHub 로그인</button>
          </div>
          <div>
            <span>내용: </span>
            <textarea
              rows="20"
              cols="100"
              onInput={(e) => setDetailInput(e.target.value)}
              defaultValue={detailInput}
            ></textarea>
          </div>
          <div>
            <button id="submitBtn" disabled={detailInput === ""} onClick={() => setSubmitted(true)}>
              제출
            </button>
          </div>
        </>
      )}
    </div>
  );
}
