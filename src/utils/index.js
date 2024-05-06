export const openCustomPointer = true;
export const isMobile = !!navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
);
function enableTransitions() {
  return 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}
export const setTheme = async (theme,mouseEvent) => {
  let clipPath = [];
  if (mouseEvent) {
    const { clientX: x, clientY: y } = mouseEvent;
    clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )}px at ${x}px ${y}px)`,
    ];
  }
  if (!enableTransitions()) {
    document.documentElement.setAttribute("data-mode", theme);
    return
  }
  await document.startViewTransition(() => {
    document.documentElement.setAttribute("data-mode", theme);
  }).ready;
  if (!mouseEvent) return;
  document.documentElement.animate(
    { clipPath: theme == "dark" ? clipPath : clipPath.reverse() },
    {
      duration: 300,
      easing: "ease-in-out",
      pseudoElement: `::view-transition-${
        theme == "dark" ? "new" : "old"
      }(root)`,
    }
  );
};
