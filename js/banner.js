//清除class
var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}
//主函数
const toggle = () => {
    var banner = document.querySelector(".banner")
    banner.addEventListener("mouseover", (event) => {
        var self = event.target
        if (self.classList.contains("wordBox")) {
            removeClassAll("change")
            var item = self.parentElement
            item.classList.add("change")
        }
    })
}

toggle()