!(() => {
  fetch('siteList.json')
    .then(data => {
      return data.json()
    })
    .then(data => {
      const list = document.createElement('ul')
      list.classList.add('siteList')

      var addSite = ({ zhName, enName, url, logo }) => {
        const link = document.createElement('a')
        link.href = url || '#'
        link.target = '_blank'
        link.innerHTML = `
      <li>
        <div class="title">${zhName}</div>
        <div class="sub-title">${enName}</div>
      </li>
      `
        list.insertAdjacentElement('afterbegin', link)
      }

      data.forEach(addSite)

      document
        .getElementById('siteListContainer')
        .insertAdjacentElement('afterbegin', list)
    })
})()
