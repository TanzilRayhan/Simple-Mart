
import { GetDetails } from "@/utils/GetDetails";
import Image from "next/image";

const ProductDetails = async ({ params }) => {
    const data = await GetDetails(params.productId);
    console.log(data);
    return (
        <div className='max-w-4xl mx-auto'>
            <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure className="h-2/4"><Image src={data.image} width={300} height={200} alt="image" /></figure>
                            <div className="card-body h-2/4">
                                <h2 className="text-base font-semibold">{data.title}</h2>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline badge-primary">{data.category}</div>
                                    <div className="badge badge-outline">Price: {data.price}</div>
                                </div>
                                <p>{data.description}</p>
                            </div>
                        </div>
        </div>
    );
};

export default ProductDetails;