import ImgProvider from '../../assets/images/provider.jpg'
// import ImgService1 from '../../assets/images/services/service-1.jpeg';
// import ImgService2 from '../../assets/images/services/service-2.jpg';
// import ImgService3 from '../../assets/images/services/service-3.jpg';
// import ImgService4 from '../../assets/images/services/service-4.jpg';

// import InfoCard from './components/InfoCard';

const Services: React.FC = () => {

  // const infos = [
  //   {
  //     type: 'text',
  //     title: 'Retail & commerce',
  //     desc: 'Where online shopping and e-commerce used to be an option for those too busy to go to a shop, current times have turned them into a "must" for all retail corporations.'
  //   },
  //   {
  //     type: 'text',
  //     title: 'Banking, finance & insurance',
  //     desc: 'As cash slowly becomes a thing of the past and contactless payment, personal banking, finance & insurance become mobile services for users, the need to update brands is huge.'
  //   },
  //   {
  //     type: 'image',
  //     imgSrc: ImgService1
  //   },
  //   {
  //     type: 'text',
  //     title: 'Fast moving consumer goods',
  //     desc: `With a major shift towards online platforms, FMCG's dependency on digitisation is playing an increasingly large role.`
  //   },
  //   {
  //     type: 'text',
  //     title: 'Energy & utilities',
  //     desc: 'The demand for green energy is growing as mainstream media and politics begin to support and push for this change.'
  //   },
  //   {
  //     type: 'text',
  //     title: 'Fashion & lifestyle',
  //     desc: 'Conglomerates such as Primark and H&M that are able to produce new collections at high speed for ridiculously low prices are likely something that will never disappear.'
  //   },
  //   {
  //     type: 'text',
  //     title: 'Tech, media & telecommunications',
  //     desc: 'With the arrival of 6G, there will be a whole new realm of possibilities at our fingertips. For example, the internet of things will expand and with it, the issue of data privacy.'
  //   },
  //   {
  //     type: 'image',
  //     imgSrc: ImgService2
  //   },
  //   {
  //     type: 'text',
  //     title: 'Life sciences & health',
  //     desc: 'The impact of health and life sciences on our society, at both a local and a global level, has never received as much attention as it does in current times.'
  //   },
  //   {
  //     type: 'text',
  //     title: 'Manufacturing & industrials',
  //     desc: 'A constant increase in speed, quality and efficiency is pushing this industry to automate its processes as much as is humanly possible.'
  //   },
  //   {
  //     type: 'image',
  //     imgSrc: ImgService3
  //   },
  //   {
  //     type: 'text',
  //     title: 'Agri-food',
  //     desc: 'It is becoming commonly accepted that the current way we consume our food is not sustainable for an ever-growing population and a planet that is already under stress.'
  //   },
  //   {
  //     type: 'text',
  //     title: 'Public service & non-profit',
  //     desc: 'While public services are a force for good, they face a lot of criticism because they are so visible in the public domain, and they spend tax payers money.'
  //   },
  //   {
  //     type: 'text',
  //     title: 'Logistics',
  //     desc: 'The rise of artificial intelligence and augmented reality for shippers, carriers, suppliers and consumers is a given in the near future of this sector.'
  //   },
  //   {
  //     type: 'text',
  //     title: 'Travel, hospitality & entertainment',
  //     desc: 'With the exception of conglomerates such as Netflix and Amazon who are already masters at infiltrating our daily lives through our mobile devices and home entertainment systems, this sector is facing major challenges.'
  //   },
  //   {
  //     type: 'image',
  //     imgSrc: ImgService4
  //   }
  // ]

  return (
    <>
      <div>
        <div className="h-[55vh] flex justify-center items-center bg-gray-500 sticky top-0">
          <h1 className="text-[7vw] font-[600] text-center">INDUSTRIES</h1>
        </div>
        <div className="bg-cyan-500 top-0 sticky max-h-[100vh] overflow-hidden" >
          <img src={ImgProvider} />
        </div>
        <div className="bg-blue-400 min-h-[]">
          <div className='flex flex-wrap'>
            {/* {
              infos.map((info, i) => (
                <InfoCard info={info} key={i} />
              ))
            } */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
