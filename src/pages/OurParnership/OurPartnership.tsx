import ImgBg from '../../assets/images/home-background.jpg';

const OurPartnership: React.FC = () => {
    return (
        <>
            <div 
                style={{
                    backgroundImage: `url(${ImgBg})`
                }}
            >
               <div>
                    <h1 className='text-6xl text-center font-semibold'>OUR PARTNERSHIP</h1>
                </div> 
            </div>
        </>
    )
}

export default OurPartnership;