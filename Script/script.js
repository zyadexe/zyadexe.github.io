function NoX() {
    var conf =confirm("حسابي على منصة X غير نشط حالياً ،هل تود الإستمرار؟");
    if (conf == true) {
        var anchor = document.createElement('a');
        anchor.href='https://twitter.com/zyadexe';
        anchor.target="_blank";
        anchor.click();
    }else{
       console.log(conf);
    }

}