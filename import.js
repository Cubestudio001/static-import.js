/*
static-import.js

Create by Cubemode

Open Sourced under MIT License
 */

/**
 * Operate the page
 * @returns null
 */
function static_import() {
    let all_tags = $("import-static");
    for(let i=0;i<all_tags.length;i++){
        const x = all_tags[i];
        let src = x.attributes["src"].nodeValue;
        let stuff  = getPage(src);
        x.innerHTML = stuff;
    }
}

function static_import_by_div(){
    let all_div = $("div");
    for(let i = 0;i<all_div.length;i++){
        let pat = /\.import-static-(?=\S+)/;
        let iclass = all_div[i].attributes["class"].textContent;
        let x;
        if(doPatterMatches(iclass,pat)){
            x = iclass.replace(pat,"");
            all_div[i].innerHTML = getPage(x);
        }
    }
}

/**
 * @param{string} str
 * @param{object} pat
 * @returns{boolean}
 */
function doPatterMatches(str,pat){
    return str.search(pat)!=-1;
}

/**
 * @param{string} uri
 * @returns {string}
 * Return the ajax target page(raw)
 */
function getPage(turi){
    let rt;
    $.ajax({url:turi,success:function (res){rt = res},async:false})
    return  rt;
}

function do_it(){
    static_import();
    static_import_by_div();
}

/**
 * @param {string} tag_name
 * @returns {boolean}
 */
function isExist(tag_name){
    return $(tag_name).length!=0;
}

if(isExist("LOAD_ON_READY")){
    $(document).ready(function (){
       do_it()
    });
}
else if(isExist("LOAD_ON_CALL")){
    console.log("Waiting for call, use do_it() to render");
}
else do_it();