const products = [
{
    id: "1",
    name: "Celular Quantum Q20 Blanco",
    price: 1000,
    category: "celular",
    img: "https://medias.musimundo.com/medias/size515-145907-01.jpg?context=bWFzdGVyfGltYWdlc3w1MDc2NHxpbWFnZS9qcGVnfGg2ZS9oNTMvMTA0OTExMzIwMTg3MTgvc2l6ZTUxNV8xNDU5MDdfMDEuanBnfDQ5ZjZlNjI3ODRmMWFhNTFhMDBjMjAzYWE2NmE1MTU4M2MwZDQwMzFhZjJmYjViYmVhMTFlZjYyYzMyNmZkZGM",
    stock: 8,
    description:"lorem lorem"
},

{    id: "2",
name: "Tablet hd samsung Negro",
price: 2000,
category: "tablet",
img: "https://medias.musimundo.com/medias/00326021-178605-178605-01.png-178605-01.png-size515?context=bWFzdGVyfGltYWdlc3w1MzQ0Mzd8aW1hZ2UvcG5nfGhlZC9oNjgvMTA0NTU1MzM0ODYxMTAvMDAzMjYwMjEtMTc4NjA1LTE3ODYwNV8wMS5wbmctMTc4NjA1XzAxLnBuZ19zaXplNTE1fGIyZGIwMThhZjM3Y2I4M2NiMzQxNGE1MjdiMmRiZjdmY2U5ODFiMjk0MjliY2ViNzk2MzdlYjMwMzkzYWY2N2U",
stock: 25,
description:"lorem lorem"},

{    id: "3",
name: "Notebook Lenovo Legion",
price: 3000,
category: "notebook",
img: "https://medias.musimundo.com/medias/size515-149471-02.jpg?context=bWFzdGVyfGltYWdlc3w0NDk2N3xpbWFnZS9qcGVnfGgwYS9oNDkvMTA1MDU4NTk4OTEyMzAvc2l6ZTUxNV8xNDk0NzFfMDIuanBnfDQ2ZTg3MjU5ZjhhZTFlMThkNTg5MmFhMWM2MzNhODg2NDFiODc1MTFmYjBlZTk0MjRiZjZjZjgzZDQ3ODc2YzE",
stock: 11,
description:"lorem lorem"}

]

export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}