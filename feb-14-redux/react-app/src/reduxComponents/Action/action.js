export function actionStore(data) {
  return {
    type: "todo/todoadd",
    payload: data,
  };
}
export function actionproduct(data) {
  return {
    type: "product",
    payload: data,
  };
}

export function actionGroup(data) {
  return {
    type: "group",
    payload: data,
  };
}

export function userDelete(data) {
  return {
    type: "userdelete",
    payload: data,
  };
}

export function productDelete(data) {
  return {
    type: "productdelete",
    payload: data,
  };
}

export function groupDelete(data) {
  return {
    type: "groupdelete",
    payload: data,
  };
}
