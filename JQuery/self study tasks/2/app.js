$(document).ready(()=>{
    $('*[class]').css('background-color', 'green')
    $('div > p').css('fontSize', '20px')
    $('p[lang]:even').css('paddingLeft', '10px')
    $('p:even[lang]').css('paddingTop', '10px')
})