import React from 'react'

const Reviews = ({ reviews }) => {
    return (
        <ul className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full mx-auto my-8 border transition duration-500">
            <li className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wide">
                Reviews
            </li>
            {reviews.map((review, idx) => (
                <li key={idx} className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-500">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-900 dark:text-white">
                                {review.reviewerName}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {(review.date).toLocaleString()}
                            </span>
                            <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                            </svg>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Reviews
