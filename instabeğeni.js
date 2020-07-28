let Begeniler = 0;
setInterval(() => {
    const kalp = document.querySelector('svg[aria-label="Like"]').parentNode;
    const ok = document.querySelector('a.coreSpriteRightPaginationArrow');
    if (kalp) {
        kalp.click()
        Begeniler++;
        console.log(`Beğenilen gönderi sayısı : ${Begeniler}`);
    }
    ok.click();
}, 5000);
