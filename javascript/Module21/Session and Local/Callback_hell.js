// Try to avoid triangle 
const btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    const f_promise = fetch("url")
    f_promise.then((response) =>{
        const s_promise = response.json()
        s_promise.then((Data)=>{
            console.log(data);
            const t_promise = fetch('url2')
            t_promise.then((res)=>{
                const for_promise = res.json()
                for_promise.then((data)=>{
                    console.log(data);
                })
            })
        })
    })
})