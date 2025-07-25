import More from "../../../assets/images/More.png";
import Conversions from "../../../assets/images/Conversions.png"; // <-- renamed image
import Time from "../../../assets/images/Time.png";
import businesses from "../../../assets/images/businesses.png"; // <-- renamed image
 // <-- renamed image
 // <-- renamed image

const stats = [
  { img: More, title: "3x More", desc: "Qualified Leads" },
  { img: Conversions, title: "2x Conversions", desc: "From WhatsApp & Email" },
  { img: Time, title: "60% Time", desc: "Saved On Manual Tasks" },
  { img: businesses, title: "100+ Businesses", desc: "Streamlined Follow-Ups" },
];

const Oneyearmervo = () => {  
  return (
    <div className="bg-[#183F90] text-white py-12 px-6">
      <h2 className="text-center text-2xl md:text-[35px] font-bold">
        One Year With MARVO
      </h2>

      <div className="mt-10 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-[235px]">
            <div className=" w-[170px] h-[185px] flex items-center justify-center">
              <img src={item.img} alt={item.title} className="w-[170px] " />
            </div>
            <h3 className=" text-[28px] font-medium">{item.title}</h3>
            <p className="text-sm text-white text-center">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-white text-[20px] font-medium">
          You Don’t Need To Be Big To Grow Fast. Just Need The Right Tools.
        </p>
      <button className="mt-4 bg-blue-600 hover:bg-bg-blue-700 text-white px-6 py-2 rounded shadow">
  Learn More
</button>

      </div>
    </div>
  );
};

export default Oneyearmervo;
