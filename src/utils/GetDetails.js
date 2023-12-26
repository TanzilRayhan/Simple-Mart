export const GetDetails = async(id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`,
    {
     cache: 'no-store'
    })
    return res.json();
 };
 