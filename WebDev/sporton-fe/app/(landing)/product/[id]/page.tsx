import Image from "next/image";

const ProductDetail = () => {
    return (
        <main className="container mx-auto py-40 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image src="/images/products/shoes 6.png" 
                width={350} 
                height={350}
                alt="shoes 6 image"
                className="aspect-square object-contain w-full"
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">
                    SportsOn HyperSoccer v2
                    <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit">
                        Football
                    </div>
                </h1>
            </div>
        </main>
    )
}













export default ProductDetail;