function createAnalytics() {
    let counter = 0
    let isDestroyed = false

    const listener = () => counter++
    document.addEventListener('click',listener)

    return {
        destroy() {
            document.removeEventListener('click',listener)
            isDestroyed = true
        },

        getClicks() {
            return isDestroyed === true ? 'Analytics has been destroyed' : counter
        },

        restart() {
            document.addEventListener('click',listener)
            isDestroyed = false
        }
    }
}

window.analytics = createAnalytics()