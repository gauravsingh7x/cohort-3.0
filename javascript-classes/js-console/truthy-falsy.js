if ("hello")
    console.log("truthy", typeof("hello"));   // runs
if (0)
    console.log("won't run", typeof(0));
if ([])
    console.log(0, "truthy", typeof([]));   // runs! empty array is truthy