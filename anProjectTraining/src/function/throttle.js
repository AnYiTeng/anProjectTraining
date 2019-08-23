function throttle(callback,delay){ 
    let start = 0;
    return function(a){
        a = 1;
        // console.log(this)
        const current = Date.now();
        if(current - start > delay){
            // callback();
            callback.apply(this,arguments);
            start = current;
        }
    }
}

export default throttle