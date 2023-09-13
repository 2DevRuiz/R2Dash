interface IToast {
    message:string;
    key?:symbol
}
export default reactive({
    items: [] as Array<IToast>, // Especifica el tipo de items
    addToast(toast: IToast) { // Tipo explícito para toast
      this.items.unshift({
        key: Symbol(),
        ...toast,
      });
    },
  remove(index:any){
    this.items.splice(index,1)
  }
});
