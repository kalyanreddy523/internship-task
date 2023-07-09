export default function Test(){
    var val=document.getElementById("range").value;
    var len=val.length;
    document.getElementById("Mymeter").value=len;
    document.getElementById("message").value=len;
    return(
        <>
        <input type="range" name="range" id="pwd" onKeyUp={Test}/>
        <br/>
        <meter id="Mymeter" value="0" min="0km" max="5km">
        </meter>
         <h3 id="message"><span>Distance:</span></h3>
        </>
    )
    }