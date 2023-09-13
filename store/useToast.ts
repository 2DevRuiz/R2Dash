import { defineStore } from 'pinia';
interface IToast {
    title:string;
    content?:string;
    key?:symbol;
    duration?:number;
    type?:string;
    icon?:string
}
export const useToastStore = defineStore({
  id: 'toastStore',
  state: () => ({
    items: [] as Array<IToast>,
  }),
  actions: {
    addToast(toast:IToast) {
      this.items.unshift({
        key: Symbol(),
        ...toast,
      });
    },
    remove(index:number) {
      this.items.splice(index, 1);
    },
  },
});