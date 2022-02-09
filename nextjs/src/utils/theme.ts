export enum Themes {
  LIGHT = "light",
  DARK = "dark",
}

export function toggleTheme() {
  if (!localStorage.theme) {
    localStorage.theme = Themes.DARK;
  } else {
    localStorage.theme =
      localStorage.theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
  }
  loadTheme();
}

export function loadTheme() {
  if (localStorage.theme === Themes.DARK || !("theme" in localStorage)) {
    document.documentElement.classList.add(Themes.DARK);
  } else {
    document.documentElement.classList.remove(Themes.DARK);
  }
}
