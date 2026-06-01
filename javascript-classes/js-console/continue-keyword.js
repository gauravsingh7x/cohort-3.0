
//continue — skip the current iteration, go to the next

// Prints: 1, 2, 4, 5  (3 is skipped)
for (let i = 1; i <= 5; i++) {
    if (i === 3) 
        continue;   //skip the 3 and continue
    console.log(i);
}
 