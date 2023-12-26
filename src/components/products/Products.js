import { GetAllData } from "@/utils/GetAllData";
import Image from "next/image";
import Link from "next/link";

const Products = async () => {
    const data = await GetAllData();
    console.log(data);
    return (
        <>
            <h1 className="text-center font-bold text-5xl my-20">All Products</h1>
            <div className="grid grid-cols-1 mx-5 lg:mx-0 lg:grid-cols-3 gap-4">
                {
                    data.map((item) => (
                        <div key={item.id} >
                            <Link href={`/products/${item.id}`}>
                                <div className="card card-compact h-96 bg-base-100 shadow-xl">
                                    <figure className="h-2/4"><Image src={item.image} width={100} height={100} alt="image" /></figure>
                                    <div className="card-body h-2/4">
                                        <h2 className="text-base font-bold">{item.title}</h2>
                                        <div className="flex flex-col mt-3 gap-3 justify-start items-center">
                                            <div className="badge badge-lg badge-info p-3 font-semibold text-white">{item.category}</div>
                                            <div className="badge badge-lg badge-outline badge-secondary p-3 ">Price: ${item.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Products;