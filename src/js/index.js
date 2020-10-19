const theme = window.localStorage.getItem('theme')
if (theme) { document.documentElement.dataset.theme = theme }
const themeSwitchers = document.querySelectorAll('header span img')
themeSwitchers.forEach(elt => elt.addEventListener('click', event => {
  const newTheme = event.target.dataset.themeSwitcher
  window.localStorage.setItem('theme', newTheme)
  document.documentElement.dataset.theme = newTheme
}))
