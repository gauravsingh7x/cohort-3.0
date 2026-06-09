
//Leap year

let year=2024;
/*
year%4==0 true leap
year%4==0 false not leap
AND
year%100!==0 true leap
year%4==0 false  leap
true AND true > leap
OR
year%400==0 true leap
year%400==0 false not leap

(y%4==0 & y%!=0 || y%400=0) leap
(true & true || true)
 */

if ((year%4==0 && year%100!==0) || year%400==0){
    console.log(year, 'is a leap year');
}else{
    console.log(year, 'is not  leap year' );
}