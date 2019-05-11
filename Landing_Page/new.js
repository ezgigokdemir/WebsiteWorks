//youtube thumbnnail
let youtube = {};
((o) => {
    const attName = "youtube";
    o.refresh = () => {
        let arr = document.querySelectorAll(`[${attName}]`);
        for (let el of arr) {
            let id = el.getAttribute(attName);
            if (id.length == 0)
                continue;
            el.style.backgroundImage = `url('https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
            el.addEventListener("click", () => el.querySelector("iframe").setAttribute('src', "//youtube.com/embed/" + id));
            el.setAttribute(attName, '');
        }
    }
    o.refresh();
    o.interval = setInterval(o.refresh, 2500)
})(youtube);