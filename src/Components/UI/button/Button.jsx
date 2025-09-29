

const Button = ({children, ...props}) => {
    return (
        <button {...props} type="submit" className="w-full px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:cursor-pointer">
            {children}
        </button>
    );
}

export default Button;