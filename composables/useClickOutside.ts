/**
 *
 * @param el_target_ref  the root element for which clicking outside will trigger the callback_fn
 * @param callback_fn the function to call when user clicks outside
 * @returns
 */
export default function useClickOutside(el_target_ref : (HTMLElement|any), callback_fn: ()=>void) {
  if (!el_target_ref) return;

  let listener = (e:Event) => {
    if (
      e.target == el_target_ref.value ||
      e.composedPath().includes(el_target_ref.value)
    ) {
      //we clicked inside the element
      return;
    }
    //we clicked outside the element
    if (typeof callback_fn == "function") {
      callback_fn();
    }
  };
    onMounted(() => {
      window.addEventListener('click', listener);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('click', listener);
    });
  return {
    listener,
  };
}
