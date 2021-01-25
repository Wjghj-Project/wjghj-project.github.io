!(() => {
  // Util
  var makeList = data => {
    const ul = document.createElement('ul')
    ul.classList.add('siteList')

    var addSite = ({
      zhName,
      enName,
      url,
      logo = 'https://www.wjghj.cn/public/icons/wiki.svg',
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

    return ul
  }

  // Wjghj Site
  fetch('data/siteList.json')
    .then(data => {
      return data.json()
    })
    .then(data => {
      let container = document.getElementById('siteListContainer')
      let list = makeList(data)
      list.classList.add('wjghj-sites')
      container.innerHTML = ''
      container.insertAdjacentElement('beforeend', list)
    })

  // Firend Site
  fetch('data/friendList.json')
    .then(data => {
      return data.json()
    })
    .then(data => {
      let container = document.getElementById('friendListContainer')
      let list = makeList(data)
      list.classList.add('friend-sites')
      container.innerHTML = ''
      container.insertAdjacentElement('beforeend', list)
    })
})()
