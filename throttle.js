

function throttle(another,delay){

    let time=0;
    return function(){
        let current=Date.now();
        if(current-time>=delay){
            another()
            time=current 
        }
           
    }
}
function another(){
    console.log("Hello everybody ");
    
}

const final_result=throttle(another,2000);

final_result()