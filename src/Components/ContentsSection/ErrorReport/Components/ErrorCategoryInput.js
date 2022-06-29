export default function ErrorCategoryInput() {
  return (
    <div className="errorCategoryinput">
      <span>오류 유형: </span>
      <input type="radio" id="errorCategory0" name="errorCategory" value="email" />
      <label htmlFor="errorCategory0">정답 통과가 안돼요</label>

      <input type="radio" id="errorCategory1" name="errorCategory" value="phone" />
      <label htmlFor="errorCategory1">코드 복사가 안돼요</label>

      <input type="radio" id="errorCategory2" name="errorCategory" value="mail" />
      <label htmlFor="errorCategory2">기타</label>
    </div>
  );
}
