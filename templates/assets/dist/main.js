window.main=function(n){"use strict";const e="";function t(u,c){return u+c}return n.count=t,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),n}({});
let themeMode = localStorage.getItem('theme-mode') || 'light'
const doc = document
const html = doc.documentElement
let themeModeEl = null
if(themeMode === 'dark'){
    html.dataset.colorScheme = 'dark'
}
else{
    html.dataset.colorScheme = 'light'
}

window.onload = ()=>{
    if(doc.readyState === 'complete'){
        delete html.dataset.htmlHidden
    }
}

doc.addEventListener('DOMContentLoaded', ()=>{
    console.log('main>',main)


    themeModeEl = document.getElementById('themeMode')
    themeModeEl.onclick = function(e){
        if (themeMode === 'light') {
            changeThemeMode('dark')
        } else {
            changeThemeMode('light')
        }
    }
})

function changeThemeMode(mode){
    html.dataset.colorScheme = mode
    themeMode = mode
    localStorage.setItem('theme-mode', mode)
}