import request from "../request";
export function sendMsg(obj) {
  return request.post("/manager/resume", obj);
}
export function sendImg(obj) {
  return request.post("/multipleImageUpload", obj);
}
