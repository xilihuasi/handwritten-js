function getJSON(url, options = {}) {
  const method = options.method || 'GET'
  const headers = options.headers || { 'Content-Type': 'application/json' }
  const body = options.body
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, false);
    for (const key in headers) {
      if (Object.prototype.hasOwnProperty.call(headers, key)) {
        xhr.setRequestHeader(key, headers[key])
      }
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText))
      }
    }
    xhr.send(body);
  })
}