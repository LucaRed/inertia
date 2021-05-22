import { Router } from './router'

export { default as createHeadManager } from './head'
export { default as shouldIntercept } from './shouldIntercept'
export { hrefToUrl, mergeDataIntoQueryString, urlWithoutHash } from './url'

export const Inertia = new Router()
