const ElementLoader: React.FC = () => {
    return (
        <div className="flex-col gap-4 w-full h-full flex items-center justify-center">
            <div
                className="w-20 h-20 border-4 border-transparent text-[#056100] text-4xl animate-spin flex items-center justify-center border-t-[#056100] rounded-full"
            >
                <div
                    className="w-16 h-16 border-4 border-transparent text-[#056100] text-2xl animate-spin flex items-center justify-center border-t-[#056100] rounded-full"
                ></div>
            </div>
        </div>
    )
}

export default ElementLoader