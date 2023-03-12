import { defineStore } from 'pinia'
import axios from 'axios'
const useListStore = defineStore('listStore', {
  state() {
    return {
      list: []
    }
  },
  actions: {
    loadData(){
      console.log('拉数据')
    }
  },
  getters: {
    filteredList() {
      return (amount)=> {
        return this.list.slice(0, amount)
      }
    }
  }
})
export default useListStore