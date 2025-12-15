// Main Logic

export function initTheme() {
  // Check for saved theme or system preference
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function setupThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle')
  const mobileThemeBtn = document.getElementById('theme-toggle-mobile')

  // Icons
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

  function updateIcons() {
    // Mobile icons are optional depending on if they exist in DOM
    const mobileLightIcon = mobileThemeBtn?.querySelector('.theme-toggle-light-icon')
    const mobileDarkIcon = mobileThemeBtn?.querySelector('.theme-toggle-dark-icon')

    if (document.documentElement.classList.contains('dark')) {
      themeToggleDarkIcon?.classList.remove('hidden')
      themeToggleLightIcon?.classList.add('hidden')
      if (mobileDarkIcon) mobileDarkIcon.classList.remove('hidden')
      if (mobileLightIcon) mobileLightIcon.classList.add('hidden')
    } else {
      themeToggleDarkIcon?.classList.add('hidden')
      themeToggleLightIcon?.classList.remove('hidden')
      if (mobileDarkIcon) mobileDarkIcon.classList.add('hidden')
      if (mobileLightIcon) mobileLightIcon.classList.remove('hidden')
    }
  }

  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
    updateIcons()
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme)
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme)

  // Initial update
  updateIcons()
}

export function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn')
  const menu = document.getElementById('mobile-menu')
  const links = document.querySelectorAll('.mobile-link')

  if (!btn || !menu) return

  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    menu.classList.toggle('hidden')
  })

  links.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden')
    })
  })

  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.add('hidden')
    }
  })
}

export function setupScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-to-top')
  if (!scrollTopBtn) return

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.remove('translate-y-20', 'opacity-0')
    } else {
      scrollTopBtn.classList.add('translate-y-20', 'opacity-0')
    }
  })

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
}

export function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]')
  const desktopLinks = document.querySelectorAll('.nav-link')
  const mobileLinks = document.querySelectorAll('.mobile-link[href^="#"]')

  if (sections.length === 0) return

  function setActiveMenu() {
    let scrollY = window.scrollY

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 100 // Adjustment for header height
      const sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // Update Desktop
        desktopLinks.forEach((link) => {
          link.classList.remove(
            'text-blue-600',
            'dark:text-blue-400',
            'bg-blue-50',
            'dark:bg-slate-800'
          )
          link.classList.add('text-slate-600', 'dark:text-slate-300') // Default styling
          if (link.getAttribute('href').includes(sectionId)) {
            link.classList.add(
              'text-blue-600',
              'dark:text-blue-400',
              'bg-blue-50',
              'dark:bg-slate-800'
            )
            link.classList.remove('text-slate-600', 'dark:text-slate-300')
          }
        })

        // Update Mobile
        mobileLinks.forEach((link) => {
          link.classList.remove(
            'bg-blue-50',
            'dark:bg-slate-800',
            'text-blue-600',
            'dark:text-blue-400'
          )
          link.classList.add('text-slate-600', 'dark:text-slate-300')
          if (link.getAttribute('href').includes(sectionId)) {
            link.classList.add(
              'bg-blue-50',
              'dark:bg-slate-800',
              'text-blue-600',
              'dark:text-blue-400'
            )
            link.classList.remove('text-slate-600', 'dark:text-slate-300')
          }
        })
      }
    })
  }

  window.addEventListener('scroll', setActiveMenu)
  // Run once on load
  setActiveMenu()
}
