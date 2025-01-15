interface EndProps {
    show: boolean;
}

const End: React.FC<EndProps> = ({ show }) => {
    return (
        <div 
            className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#b5e7d6] overflow-hidden duration-300"
            style={
                show ? {
                    maxHeight: '100vh',
                    opacity: 1,
                } : {
                    maxHeight: '0',
                    opacity: 0,
                }
            }
        >
            <p className="text-[36px] text-gray-900">
                Thank you! We will be in touch soon.
            </p>
        </div>
    )
}

export default End;