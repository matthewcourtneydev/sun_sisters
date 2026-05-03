let observer

export const setupScrollReveal = () => {
  const elements = document.querySelectorAll('[data-reveal]')

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px',
      }
    )
  }

  elements.forEach((element) => {
    observer.observe(element)

    // fallback so things already in view do not stay hidden
    const rect = element.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('is-visible')
    }
  })
}