import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Image from 'next/image';

const plans = dataSite.products;

const Products = () => {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='products' className='bg-[#d1f5ec] py-20 px-6 md:px-20'>
      <h1 className='text-3xl md:text-4xl font-semibold text-center mb-16'>
        Our Best Products
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {plans.map((plan, index) => {
          const isInCart = validateProductInCart(plan.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(plan.id, plan);
          };
          return (
            <div
              key={index}
              className='bg-white border border-gray-300 rounded-md p-6 text-center shadow-sm'
            >
              <h3 className='text-xl font-bold text-[#0e0e23] mb-2'>
                {plan.name}
              </h3>
              <p className='text-3xl font-bold text-[#0e0e23] mb-1'>
                <span className='text-base align-super'>$</span>
                {plan.price}
                <span className='text-base font-normal'> USD</span>
              </p>

              {/* Rounded image */}
              <div className='my-4 flex justify-center'>
                <Image
                  src={plan.image}
                  alt={plan.name}
                  width={200}
                  height={200}
                  className='rounded-full border'
                />
              </div>

              <button
                onClick={handleClick}
                style={{
                  backgroundColor: isInCart ? '#f87171' : '#4ade80',
                }}
                className='bg-red-400 text-white py-2 px-4 rounded w-full mb-4 hover:bg-red-500 transition'
              >
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
              </button>

              <p className='text-gray-600 text-sm mb-4'>{plan.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
