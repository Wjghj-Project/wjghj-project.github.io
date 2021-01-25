!(() => {
  fetch('siteList.json')
    .then(data => {
      return data.json()
    })
    .then(data => {
      const ul = document.createElement('ul')
      ul.classList.add('siteList')

      var addSite = ({
        zhName,
        enName,
        url,
        logo = 'https://www.wjghj.cn/public/icons/wiki-wordmark.svg',
      }) => {
        let li = document.createElement('li')
        li.innerHTML = `
<a href="${url}" target="_blank">
  <img src="${logo}" class="logo" alt="Site Logo">
  <div class="title">${zhName}</div>
  <div class="sub-title">${enName}</div>
</a>`
        ul.insertAdjacentElement('beforeend', li)
      }

      data.forEach(addSite)

      let container = document.getElementById('siteListContainer')
      container.innerHTML = ''
      container.insertAdjacentElement('beforeend', ul)
    })
})()
