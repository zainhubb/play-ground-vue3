export const useStore = defineStore('main', {
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
    }
  }
})
