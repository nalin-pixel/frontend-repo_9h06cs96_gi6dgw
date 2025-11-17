import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('UI error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold">Something went wrong.</h2>
            <p className="text-white/70 mt-2">The section failed to load. Please refresh the page.</p>
          </div>
        </section>
      )
    }
    return this.props.children
  }
}
