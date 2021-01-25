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
        ul.insertAdjacentElement('beforeend', li)
      }

      data.forEach(addSite)

      let container = document
        .getElementById('siteListContainer')
      container.innerHTML = ''
      container.insertAdjacentElement('beforeend', ul)
    })
})()
