
import { GetDetails } from "@/utils/GetDetails";
import Image from "next/image";

const ProductDetails = async ({ params }) => {
    
    // Product details data fetching
    const data = await GetDetails(params.productId);
    console.log(data);

    return (
        <div className='max-w-4xl mx-auto'>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image src={data.image} width={300} height={200} alt="image" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-3xl font-bold">{data.title}</h2>
                    <div className="flex mt-5 gap-3 justify-start items-center">
                        <div className="badge badge-lg badge-info p-3 font-semibold text-white">{data.category}</div>
                        <div className="badge badge-lg badge-outline badge-secondary p-3 ">Price: ${data.price}</div>
                    </div>
                    <div className="badge mt-3 badge-lg badge-outline badge-error p-3 ">Rating: {data.rating.rate}/5 - ({data.rating.count})</div>
                    <h2 className="text-3xl pt-5 font-bold">Description</h2>
                    <p className="text-lg  p-5 font-medium">{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;