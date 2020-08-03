import request from "../request";
export function sendMsg(obj) {
  return request.post("/manager/resume_hq", obj);
}
export function sendImg(obj) {
  return request.post("/multipleImageUpload", obj);
}
