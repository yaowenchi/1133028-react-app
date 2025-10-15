export const NAV_ITEMS = [
    {path:"/",label: "首頁", icon:"🖐"},
    {path:"/About",label: "關於我們", icon:"🎅"},
    {path:"/Menu",label: "菜單", icon:"🍔"},
    {path:"/Contact",label: "聯絡我們", icon:"🚨"}
];
export const isPathActive =(currentPath,targetPath) => {
    if (currentPath === "/" && targetPath ==="/") return true;
    return targetPath != "/" && currentPath.startsWith(targetPath);
};