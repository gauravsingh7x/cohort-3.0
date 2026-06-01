

//When you have many possible values for one variable,
// switch is often cleaner than long if-else chains.

//Note: switch uses === (strict equality) for comparison.
let day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend coming!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Midweek day");
}