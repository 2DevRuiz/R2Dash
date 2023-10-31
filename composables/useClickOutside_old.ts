// export default function useClickOutside(
//     component: HTMLElement | null,
//     callback: () => void,
//     excludeComponent: HTMLElement | null
//   ) {
//     if (!component) {
//       throw new Error('A target component has to be provided.');
//     }

//     if (!callback) {
//       throw new Error('A callback has to be provided.');
//     }

//     const listener = (event: MouseEvent) => {
//       if (
//         event.target === component ||
//         event.composedPath().includes(component) ||
//         // event.target === excludeComponent ||
//         // event.composedPath().includes(excludeComponent)
//         (excludeComponent && (event.target === excludeComponent || event.composedPath().includes(excludeComponent)))
//       ) {
//         return;
//       }
//       if (typeof callback === 'function') {
//         callback();
//       }
//     };

//     onMounted(() => {
//       window.addEventListener('click', listener);
//     });

//     onBeforeUnmount(() => {
//       window.removeEventListener('click', listener);
//     });
//   }

export default function useOutsideClick(
  element: HTMLElement,
  callback: () => void
) {
  const isOutsideClick = ref(false);

  const handleClick = (event: MouseEvent) => {
    const clickedOutsideMenu = !element.value?.contains(event.target as Node);
    const clickedInsideMenu = element.value?.contains(event.target as Node);
    // console.log(clickedOutsideMenu);
    if (clickedOutsideMenu && !clickedInsideMenu) {
      console.log("if toolbal");
      callback();
      // isOutsideClick.value = true;
      // open.value = false;
    }
    // if (element.value && !element.value.contains(event.target as Node)) {
    //   console.log("else toolbal");
    //   // callback();
    //   // isOutsideClick.value = true;
    // }
  };

  document.addEventListener("click", handleClick);

  onUnmounted(() => {
    document.removeEventListener("click", handleClick);
  });

  return {
    isOutsideClick,
  };
}
