function getDateInfo() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let dateInfoTimer = setInterval(getDateInfo, [1000]);