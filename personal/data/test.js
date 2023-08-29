
// built in module for working with files
const fs = require('fs')

// built in module for working with paths
const path = require('path')



var all_words = fs.readFileSync(path.join('/site','public','data','enable.txt')).toString().split('\n')

var req = {}
req.query = {}
req.query.word = "c"
req.query.excluded = "pxek"


var key = "";
if ('word' in req.query) {
    key = req.query.word;
} else {
    key = "";
}



//first letter of each word in dictionary equals first letter of word
var pass0 = all_words.filter(function(elem) {
    return elem.length == 5;
}

)
var pass1 = all_words.filter(function(elem){
    return elem.charAt(0) == key.charAt(0);
});
var pass2 = pass1.filter(function(elem){
    for(let i = 0; i < elem.length; i++)
        for(let j = 0; j < req.query.excluded.length; j++)
            if(elem.charAt(i) == req.query.excluded.charAt(j))
                return false;
    return elem.charAt(0) == key.charAt(0);
});
console.log(pass1)
console.log(pass2)


    //var lookUp = {}

    // for(let i=0; i<all_words.length;i++) {
    //     var word = all_words[i]
    //     for(let j=0; j <word.length; j++) {
    //         var s = String(i) + word.charAt(j)
    //         if(lookUp.has(s) === false) {
    //             lookUp.add(new Set(), s)
    //         }
    //         lookUp.get(s).add(word)
    //     }
    // }
    // if (key.length > 0) {
    //     setOfAll = set()
    //     for(let i = 0; i<key.length; i++) {
    //         var lookUpKey = String(i) + key.charAt(j);
    //         if (setOfAll.length === 0) 
    //             setOfAll = lookUp.get(lookUpKey);
    //         else {
    //             setOfAll = new Set(Array.from(setOfAll).filter(x => lookUp.get(lookUpKey).has(x)));
    //         }
    //     }
    // }
        
    
       // var t0 = all_words.filter(function(elem){
    //     if(key.charAt(0) === "*")
    //         return false
    //     else
    //         return (elem.charAt(0)===key.charAt(0))
    // })
    // console.log(t0);
    // if(key.length>1) {
    //     var t1 = t0.filter(function(elem){
    //         return (elem.charAt(1)===key.charAt(1))
    //     });
    //     if(key.length>2) {
    //     var t2 = t1.filter(function(elem){
    //         return (elem.charAt(2)===key.charAt(2))
    //     })
    //     if(key.length>3) {
    //     var t3 = t2.filter(function(elem){
    //         return (elem.charAt(3)===key.charAt(3))
    //     })
    //         if(key.length>4) {
    //             var t4 = t3.filter(function(elem){
    //                 return (elem.charAt(4)===key.charAt(4))
    //             })
    //         }
    //     }
    //     }
    // }
    // "A***B"
    // go through all_words and add words to an array when non * characters are in a specific location
    
    /*
    var arrA = key.split();
    function arr(req, res) {
        var t = all_words.filter(function(elem){
            
            if(elem != '*') {
                return ()
            }
        if(elem == '*')
            
        })
    } */
    
// goes through all_words and then 
// if letter is in nth position in array of each word
// - make array for each word and see if position of letter in key = position of letter in each word???

// var t = all_words.filter(function(elem) {
//     for(let i=0; i<all_words.length;i++) {
//         for(let k = 0; k <all_words[i].length; k++)
//             for(let j=0; j<arrA.split(); j++) {
//                 if(arrA[j] != "*") {
//                 //return(elem)
//                 //arrA[j] === all_words.length.charAt(k)
                
//             }
//         }
//     }
// }


  // displays word and letter --}}
    //<script type='text/javascript'>--}}
    //    var txt_input, hdr1, hdr2, exc_input, hdr3;--}}
    //    document.getElementById('txt-main').addEventListener('input', updateHeader)--}}
    //    function updateHeader(e) {--}}
    //        console.log(e)--}}
    //        txt_input = document.getElementById("txt-main");--}}
    //        hdr1 = document.getElementById("full-text");--}}
    //        hdr1.innerHTML = txt_input.value;--}}
    //        hdr2 = document.getElementById("single-letter");--}}
    //        hdr2.innerHTML = e.data;--}}
    //    }--}}
    // document.getElementById('txt-exc').addEventListener('input', updateExcluded)--}}
    //     function updateExcluded (e) {--}}
    //        console.log(e)--}}
    //        exc_input = document.getElementById("txt-exc");--}}
    //        hdr3 = document.getElementById("excl");--}}
    //        hdr3.innerHTML = exc_input.value;--}}
    //     }--}}
    //fetchFromServer(hd1.innerHTML, hd3.innerHTML);--}}

    //</script>--}}


    