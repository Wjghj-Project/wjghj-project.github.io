!(() => {
  fetch('siteList.json')
    .then(data => {
      return data.json()
    })
    .then(data => {
      const ul = document.createElement('ul')
      ul.classList.add('siteList')

      var addSite = ({ zhName, enName, url, logo }) => {
        let li = document.createElement('li')
        li.innerHTML = `
<a href="${url}" target="_blank">
  <div class="title">${zhName}</div>
  <div class="sub-title">${enName}</div>
</a>`
        ul.insertAdjacentElement('afterbegin', li)
      }

      data.forEach(addSite)

      document
        .getElementById('siteListContainer')
        .insertAdjacentElement('beforeend', ul)
    })
})()
