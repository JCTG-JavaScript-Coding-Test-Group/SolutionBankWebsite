export default function ErrorReport() {
  return (
    <div>
      <p>ErrorReportTab</p>
      <div>
        <span>오류 유형: </span>
        <input type="radio" id="errorCategory0" name="errorCategory" />
        <label htmlFor="errorCategory0">정답 통과가 안돼요</label>

        <input type="radio" id="errorCategory1" name="errorCategory" />
        <label htmlFor="errorCategory1">코드 복사가 안돼요</label>

        <input type="radio" id="errorCategory2" name="errorCategory" />
        <label htmlFor="errorCategory2">기타</label>
      </div>
      <div>
        <span>문제 이름:</span>
        <input list="questionName" name="question" />
        <datalist id="questionName">
          <option value="1번문제" />
          <option value="2번문제" />
          <option value="3번문제" />
        </datalist>
      </div>
      <div>
        <span>내용: </span>
        <textarea rows="20" cols="100"></textarea>
      </div>
      <div>
        <button id="submitBtn">제출</button>
      </div>
    </div>
  );
}
