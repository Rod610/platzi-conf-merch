import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProductDetail = () => {

    const { state, addToCart } = useContext(AppContext);
    const { products } = state;

    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product);

        navigate('/checkout');
    };

    const { productId } = useParams();


    const selectedProduct = products.find(product => product.id.toString() === productId);

    return (
        <div>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <Tab.Group as="div" className="flex flex-col-reverse">
                        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                            <Tab.List className="grid grid-cols-4 gap-6">
                                {selectedProduct.images.map((image) => (
                                    <Tab
                                        key={image.id}
                                        className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span className="sr-only"> {image.name} </span>
                                                <span className="absolute inset-0 overflow-hidden rounded-md">
                                                    <img src={image.src} alt="" className="h-full w-full object-cover object-center" />
                                                </span>
                                                <span
                                                    className={classNames(
                                                        selected ? 'ring-red-600' : 'ring-transparent',
                                                        'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </>
                                        )}
                                    </Tab>
                                ))}
                            </Tab.List>
                        </div>

                        <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                            {selectedProduct.images.map((image) => (
                                <Tab.Panel key={image.id}>
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="h-full w-full object-cover object-center sm:rounded-lg"
                                    />
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>

                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{selectedProduct.title}</h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">$ {selectedProduct.price}</p>
                        </div>

                        <div className="mt-3">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                selectedProduct.rating > rating ? 'text-red-600' : 'text-gray-300',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{selectedProduct.rating} out of 5 stars</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>

                            <div
                                className="space-y-6 text-base text-gray-700"
                                dangerouslySetInnerHTML={{ __html: selectedProduct.description }}
                            />
                        </div>

                        <form className="mt-6">
                            <div className="sm:flex-col1 mt-10 flex">
                                <button
                                    type="button"
                                    onClick={() => handleAddToCart(selectedProduct)}
                                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-red-700 py-3 px-8 text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail