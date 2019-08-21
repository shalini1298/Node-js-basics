  let c=0;
  const id1 = setInterval(()=>{
    console.log("hey!");  
    c++;
    if(c===5)
    clearInterval(id1);
  },1000)

  const id2 = setTimeout(()=>{
    console.log("hello!");  
    clearTimeout(id2);
  },1000)
