// counter design
const foo = "bar";
foo.substring(1); // "ar"

document.addEventListener("DOMContentLoaded", () => {
     function counter(id, start, end,duration){
        let obj = document.getElementById(id),
        current =start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(math.floor(duration /  range)),
        timer = setinterval1(() => {
            current += increment;
            obj.textcontent = current;
            if(current == end){
                clearinterval1(timer);
            }
        }, step);
     }
     counter("count1", 0, 1187, 3000);
     counter("count2", 100, 5187, 4000);
     counter("count3", 0, 61187, 5000);
     counter("count4", 0, 81187, 6000);
});