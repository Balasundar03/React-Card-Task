import { BsCart } from "react-icons/bs"; // Importing the cart icon from react-icons library

function Nav({ cartCount, handleModalToggle }) {
    return (
        <nav className='border-b-2 shadow flex flex-wrap justify-around items-center p-6 text-2xl'>
            {/* Logo section */}
            <div className="font-semibold text-3xl">Cart Task</div>

            {/* Cart section */}
            <div className='flex justify-center hover:scale-105' onClick={handleModalToggle}>
                {/* Cart icon */}
                <BsCart className='text-4xl' />

                {/* Cart count badge */}
                <span className='border h-5 w-5 flex justify-center items-center rounded-full text-sm bg-red-400 hover:bg-red-500 focus:bg-red-500 text-white -ms-3'>
                    {cartCount} {/* Display the number of items in the cart */}
                </span>
            </div>
        </nav>
    );
}

export default Nav;