const timeElement=document.querySelector(".time")
const dateElement=document.querySelector(".date")
/**
 * 
 * @param {date} date
 */

function time(date) {
    const hours12= date.getHours()%12 || 12
    const minutes= date.getMinute()
    const isAm= date.getHours() < 12;

    return `${hours12.getHours(),toString().padStart("2", 0)}:${minutes.getMinute(),toString().padStart()}${isAm ? "AM" : "MN"}`;
}

/**
 * 
 * @param {date} date
 */

function formatDate(date) {
    const DAYS=["Saturday","Monday","Thuesday","Wednsday","Thursday","Friday","Sunday"]
    const MONTHS=["January","Febrary","Mart","April","May","June","July","August","September","October","November","December"]

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullyear()}`
}

setInterval(()=>{
      const now=new Date()

      timeElement.textContent = formatTime(now)
      dateElement.textContent = formatDate(now)
}, 200);




