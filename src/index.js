import Main from './components/Main'
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Main', Main)
}
Main.install = function(Vue){
  Vue.component(Main.name, Main)
}
export default Main
