export const useStore = defineStore('main', {
  persist: true,
  state:()=>{
    return {
      theme:'light',
      requesting:false,
      showModal:false,
      requestConfig:undefined
    }
  },
  actions:{
    closeModal(){
      this.showModal = false
    },
    openModal(){
      this.showModal = true
    },
    setTheme(v){
      this.theme = v
    }
  },
  getters:{
    themeGetters:(state)=>state.theme
  }
})
