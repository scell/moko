export class ZoneNavigator extends HTMLElement {

    constructor(containerSelector) {
        super()
        if (containerSelector)
            this.$container = document.querySelector(containerSelector)
    }

    connectedCallback() {
        if (this.getAttribute('container-selector')) {
            this.$container = document.querySelector(this.getAttribute('container-selector'))
        }
        if (!this.$container) {
            throw new Error('no container id defined for this navigator')
        } 
    }

    push (state) {
        state.props = state.props || {}
        const controller = new state.viewController(state.props)
        controller.navigator = this;
        this.$container.innerHTML = ''
        this.$container.appendChild(controller.render())
    }

    handleUrlRouting (routingData) {
        Object.getOwnPropertyNames(routingData).forEach( key => {
            if (this.handleRouting) {
                this.handleRouting(key,routingData[key])
            }
        },this)
    }
}

customElements.define('scell-zone-navigator', ZoneNavigator)