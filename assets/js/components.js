export function renderNavbar(activePage = 'home') {
  const isHome = activePage === 'home'
  const baseUrl = isHome ? '' : 'index.html'

  return `
    <nav class="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <a href="${
                      baseUrl || '#'
                    }" class="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">ROBY <span class="text-blue-600 dark:text-blue-500">KORNELA</span></a>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-center space-x-8">
                        <a href="${baseUrl}#home" class="nav-link text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="${baseUrl}#about" class="nav-link text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="${baseUrl}#experience" class="nav-link text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Experience</a>
                        <a href="${baseUrl}#skills" class="nav-link text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                        <a href="projects.html" class="${
                          activePage === 'projects'
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800'
                            : 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400'
                        } transition-colors px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                        <a href="${baseUrl}#achievements" class="nav-link text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Achievements</a>
                        <a href="${baseUrl}#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">Contact Me</a>

                        <!-- Theme Toggle Button -->
                        <button id="theme-toggle" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                            <!-- Sun icon -->
                            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            <!-- Moon icon -->
                            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        </button>
                    </div>
                </div>
                <!-- Mobile menu button -->
                <div class="-mr-2 flex md:hidden items-center gap-2">
                    <button id="theme-toggle-mobile" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                        <svg class="theme-toggle-light-icon hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        <svg class="theme-toggle-dark-icon hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    </button>
                    <button type="button" id="mobile-menu-btn" class="bg-slate-200 dark:bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="hidden md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="${baseUrl}#home" class="mobile-link text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                <a href="${baseUrl}#about" class="mobile-link text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                <a href="${baseUrl}#experience" class="mobile-link text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Experience</a>
                <a href="${baseUrl}#skills" class="mobile-link text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>
                <a href="projects.html" class="mobile-link text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                <a href="${baseUrl}#achievements" class="mobile-link text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Achievements</a>
                <a href="${baseUrl}#contact" class="mobile-link bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4">Contact Me</a>
            </div>
        </div>
    </nav>`
}

export function renderFooter() {
  return `
    <footer class="mt-20 pt-8 border-t border-slate-200 dark:border-white/5 text-slate-500 text-sm transition-colors">
        <p>&copy; ${new Date().getFullYear()} IT Expert. All rights reserved.</p>
        <p class="mt-2">Designed with Professionalism & Impact.</p>
    </footer>`
}

export function renderFooterProjects() {
  return `
    <footer class="py-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-white/5 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>&copy; ${new Date().getFullYear()} Roby Kornela. IT Expert.</p>
    </footer>`
}
