

function Card({ myText}) {
    return (
        <div className="mx-auto mt-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Modern house" className="h-64 w-full object-cover" />
            <div className="p-8">
                <h2 className="mb-3 text-3xl font-bold">Modern House</h2>
                <p className="mb-6 text-gray-600"> A beautiful modern home with a clean design and spacious interior.     </p>
                <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"> {myText}</button>
            </div>
        </div>
    );
}

export default Card;