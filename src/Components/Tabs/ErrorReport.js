import { useState } from "react";

export default function ErrorReport() {
  const [submitted, setSubmitted] = useState(false);
  const [errorCategory, setErrorCategory] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [detailInput, setDetailInput] = useState("");

  return submitted ? (
    <div>
      <p>제보해주셔서 감사합니다.</p>
      <button
        onClick={() => {
          setSubmitted(false);
          setErrorCategory("");
          setQuestionName("");
          setDetailInput("");
        }}
      >
        다른 오류 제보
      </button>
    </div>
  ) : (
    <div>
      <div>
        <span>오류 유형: </span>
        <input
          type="radio"
          id="error-wrongAnswer"
          name="errorCategory"
          onClick={(e) => setErrorCategory(e.target.id)}
        />
        <label htmlFor="error-wrongAnswer">정답 통과가 안돼요</label>
        <input
          type="radio"
          id="error-notCopied"
          name="errorCategory"
          onClick={(e) => setErrorCategory(e.target.id)}
        />
        <label htmlFor="error-notCopied">코드 복사가 안돼요</label>
        <input
          type="radio"
          id="error-other"
          name="errorCategory"
          onClick={(e) => setErrorCategory(e.target.id)}
        />
        <label htmlFor="error-other">기타</label>
      </div>

      {errorCategory === "" || errorCategory === "error-notCopied" ? null : (
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
      )}

      {errorCategory === "" ||
      (errorCategory === "error-wrongAnswer" && questionName === "") ? null : (
        <>
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
            <button
              id="submitBtn"
              disabled={errorCategory === "error-other" && detailInput === ""}
              onClick={() => setSubmitted(true)}
            >
              제출
            </button>
          </div>
        </>
      )}
    </div>
  );
}
