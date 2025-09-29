

const Input = ({...props}) => {
    // console.log(title)

    return (
        <>
          <input
            {...props}
            type="text"
            id="title"
            name="title"
            placeholder="Введите заголовок..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </>
    );
}

export default Input;