
const TextArea = ({...props}) => {
    // console.log(description)
    return (
        <textarea
          {...props}
          id="description"
          name="description"
          rows="3"
          placeholder="Введите описание..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>
    );
}

export default TextArea;