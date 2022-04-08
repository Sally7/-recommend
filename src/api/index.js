import request from "../server/index";


export function addSuggestions(data) {
  return request({
    url:"/whsuggestions/suggestions/add",
    method: "post",
    data
  })
}
export function suggestions(data) {
  return request({
    url:"/whsuggestions/suggestions/queryPage",
    method: "post",
    data
  })
}
