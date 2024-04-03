var personName = "John";
console.log("Lowercase:", personName.toLocaleLowerCase());
console.log("Uppercase:", personName.toLocaleUpperCase());
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toLocaleUpperCase(); }));
