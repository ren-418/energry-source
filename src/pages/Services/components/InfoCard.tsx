
interface InfoCardProps {
  type: 'image' | 'text';
  imgSrc?: string;
  title?: string;
  desc?: string;
}

const InfoCard: React.FC<{info:InfoCardProps}> = ({info}) => {
  return (
    <>
      <div className="max-h-[200px] max-w-[500px] grow">
        {
          info.type === 'image' ? 
          <div>
            <img src={info.imgSrc} />
          </div>
          : <div>
              <h3 className="text-xl font-[600]">{info.title}</h3>
              <p>{info.desc}</p>
          </div>
        }
      </div>
    </>
  )
}

export default InfoCard