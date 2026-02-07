document.querySelector(".gallery").addEventListener("click",function(e){var t,a,r=e.target,c=document.querySelector("#largeImg");"IMG"===r.tagName?t=r.closest("a")||r.parentElement:"A"===r.tagName&&(t=r),t&&(a=t.getAttribute("href")||t.dataset.src),t&&"A"===t.tagName&&e.preventDefault(),a&&(c.src=a)});
//# sourceMappingURL=index.db540c2c.js.map
