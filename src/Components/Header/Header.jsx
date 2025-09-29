import Button from "../UI/button/Button";
import Input from "../UI/input/Input";


const Header = () => {
    return (
        <header className="w-full bg-gray-900 shadow-lg border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Логотип / Название */}
                <h1 className="text-2xl font-bold text-white tracking-wide">
                ✅ ToDo List
                </h1>

                {/* Кнопки справа */}
                <nav className="flex items-center space-x-4">
                    <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl transition hover:cursor-pointer">
                        👤 Профиль
                    </Button>
                </nav>
            </div>
        </header>
    );
}

export default Header;